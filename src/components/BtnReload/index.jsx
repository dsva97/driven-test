import React from 'react'

import { AiOutlineReload } from "react-icons/ai"
import BtnCircle from '../BtnCircle';

const BtnReload = ({ load }) => {
  return (
    <BtnCircle onClick={load} filled={false}>
      <AiOutlineReload/>
    </BtnCircle>
  )
}

export default BtnReload
