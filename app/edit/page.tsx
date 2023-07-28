"use client";

import FormContainer from "@/components/edits/FormContainer";
import Header from "@/components/Header";

import SideBar from "@/components/edits/SideBar";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main>
      <div>
        <Header />
        <div className="flex pt-20 px-10 gap-20 justify-center">
          <div className="w-[30%] bg-white h-screen max-w-[15rem] ">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="w-[70%] bg-white h-screen max-w-[55rem]">
            <FormContainer activeTab={activeTab} />
          </div>
        </div>
      </div>
    </main>
  );
}
