import React from "react";

const ProjectSidebar = ({ categories, setCategory, selectedCategory }) => {
  return (
    <div id='project-sidebar' className='w-[20%] flex flex-col h-full pt-12'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`py-3 text-start pl-12 text-lg font-semibold left-0 flex rounded-r-lg ${
            category === selectedCategory
              ? "bg-slate-500 text-white"
              : "hover:bg-slate-200"
          }`}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectSidebar;
