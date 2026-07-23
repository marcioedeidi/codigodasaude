import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border-2 rounded-lg transition-colors
            focus:outline-none focus:border-primary-500
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
        {helperText && !error && <span className="text-gray-500 text-sm mt-1 block">{helperText}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
