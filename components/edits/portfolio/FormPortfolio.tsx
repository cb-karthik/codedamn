"use client";

import { Playground, Project, useGlobalData } from "@/context/DataContext";
import FormPortfolioPlaygrounds from "./FormPortfolioPlaygrounds";
import FormPortfolioProjects from "./FormPortfolioProjects";
import { useState } from "react";

function FormPortfolio() {
  const { data, handleChange: handleGlobalChange } = useGlobalData();
  const [isDirty, setIsDirty] = useState(false);
  const [playgrounds, setPlaygrounds] = useState<Playground[]>(() => {
    return data?.portfolio?.playgrounds || [];
  });
  const [projects, setProjects] = useState<Project[]>(() => {
    return data?.portfolio?.projects || [];
  });

  const handleSubmit = () => {
    const newData = {
      ...data,
      portfolio: {
        playgrounds,
        projects,
      },
    };

    handleGlobalChange(newData);
    setIsDirty(false);
  };

  return (
    <div>
      <FormPortfolioPlaygrounds
        playgrounds={playgrounds}
        setPlaygrounds={setPlaygrounds}
        setIsDirty={setIsDirty}
      />
      <FormPortfolioProjects
        projects={projects}
        setProjects={setProjects}
        setIsDirty={setIsDirty}
      />
      <div className="mt-6 flex justify-end ">
        <div className="flex gap-2">
          <button className="bg-gray-100 px-2 py-1 border rounded-lg text-black">
            Cancle
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isDirty}
            className={` px-2 py-1  border rounded-lg text-white ${
              isDirty
                ? "bg-indigo-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPortfolio;
