import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-bold text-neutral-strong mb-2"
        >
          {label}
          {props.required && <span className="text-semantic-error ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`input min-h-[120px] resize-y ${hasError ? 'border-semantic-error focus:ring-semantic-error' : ''} ${className}`}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
        }
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-1 text-sm text-semantic-error"
          role="alert"
        >
          {error}
        </p>
      )}
      {helperText && !error && (
        <p
          id={`${textareaId}-helper`}
          className="mt-1 text-sm text-neutral-text/60"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Textarea;
