"use client";

import React, { useState, ChangeEvent } from "react";
import {
  PlayGroundCard,
  CardProps,
} from "@/components/profile/portfolio/PlayGrounds";
import CustomModal from "../CustomModal";
import { useSession } from "next-auth/react";
import EmptySection from "@/components/EmptySection";
import EditHoc from "../EditHoc";
import { toast } from "react-toastify";
import { Playground } from "@/context/DataContext";

type Props = {
  playgrounds: Playground[];
  setPlaygrounds: (val: Playground[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormPortfolioPlaygrounds({
  playgrounds,
  setPlaygrounds,
  setIsDirty,
}: Props) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState<Playground>({
    title: "",
    skills: "",
    author: {
      name: session?.user?.name as string,
      image: session?.user?.image as string,
    },
    time: new Date().toDateString(),
  });

  const [isEditMode, setIsEditMode] = useState<{
    value: boolean;
    index: number | null;
  }>({
    value: false,
    index: null,
  });

  const handleSubmit = () => {
    if (Object.values(inputs).length < 2) {
      toast.warn("Please fill all the fields");
      return;
    }

    setPlaygrounds([...playgrounds, inputs]);
    setIsOpen(false);
    setInputs({
      title: "",
      skills: "",
      author: {
        name: session?.user?.name as string,
        image: session?.user?.image as string,
      },
      time: new Date().toDateString(),
    });
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      skills: e.target.value,
    });
  };
  const handleEditClick = (index: number, val: Playground) => {
    setIsEditMode({
      value: true,
      index,
    });
    setIsDirty(true);
    setInputs({ ...val });
    setIsOpen(true);
  };

  const handleEdit = () => {
    const newValues = [...playgrounds];
    newValues.splice(isEditMode.index as number, 1, inputs);
    setPlaygrounds(newValues);
    setIsOpen(false);
    setInputs({
      skills: "",
      author: {
        image: "",
        name: "",
      },
      time: "",
      title: "",
    });
    setIsEditMode({
      value: false,
      index: null,
    });
  };

  const handleDelete = (index: number) => {
    setIsDirty(true);
    const newValues = [...playgrounds];
    newValues.splice(index, 1);
    setPlaygrounds(newValues);
  };

  return (
    <div className="mt-0 w-full ">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Playgrounds</div>
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
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Playgrounds Title"
            className="border  w-full rounded-lg p-2 bg-white-50"
          />
        </div>

        <div className="mb-5">
          <select
            onChange={handleSelect}
            className="border w-full rounded-lg p-2 bg-white-50"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Tech Stack
            </option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="ReactJs/Tailwind">ReactJs/Tailwind</option>
            <option value="NodeJs/Mongodb">NodeJs/Mongodb</option>
          </select>
        </div>
      </CustomModal>

      {playgrounds?.length > 0 ? (
        <div>
          {playgrounds?.map((play: CardProps, index: number) => {
            return (
              <EditHoc
                handleDeleteClick={() => handleDelete(index)}
                handleClick={() => handleEditClick(index, play)}
                key={index}
              >
                <PlayGroundCard key={index} {...play} />
              </EditHoc>
            );
          })}
        </div>
      ) : (
        <EmptySection title="Play Grounds" />
      )}
    </div>
  );
}

export default FormPortfolioPlaygrounds;
