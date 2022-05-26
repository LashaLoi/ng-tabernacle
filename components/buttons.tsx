import React, { HTMLProps } from 'react'
import { motion } from 'framer-motion'

interface BaseButtonProps extends HTMLProps<HTMLButtonElement> {}

export const PrimaryButton: React.FC<BaseButtonProps> = ({
  disabled,
  children,
  onClick,
  className,
}) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className={`inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${
      disabled &&
      'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60'
    } ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </motion.button>
)

export const DefaultButton: React.FC<BaseButtonProps> = ({
  disabled,
  children,
  onClick,
  className,
}) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className={`inline-block px-6 py-2.5 bg-gray-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-200 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </motion.button>
)

export const OutlinedButton: React.FC<BaseButtonProps> = ({
  disabled,
  children,
  onClick,
  className,
}) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className={`inline-block px-6 py-2 border-2 border-blue-900 text-blue-900 font-medium text-xs leading-tight uppercase rounded hover:bg-blue-900 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </motion.button>
)

export const LinkButton: React.FC<BaseButtonProps> = ({
  disabled,
  children,
  onClick,
  className,
  style,
}) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className={`inline-block px-6 py-2.5 text-gray-700 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out ${className}`}
    disabled={disabled}
    onClick={onClick}
    style={style}
  >
    {children}
  </motion.button>
)
