import React, { ChangeEvent, useState, useEffect } from "react";
import FormSocialProps from "./FormSocialProps";
import { useGlobalData } from "@/context/DataContext";

type SocialsState = {
  github: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  dribble: string;
  behance: string;
  mail: string;
  youtube: string;
};

const FormSocials: React.FC = () => {
  const { data, handleChange: handleGlobalChange } = useGlobalData();

  const [isDirty, setIsDirty] = useState(false);
  const [inputs, setInputs] = useState<SocialsState>(() => {
    return data?.socials || {};
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    return () => {
      setIsDirty(false);
    };
  }, []);

  const handleSubmit = () => {
    if (!isDirty) return;

    const newData = {
      ...data,
      socials: {
        ...inputs,
      },
    };

    handleGlobalChange(newData);
    setIsDirty(false);
  };

  return (
    <div className="mt-10 w-full ">
      <FormSocialProps
        name="github"
        value={inputs.github}
        handleChange={handleChange}
        label="GitHub"
        placeholder="Github/profile.com"
      />

      <FormSocialProps
        name="mail"
        value={inputs.mail}
        handleChange={handleChange}
        label="Mail"
        placeholder="Mali ID"
      />
      <FormSocialProps
        name="facebook"
        value={inputs.facebook}
        handleChange={handleChange}
        label="Facebook"
        placeholder="Facebook profile url"
      />
      <FormSocialProps
        name="instagram"
        value={inputs.instagram}
        handleChange={handleChange}
        label="Instagram"
        placeholder="Instagram profile url"
      />
      <FormSocialProps
        name="dribble"
        value={inputs.dribble}
        handleChange={handleChange}
        label="Dribble"
        placeholder="Dribble profile url"
      />
      <FormSocialProps
        name="behance"
        value={inputs.behance}
        handleChange={handleChange}
        label="Behance"
        placeholder="Behance profile url"
      />
      <FormSocialProps
        name="youtube"
        value={inputs.youtube}
        handleChange={handleChange}
        label="Youtube"
        placeholder="Youtube Channel link"
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
};

export default FormSocials;
