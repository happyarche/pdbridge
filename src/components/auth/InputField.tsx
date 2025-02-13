import React from 'react';
import { UseFormRegister, FieldError, Path, FieldValues } from 'react-hook-form';
import Eye from '@/components/icons/eye';
import EyeOff from '@/components/icons/eye-off';

interface InputFieldProps<T extends FieldValues> {
  id: Path<T>;
  type: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  trigger: (name: Path<T>) => void;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField = <T extends FieldValues>({
  id,
  type,
  placeholder,
  register,
  error,
  trigger,
  showPasswordToggle = false,
  showPassword,
  setShowPassword,
}: InputFieldProps<T>) => {
  return (
    <div className="mb-4 relative">
      <div className="relative">
        <input
          id={id}
          type={showPasswordToggle && showPassword ? 'text' : type}
          placeholder={placeholder}
          className="w-full px-3 py-4 border rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          {...register(id, {
            onChange: () => trigger(id),
            onBlur: () => trigger(id),
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