import { FC } from 'react'
import './dropDownInfo.css'
import { FaAngleDown } from 'react-icons/fa'

interface dropDownInfoProps {}

export const DropDownInfo: FC<dropDownInfoProps> = ({}) => {
  return (
    <div className="dropDownInfo_div">
      <h3>
        <span>dropDownInfo</span>
        <FaAngleDown style={{ color: '#5b5b5b' }} />
      </h3>
    </div>
  )
}
