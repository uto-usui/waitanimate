import * as React from 'react'

interface IButtonProps {
  text: string
}

const Button: React.SFC<IButtonProps> = ({ text }) => {
  return <button>{text}</button>
}

export default Button
