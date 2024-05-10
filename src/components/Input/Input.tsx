import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
  return(
      <input 
        className="border-0 h-9 rounded-md outline-none px-4 mb-3 font-semibold"
        {...props}
      />
  )
}