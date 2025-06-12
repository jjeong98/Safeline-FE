import React, { forwardRef } from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, helperText, fullWidth = false, className, ...props },
    ref
  ) => {
    const textareaClasses = [
      styles.textarea,
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
        <textarea
          ref={ref}
          className={textareaClasses}
          aria-invalid={!!error}
          aria-describedby={
            error || helperText ? "textarea-description" : undefined
          }
          {...props}
        />
        {(error || helperText) && (
          <p
            id="textarea-description"
            className={`${styles.helperText} ${error ? styles.error : ""}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
