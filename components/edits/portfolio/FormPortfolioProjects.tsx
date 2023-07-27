"use client";

import React, { useState } from "react";
import { ProjectsCard } from "@/components/profile/portfolio/ProfileProjects";
import CustomModal from "../CustomModal";
import EmptySection from "@/components/EmptySection";
import EditHoc from "../EditHoc";
import { toast } from "react-toastify";
import { Project } from "@/context/DataContext";

type Props = {
  projects: Project[];
  setProjects: (val: Project[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormPortfolioProjects({ projects, setProjects, setIsDirty }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState<Project>({} as Project);

  const handleSubmit = () => {
    if (Object.values(inputs).length < 3) {
      toast.warn("Please fill all the fields");
      return;
    }
    setProjects([...projects, inputs]);
    setIsOpen(false);
    setInputs({} as Project);
  };

  const [isEditMode, setIsEditMode] = useState<{
    value: boolean;
    index: number | null;
  }>({
    value: false,
    index: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true)
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleRemove = (key: string) => {
    const newInputs: {
      [key: string]: string;
    } = { ...inputs };
    delete newInputs[key];

    setInputs(newInputs as Project);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (inputs.skill1 && inputs.skill2) return;
    if (!inputs.skill1) {
      setInputs({ ...inputs, skill1: e.target.value });
      return;
    }
    setInputs({ ...inputs, skill2: e.target.value });
  };

  const handleEditClick = (index: number, val: Project) => {
    setIsEditMode({
      value: true,
      index,
    });
    setIsDirty(true);
    setInputs({ ...val });
    setIsOpen(true);
  };

  const handleEdit = () => {
    const newValues = [...projects];
    newValues.splice(isEditMode.index as number, 1, inputs);
    setProjects(newValues);
    setIsOpen(false);
    setInputs({} as Project);
    setIsEditMode({
      value: false,
      index: null,
    });
  };

  const handleDelete = (index: number) => {
    setIsDirty(true);
    const newValues = [...projects];
    newValues.splice(index, 1);
    setProjects(newValues);
  };

  return (
    <div className="mt-0 w-full ">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Project</div>
        <button onClick={handleOpen} className="text-gray-400">
          Add
        </button>
      </div>

      <CustomModal
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        isEditMode={isEditMode.value}
        handleEdit={handleEdit}
      >
        <div className="mb-5 ">
          <input
            type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            placeholder="Project Image URL"
            className="border  w-full rounded-lg p-2 bg-white-50"
          />
        </div>

        <div className="mb-5 ">
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Project Title"
            className="border  w-full rounded-lg p-2 bg-white-50"
          />
        </div>

        <div className="mb-5">
          <select
            onChange={handleSelect}
            className="border w-full rounded-lg p-2 bg-white-50"
            defaultValue="" // Set this to the default value (placeholder)
          >
            <option value="" disabled hidden>
              Tech Stack
            </option>
            <option value="Javascript">Javascript</option>
            <option value="React JS">React JS</option>
            <option value="Next JS">Next JS</option>
            <option value="Angular">Angular</option>
          </select>
        </div>

        <div className="flex gap-2 mt-3 text-sm ">
          {Object.keys(inputs).map((key: string) => {
            if (key !== "skill1" && key !== "skill2") {
              return;
            }
            return (
              <div
                key={key}
                className="flex items-center border rounded-lg px-1 py-1 bg-blue-100 gap-2"
              >
                <p>{inputs[key]}</p>
                <p
                  className="text-xs text-red-500 -mt-3 font-bold cursor-pointer"
                  onClick={() => handleRemove(key)}
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </CustomModal>

      {projects?.length > 0 ? (
        <div>
          {projects?.map((project: Project, index: number) => {
            return (
              <EditHoc
                handleDeleteClick={() => handleDelete(index)}
                handleClick={() => handleEditClick(index, project)}
                key={index}
              >
                <ProjectsCard key={index} {...project} />
              </EditHoc>
            );
          })}
        </div>
      ) : (
        <EmptySection title="Projects" />
      )}
    </div>
  );
}

export default FormPortfolioProjects;
