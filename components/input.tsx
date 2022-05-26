import React, { HTMLProps } from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<InputProps> = (props) => (
  <input
    className="rounded form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none"
    {...props}
  />
)
