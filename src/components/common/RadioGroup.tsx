import React, { forwardRef } from "react";
import styles from "./RadioGroup.module.scss";

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  label?: string;
  error?: string;
  helperText?: string;
  options: RadioOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  fullWidth?: boolean;
  direction?: "row" | "column";
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      label,
      error,
      helperText,
      options,
      value,
      onChange,
      fullWidth = false,
      direction = "row",
      disabled = false,
      required = false,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[styles.container, fullWidth && styles.fullWidth, className]
          .filter(Boolean)
          .join(" ")}
      >
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div
          className={[
            styles.radioGroup,
            styles[direction],
            error && styles.error,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {options.map((option) => (
            <label
              key={option.value}
              className={[
                styles.radioLabel,
                option.disabled || disabled ? styles.disabled : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                disabled={option.disabled || disabled}
                required={required}
                className={styles.radio}
              />
              <span className={styles.customRadio} />
              <span className={styles.radioText}>{option.label}</span>
            </label>
          ))}
        </div>
        {(error || helperText) && (
          <p className={`${styles.helperText} ${error ? styles.error : ""}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
