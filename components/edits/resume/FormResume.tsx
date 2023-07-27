import React from "react";
import FromResumeAbout from "./FromResumeAbout";
import FormResumeWorkExperience from "./FormResumeWorkExperience";
import FormResumeEducation from "./FormResumeEducation";
import FormResumeTechSkills from "./FormResumeTechSkills";
import FormResumeIntrests from "./FormResumeIntrests";
import FormResumeLanguages from "./FormResumeLanguages";
import { Education, Experience, useGlobalData } from "@/context/DataContext";
import { useState } from "react";

function FormResume() {
  const { data, handleChange: handleGlobalChange } = useGlobalData();
  const [isDirty, setIsDirty] = useState(false);
  const [about, setAbout] = useState(() => {
    return data?.resume?.about;
  });
  const [educations, setEducations] = useState<Education[]>(() => {
    return data?.resume?.educations || [];
  });
  const [experiences, setExperiences] = useState<Experience[]>(() => {
    return data?.resume?.experiences || [];
  });
  const [techskills, setTechSkills] = useState<string[]>(() => {
    return data?.resume?.techskills || [];
  });
  const [interest, setInterest] = useState<string[]>(() => {
    return data?.resume?.interest || [];
  });
  const [languages, setLanguages] = useState<string[]>(() => {
    return data?.resume?.languages || [];
  });

  const handleSubmit = () => {
    const newData = {
      ...data,
      resume: {
        educations,
        about,
        experiences,
        techskills,
        interest,
        languages,
      },
    };
    handleGlobalChange(newData);
    setIsDirty(false);
  };
  return (
    <div className="mt-5 space-y-4">
      <FromResumeAbout
        about={about}
        setAbout={setAbout}
        setIsDirty={setIsDirty}
      />
      <FormResumeWorkExperience
        experiences={experiences}
        setExperiences={setExperiences}
        setIsDirty={setIsDirty}
      />
      <FormResumeEducation
        educations={educations}
        setEducations={setEducations}
        setIsDirty={setIsDirty}
      />
      <FormResumeTechSkills
        techskills={techskills}
        setTechSkills={setTechSkills}
        setIsDirty={setIsDirty}
      />
      <FormResumeIntrests
        interest={interest}
        setInterest={setInterest}
        setIsDirty={setIsDirty}
      />
      <FormResumeLanguages
        languages={languages}
        setLanguages={setLanguages}
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

export default FormResume;
