import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import Eye from '@/components/icons/eye';
import EyeOff from '@/components/icons/eye-off';

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldError;
  trigger: (name: "username" | "email" | "password" | "confirmPassword" | "terms" | ("username" | "email" | "password" | "confirmPassword" | "terms")[] | readonly ("username" | "email" | "password" | "confirmPassword" | "terms")[] | undefined) => void;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  register,
  error,
  trigger,
  showPasswordToggle = false,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="mb-4 relative">
      <div className="relative">
        <input
          id={id}
          type={showPasswordToggle && showPassword ? 'text' : type}
          placeholder={placeholder}
          className="w-full px-3 py-4 border rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          {...register(id, {
            onChange: () => trigger(id as "username" | "email" | "password" | "confirmPassword" | "terms"),
            onBlur: () => trigger(id as "username" | "email" | "password" | "confirmPassword" | "terms"),
          })}
        />
        {showPasswordToggle && setShowPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{String(error.message)}</p>}
    </div>
  );
};

export default InputField;