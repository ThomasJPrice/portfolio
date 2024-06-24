'use client';

import { Textfit } from 'react-textfit';
import { CustomLink, ImageGallery } from '.';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ProjectCard = ({ project, index, open, setOpenIndex }) => {
  const handleOpen = () => {
    if (open) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {/* TOP */}
      <div
        className={`w-full xl:h-[128px] group border ${open ? 'rounded-t-md' : 'rounded-md'} cursor-pointer`}
        onClick={() => handleOpen()}
      >
        <div className="mx-4 md:mx-8 flex justify-between items-center">
          {/* TEXT */}
          <div className="lg:max-w-[80%] w-[80%] xl:h-[96px] flex flex-col lg:flex-row lg:items-end justify-between lg:justify-start gap-2 my-4">
            <p
              className={`flex text-4xl md:text-5xl lg:text-7xl xl:text-8xl ${open ? 'lg:skew-x-[-10deg] text-primary' : 'group-hover:text-primary lg:group-hover:skew-x-[-10deg]'} uppercase transitionAll font-condensed leading-none`}
            >
              {project.name}
            </p>

            <p className="text-white opacity-70">({project.year})</p>
          </div>

          {/* BUTTON */}
          <div className="w-12 h-12 md:w-12 md:h-12 transition-all hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className={`${open ? 'fill-primary rotate-45' : 'fill-white group-hover:fill-primary'} transition-all`}
            >
              <defs />
              <path d="M26 0h12v64H26z" />
              <path d="M0 38V26h64v12z" />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTENT OPEN DEP */}
      <div
        className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[1000px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'} overflow-hidden flex flex-col lg:flex-row rounded-b-md px-4 lg:px-8 gap-4 lg:gap-[80px] border`}
      >
        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 md:gap-4">
              {project.tags.map((item, index) => (
                <p
                  key={index}
                  className={`text-small cursor-default bg-primary bg-opacity-40 py-1 px-2 rounded-md transition-transform transform ${index % 2 ? 'hover:-rotate-2' : 'hover:rotate-2'} hover:-translate-y-1 hover:shadow-lg`}
                >
                  {item}
                </p>
              ))}
            </div>

            <p>{project.description}</p>
          </div>

          <CustomLink
            link={project.website.replace('https://', '')}
            text="Visit Website"
            Icon={AiOutlineArrowRight}
            iconStyles="-rotate-45"
          />
        </div>

        {/* Gallery */}
        <div className="flex-1 w-full aspect-[3/2] overflow-hidden rounded-md">
          <ImageGallery images={project.imageUrls} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
