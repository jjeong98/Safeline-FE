import React, { forwardRef } from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  fullWidth?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      options,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const selectClasses = [
      styles.select,
      error && styles.error,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}
      >
        {label && (
          <label className={styles.label}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={selectClasses}
          aria-invalid={!!error}
          aria-describedby={
            error || helperText ? "select-description" : undefined
          }
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {(error || helperText) && (
          <p
            id="select-description"
            className={`${styles.helperText} ${error ? styles.error : ""}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
