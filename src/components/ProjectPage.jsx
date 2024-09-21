"use client";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import Image from "next/image";
import giorno from "@/../public/images/Giorno.png";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "@/lib/contentful";
import { PuffLoader } from "react-spinners";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import Link from "next/link";

const ProjectPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace("/projects/", "");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        "content_type": "projects",
        "fields.slug": slug,
      })
      .then((response) => {
        if (response.items.length > 0) {
          setPost(response.items[0]);
          setCategory(response.items[0].fields.category);
          setLoading(false);
        } else {
          setPost(null);
          setCategory(null);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (category) {
      client
        .getEntries({ "content_type": "projects", "fields.category": category })
        .then((response) => {
          setAllPosts(response.items);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    } else {
      setAllPosts([]);
    }
  }, [category]);

  const getNextLink = () => {
    const currentPostIndex = allPosts.findIndex(
      (item) => item.fields.slug === slug
    );
    const nextIndex =
      currentPostIndex === allPosts.length - 1 ? null : currentPostIndex + 1;
    return nextIndex !== null
      ? `/projects/${allPosts[nextIndex].fields.slug}`
      : null;
  };

  const getPrevLink = () => {
    const currentPostIndex = allPosts.findIndex(
      (item) => item.fields.slug === slug
    );
    const prevIndex = currentPostIndex === 0 ? null : currentPostIndex - 1;
    return prevIndex !== null && allPosts[prevIndex]
      ? `/projects/${allPosts[prevIndex].fields.slug}`
      : null;
  };

  if (loading) {
    return (
      <div className='w-full h-[100vh] justify-center items-center flex'>
        <PuffLoader />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  const mainImageUrl = post.fields.mainImage.fields.file.url;
  const nextLink = getNextLink();
  const prevLink = getPrevLink();

  return (
    <div>
      {/* Header */}
      <Header title={post.fields.title} />
      <meta name='description' content={post.fields.title}></meta>
      {/* Content */}
      <div>
        {/* Main image */}
        <div className={`relative h-[75vh] px-8`}>
          <Image
            src={`https:${mainImageUrl}`}
            alt={post.fields.title}
            width={1000}
            height={600}
            className='relative w-full h-auto md:h-[75vh] object-cover rounded-b-[36px]'
            priority
          />
        </div>
        {/* Container */}
        <div className={`px-8`}>
          {/* Title & Category */}
          <div className='mt-4 mb-12'>
            <h1 className={`${styles.headpoints5xl} uppercase`}>
              {post.fields.title}
            </h1>
            <p className={`${styles.subheader} uppercase text-gray-400`}>
              {post.fields.category}
            </p>
          </div>
          {/* Content */}
          <div className='flex flex-row w-full mb-8 mt-4 relative'>
            {/* Side info */}
            <div className='xl:w-1/2 2xl:w-1/2 h-full sticky top-[60%] z-10 pr-[25%]'>
              <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
                <p className={`text-xl`}>LOCATION</p>
                <p className='font-bold text-xl'>{post.fields.location}</p>
              </div>
              <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
                <p className={`text-xl`}>CLIENT</p>
                <p className='font-bold text-xl'>{post.fields.projectClient}</p>
              </div>
              <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
                <p className={`text-xl`}>SITE AREA</p>
                <p className='font-bold text-xl'>
                  {post.fields.projectSiteArea}m²
                </p>
              </div>
              <div className='flex justify-between py-4 border-gray-500 px-4'>
                <p className={`text-xl`}>BUILDING AREA</p>
                <p className='font-bold text-xl'>
                  {post.fields.projectBuildingArea}m²
                </p>
              </div>
            </div>
            {/* Content */}
            <div className='w-1/2 pr-36 flex flex-col gap-12'>
              <div id='projectIntroduction'>
                <h2 className='font-bold mb-2'>Pengantar</h2>
                {documentToReactComponents(post.fields.projectDescription1)}
              </div>
              <div id='projectContextApproach'>
                <h2 className='font-bold mb-2'>Context Approach</h2>
                {documentToReactComponents(post.fields.projectDescription2)}
              </div>
              <div className='relative'>
                <Image
                  src={`https:${mainImageUrl}`}
                  className='relative w-full h-full object-cover z-0'
                  alt='giorno'
                  width={1000}
                  height={1000}
                />
              </div>
              <div id='projectIntroduction'>
                <h2 className='font-bold mb-2'>Architectural Approach</h2>
                {documentToReactComponents(post.fields.projectDescription3)}
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className={`px-8 mt-48`}>
          <div className='w-full h-full mb-8 relative flex gap-8'>
            <div className='w-1/2 bg-black'>
              <Image
                src={`https:${post.fields.projectGallery[0].fields.file.url}`}
                alt='giorno'
                width={500}
                height={500}
                className='object-cover h-full w-full'
              />
            </div>
            <div className='w-1/2'></div>
          </div>
          <div className='flex h-fit w-full gap-8 mb-8'>
            <div>
              <Image
                src={`https:${post.fields.projectGallery[1].fields.file.url}`}
                alt='giorno'
                className='h-64 object-cover'
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src={giorno}
                alt='giorno'
                className='h-64 object-cover'
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src={giorno}
                alt='giorno'
                className='h-64 object-cover'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='w-full h-fit mb-8 flex gap-8'>
            <div className='object-cover w-1/2'>
              <Image src={giorno} alt='giorno' />
            </div>
            <div className='object-cover w-1/2'>
              <Image src={giorno} alt='giorno' />
            </div>
          </div>
          <div className='w-full h-fit mb-8 flex gap-8  '>
            <div className='w-1/2'></div>
            <div className='object-cover h-96 w-1/2'>
              <Image src={giorno} alt='giorno' />
            </div>
          </div>
        </div>
      </div>

      {/* Prev next button */}
      <div className='flex justify-between px-8 py-12'>
        {/* Prev */}
        <div className='w-fit'>
          <Link
            href={prevLink || "#"}
            className={`text-xl flex items-center gap-2 border-b-2 border-transparent ${
              prevLink ? "hover:border-black" : "text-gray-400 cursor-default"
            }`}
            disabled={!prevLink}
            onClick={(e) => !prevLink && e.preventDefault()}
          >
            <HiOutlineArrowSmLeft className='w-8 h-8' />
            PREV
          </Link>
        </div>
        {/* Next */}
        <div className='w-fit'>
          <Link
            href={nextLink || "#"}
            className={`text-xl flex items-center gap-2 border-b-2 border-transparent ${
              nextLink ? "hover:border-black" : "text-gray-400 cursor-default"
            }`}
            disabled={!nextLink}
            onClick={(e) => !nextLink && e.preventDefault()}
          >
            NEXT
            <HiOutlineArrowSmRight className='w-8 h-8' />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className={`${styles.pageContainer}`}>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
