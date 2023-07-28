"use client";

import FormContainer from "@/components/edits/FormContainer";
import Header from "@/components/Header";
import SideBar from "@/components/edits/SideBar";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-10">
        <div className="md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white h-full">
          <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="flex-1 bg-white h-full overflow-auto">
          <FormContainer activeTab={activeTab} />
        </div>
      </div>
    </main>
  );
}
