import React from "react";

interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  id?: string;
}

export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  name,
  id,
}: InputFieldProps) {
  return (
    <div className="flex mb-4 flex-col w-full max-w-[350px]">
      <div className="flex justify-between pb-1 items-center">
        <div className="flex items-center">
          {label && (
            <label
              className="text-start font-medium leading-[1.625em] text-[#020817] text-sm"
              htmlFor={id || name}
            >
              {label}
            </label>
          )}
        </div>
      </div>
      <input
        id={id || name}
        name={name}
        className={`border bg-transparent border-[#dedfe1] px-3 py-2 rounded-md text-gray-600 text-sm font-medium 
        focus:outline-none focus:border-blue-500 focus:border-[1.5px]`}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}