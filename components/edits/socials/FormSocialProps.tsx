import React, { ChangeEvent } from "react"

type FormSocialProps = {
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
}
const FormSocialProps: React.FC<FormSocialProps> = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="mb-5 ">
      <label className="font-bold text-sm ">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="border  w-full rounded-lg p-2 bg-white-50 "
      />
    </div>
  );
};

export default FormSocialProps;
