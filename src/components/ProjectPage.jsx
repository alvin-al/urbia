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

const ProjectPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace("/projects/", "");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        "content_type": "projects",
        "fields.slug": slug,
      })
      .then((response) => {
        if (response.items.length > 0) {
          setPost(response.items[0]);
          setLoading(false);
        } else {
          setPost(null);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [slug]);

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

  return (
    <div className={`${styles.pageSize} flex border-2`}>
      <Header title={post.fields.title} />
      <meta name='description' content={post.fields.title}></meta>
      <div className='relative w-full h-[75vh]'>
        <Image
          src={`https:${mainImageUrl}`}
          alt={post.fields.title}
          width={1000}
          height={1000}
          className='relative w-full h-auto md:h-[75vh] object-cover rounded-b-[36px]'
          priority={true}
        />
      </div>
      <div className='mt-4 mb-12'>
        <h1 className={`${styles.headpoints5xl} uppercase`}>
          {post.fields.title}
        </h1>
        <p className={`${styles.subheader} uppercase text-gray-400`}>
          {post.fields.category}
        </p>
      </div>
      <div className='flex flex-row w-full mb-8 mt-4 relative'>
        <div className='w-1/2 h-full sticky top-[60%] z-10 pr-96'>
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
            <p className='font-bold text-xl'>{post.fields.projectSiteArea}m²</p>
          </div>
          <div className='flex justify-between py-4 border-gray-500 px-4'>
            <p className={`text-xl`}>BUILDING AREA</p>
            <p className='font-bold text-xl'>
              {post.fields.projectBuildingArea}m²
            </p>
          </div>
        </div>
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
      <div className='flex flex-row w-full mb-24'>
        <div className='w-1/2 h-full'></div>
        <div className='w-1/2 pr-36 pl-12 pt-12 flex flex-col gap-12'></div>
      </div>
      <div className='w-1/2 h-fit mb-8'>
        <Image
          src={`https:${post.fields.projectGallery[0].fields.file.url}`}
          alt='giorno'
          className='object-cover h-96'
          width={500}
          height={500}
        />
      </div>
      <div className='flex h-fit w-full gap-4 mb-8'>
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
      <div className='w-full h-fit mb-8 flex gap-4'>
        <div className='object-cover w-1/2'>
          <Image src={giorno} alt='giorno' />
        </div>
        <div className='object-cover w-1/2'>
          <Image src={giorno} alt='giorno' />
        </div>
      </div>
      <div className='w-full h-fit mb-8 flex gap-4  '>
        <div className='w-1/2'></div>
        <div className='object-cover h-96 w-1/2'>
          <Image src={giorno} alt='giorno' />
        </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
