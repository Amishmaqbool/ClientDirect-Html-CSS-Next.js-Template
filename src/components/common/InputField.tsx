interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  id?: string;
  error?: string;
}

export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  name,
  id,
  error, 
}: InputFieldProps) {
  return (
    <div className="flex flex-col w-full max-w-[350px]">
      <div className="flex justify-between pb-1 items-center">
        <div className="pt-4 flex items-center">
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
        focus:outline-none focus:border-blue-500 focus:border-[1.5px] ${
          error ? "border-red-500" : ""
        }`} 
        value={value}
        onChange={onChange}
        type={type}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>} {/* Display error message */}
    </div>
  );
}
