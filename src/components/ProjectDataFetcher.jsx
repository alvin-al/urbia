"use client";
import { useState, useEffect } from "react";
import client from "@/lib/contentful";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
const ProjectDataFetcher = ({
  onDataFetched,
  selectedCategory,
  onCategoryChange,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "projects",
      })
      .then((response) => {
        const posts = response.items || [];
        if (posts.length > 0) {
          const categoryOrder = [
            "Housing",
            "Commercial",
            "Restaurant/Cafe",
            "Public Space",
            "Guesthouse/Villa",
            "Office",
          ];

          const uniqueCategories = [
            ...new Set(
              posts
                .map((item) => item.fields && item.fields.category)
                .filter(Boolean)
            ),
          ];

          const sortedCategories = categoryOrder.filter((category) =>
            uniqueCategories.includes(category)
          );

          setCategories(sortedCategories);
          onDataFetched({
            posts,
            categories: sortedCategories,
            loading: false,
            selectedCategory: "Housing",
          });
        } else {
          onDataFetched({
            posts: [],
            categories: [],
            loading: false,
            selectedCategory: "Housing",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        onDataFetched({
          posts: [],
          categories: [],
          loading: false,
          selectedCategory: "Housing",
        });
      });
  }, [onDataFetched]);

  return (
    <div className=''>
      <Select onValueChange={onCategoryChange} value={selectedCategory}>
        <SelectTrigger className='w-full bg-white'>
          <SelectValue placeholder={selectedCategory} />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectDataFetcher;
