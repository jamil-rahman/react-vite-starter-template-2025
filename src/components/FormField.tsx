import type { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
  description?: string;
  children?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
}

export function FormField({
  label,
  id,
  type = 'text',
  required = false,
  error,
  description,
  children,
  value,
  onChange,
  textarea = false,
  rows = 4,
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const descId = description ? `${id}-description` : undefined;
  const ariaDescribedBy = [errorId, descId].filter(Boolean).join(' ') || undefined;
  
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-base font-semibold text-[var(--color-neutral)] mb-2">
        {label}
        {required && <span className="text-[var(--color-tertiary)] ml-1" aria-label="required">*</span>}
      </label>
      {description && (
        <p id={descId} className="text-sm text-[var(--color-neutral)] mb-2">
          {description}
        </p>
      )}
      {children || (
        <>
          {textarea ? (
            <textarea
              id={id}
              name={id}
              rows={rows}
              value={value}
              onChange={onChange}
              required={required}
              aria-describedby={ariaDescribedBy}
              aria-invalid={!!error}
              className={`w-full px-4 py-3 border-2 rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 transition-colors duration-200 ${
                error ? 'border-red-500' : 'border-[var(--color-primary)]'
              }`}
            />
          ) : (
            <input
              type={type}
              id={id}
              name={id}
              value={value}
              onChange={onChange}
              required={required}
              aria-describedby={ariaDescribedBy}
              aria-invalid={!!error}
              className={`w-full px-4 py-3 border-2 rounded-lg focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 transition-colors duration-200 ${
                error ? 'border-red-500' : 'border-[var(--color-primary)]'
              }`}
            />
          )}
        </>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

