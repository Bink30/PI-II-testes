import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700 ml-1">
        {label}
      </label>
      <input
        id={id}
        className={`border rounded-lg p-3 w-full focus:outline-none focus:ring-2 transition-all bg-gray-50 focus:bg-white
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-900'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium ml-1">{error}</span>
      )}
    </div>
  );
}