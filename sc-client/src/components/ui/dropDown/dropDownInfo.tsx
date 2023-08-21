import { FC, useState } from 'react'
import './dropDownInfo.css'
import { FaAngleDown } from 'react-icons/fa'

interface dropDownInfoProps {
  title?: string
  items?: string[]
}

export const DropDownInfo: FC<dropDownInfoProps> = ({
  title = 'INFORMACIÓN',
  items = [
    ['Envios', 'http://asdasd'],
    ['Envios', 'http://asdasd'],
    ['Envios', 'http://asdasd'],
    ['Envios', 'http://asdasd'],
  ],
}) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggleClick = () => {
    setIsToggled((prevState) => !prevState)
  }

  return (
    <div className="dropDownInfo">
      <button className="dropDownInfo__title" onClick={handleToggleClick}>
        <h3 aria-expanded="true">{title}</h3>
        <FaAngleDown style={{ color: '#5b5b5b' }} />
      </button>
      <div className={`dropDownInfo__content ${isToggled ? 'toggled' : ''}`}>
        {items && items.map((i) => <a>{i[0]}</a>)}
      </div>
    </div>
  )
}
