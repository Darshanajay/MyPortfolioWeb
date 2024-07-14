import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-4xl text-center my-20">Projects</h1>
        <div>
          {PROJECTS.map((pro, index) => (
            <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
              <div className=" w-full lg:w-1/4">
                <img
                  src={pro.image}
                  alt={pro.title}
                  width={150}
                  height={150}
                  className=" mb-6 rounded"
                />
              </div>
              <div className=" w-full max-w-xl lg:w-3/4">
                <h6 className=" mb-2 font-semibold">{pro.title}</h6>
                <p className=" mb-4 text-neutral-400">{pro.description}</p>
                {pro.technologies.map((tech, index) => (
                  <span
                    className=" mr-2 rounded bg-neutral-700 text-violet-500 px-2 py-1 text-sm font-medium"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
