import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  width?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  width = "w-full",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  error,
  disabled = false,
  readOnly = false,
  leftIcon,
  rightIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`flex flex-col gap-2 ${width}`}>
      <label
        htmlFor={name}
        className="text-[14px] font-[400] text-[#9596A0]"
      >
        {label}
      </label>
      <div
        className={`relative flex items-center border ${
          value?.length ? "border-[#252625]" : "border-transparent"
        } rounded-md px-3 py-2 text-sm transition-all duration-300 ${className}`}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <input
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          className="flex-1 outline-none bg-transparent"
        />

        {type === "password" ? (
          <button type="button" onClick={handlePasswordToggle} className="ml-2">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          rightIcon
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
