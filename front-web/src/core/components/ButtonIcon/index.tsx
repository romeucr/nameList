import React from 'react'

type Props = {
   text: string
}

const ButtonIcon = ({ text }: Props) => (
   <button className="btn btn-primary">
      <h5>{text}</h5>
   </button>
)

export default ButtonIcon