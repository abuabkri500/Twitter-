import React from 'react'
import type { ChangeEvent } from 'react';
type InputProps = {
  name?: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  className?: string;
}
const Input = ({name, type, onChange, value, placeholder, className}: InputProps) => {
  return (
    <div>
      <input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder} className={className}/>
    </div>
  )
}

export default Input