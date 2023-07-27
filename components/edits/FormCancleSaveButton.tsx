import React from "react";

function FormCancleSaveButton() {
  return (
    <div className="mt-6 flex justify-end ">
      <div className="flex gap-2">
        <button className="bg-gray-100 px-2 py-1 border rounded-lg text-black">
          Cancle
        </button>
        <button className="bg-indigo-600 px-2 py-1  border rounded-lg text-white">
          Save changes
        </button>
      </div>
    </div>
  );
}

export default FormCancleSaveButton;
