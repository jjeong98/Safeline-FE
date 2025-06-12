import React, { forwardRef } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, error, helperText, fullWidth = false, className, ...props },
    ref
  ) => {
    return (
      <div
        className={`${styles.container} ${fullWidth ? styles.fullWidth : ""} ${
          className || ""
        }`.trim()}
      >
        <label className={styles.checkboxLabel}>
          <input
            ref={ref}
            type="checkbox"
            className={styles.checkbox}
            aria-invalid={!!error}
            aria-describedby={
              error || helperText ? "checkbox-description" : undefined
            }
            {...props}
          />
          <span className={styles.customCheckbox} />
          {label && <span className={styles.checkboxText}>{label}</span>}
        </label>
        {(error || helperText) && (
          <p
            id="checkbox-description"
            className={`${styles.helperText} ${error ? styles.error : ""}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
