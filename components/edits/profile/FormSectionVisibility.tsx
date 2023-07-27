"use client";

import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import FormSwitch from "./FormSwitch";


type Visibility = {
  followers: boolean;
  xp: boolean;
  badges: boolean;
};
type Props = {
  visibility: Visibility;
  setVisibility: (val: Visibility) => void;
};

function FormSectionVisibility({ visibility, setVisibility }: Props) {
  //   const [badgesEnabled, setBadgesEnabled] = useState(false);

  return (
    <div className="w-full">
      <p className="font-bold text-lg ">Section Visibility</p>
      <p className="text-gray-600 text-xs">
        Select which sections and content should show on your profile page.
      </p>
      <div className="bg-gray-50 h-fit w-full border rounded-xl mt-4 p-4 ">
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Follwers and following</p>
            <p className="text-xs text-gray-500">
              Shows your followers and the users you follow on codedamn
            </p>
          </div>
          <FormSwitch
            enabled={visibility.followers}
            setEnabled={() =>
              setVisibility({ ...visibility, followers: !visibility.followers })
            }
          />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">XP</p>
            <p className="text-xs text-gray-500">Shows the XP you earned</p>
          </div>
          <FormSwitch
            enabled={visibility.xp}
            setEnabled={() =>
              setVisibility({ ...visibility, xp: !visibility.xp })
            }
          />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Achievment badges</p>
            <p className="text-xs text-gray-500">
              Shows your relative percentile and proficiency
            </p>
          </div>
          <FormSwitch
            enabled={visibility.badges}
            setEnabled={() =>
              setVisibility({ ...visibility, badges: !visibility.badges })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FormSectionVisibility;
