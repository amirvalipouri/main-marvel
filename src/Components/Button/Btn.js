import React from 'react'
import { Button } from "react-bootstrap";

function Btn({
  type = "button",
  variant = "primary",
  outline = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  disabled = false,
  className = "",
  size = "md",
  children = null


}) {
    const varientBtn = () => {
        if (outline) {
          return `outline-${variant}`;
        }
        return variant;
      };

    return (
        <Button size={size}
        variant={varientBtn}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        className={`Btn ${className}`}
        type={type}>
            {children}
        </Button>
    )
}

export default Btn
