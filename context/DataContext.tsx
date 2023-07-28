"use client";

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export type Visibility = {
  xp: boolean;
  badges: boolean;
  followers: boolean;
};

export type Profile = {
  visibility: Visibility;
  name: string;
  profession: string;
  location: string;
  dob: string;
  imgSrc: string;
  gender: string;
};

export type Education = {
  institutionIcon: string;
  institutionName: string;
  location: string;
  courseName: string;
  degreeName: string;
  details: string;
  studiedFrom: string;
  till: string;
};

export type Experience = {
  companyIcon: string;
  designation: string;
  workLocation: string;
  companyName: string;
  workingFrom: string;
  till: string;
  jobDescription: string;
  jobResponsibilities: string;
};

export type Resume = {
  about: string;
  educations: Education[];
  experiences: Experience[];
  techskills: string[];
  interest: string[];
  languages: string[];
};

export type Playground = {
  title: string;
  skills: string;
  time: string;
  author: {
    name: string;
    image: string;
  };
};

export type Project = {
  image: string;
  name: string;
  skill1: string;
  skill2: string;
};

export type Portfolio = {
  playgrounds: Playground[];
  projects: Project[];
};

export type Socials = {
  github: string;
  linkedIn: string;
  facebook: string;
  instagram: string;
  dribble: string;
  behance: string;
  mail: string;
  youtube: string;
};

export type GlobalData = {
  profile: Profile;
  resume: Resume;
  portfolio: Portfolio;
  socials: Socials;
};

type DataContextType = {
  data: GlobalData;
  handleChange: Dispatch<SetStateAction<GlobalData>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

function DataContextProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<GlobalData>(() => {
    if (typeof localStorage !== "undefined") {
      const localData = localStorage.getItem("userData");

      if (localData) return JSON.parse(localData);
      return {};
    }
    return {};
  });

  const handleChange: DataContextType["handleChange"] = (val) => {
    setData(val);
    localStorage.setItem("userData", JSON.stringify(val));
  };

  return (
    <DataContext.Provider value={{ data, handleChange }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

export const useGlobalData = () => {
  return useContext(DataContext);
};
