import React from "react";

const sidebarList = [
  { title: "Housing" },
  { title: "Commercial" },
  { title: "Restaurant/Cafe" },
  { title: "Public Space" },
  { title: "Guesthouse/Villa" },
  { title: "Office" }
];

const ProjectSidebar = ({ category, setCategory }) => {
  return (
    <div id="project-sidebar" className="w-[20%] flex flex-col h-full pt-12">
      {sidebarList.map((item, index) => (
        <button
          key={index}
          className={`py-3 text-start pl-12 text-lg font-semibold left-0 flex rounded-r-lg ${category === item.title ? 'bg-slate-500 text-white' : 'hover:bg-slate-200'}`}
          onClick={() => setCategory(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default ProjectSidebar;
