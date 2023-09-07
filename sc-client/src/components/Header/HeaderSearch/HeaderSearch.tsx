import { FC, useState } from 'react'
import './headerSearch.css'
import { TbArrowBack } from 'react-icons/tb'
import { FiSearch } from 'react-icons/fi'
import ResultsSection from './ResultsSection/ResultsSection'

interface HeaderSearchProps {
  isSearchOpen: boolean
  toggleSearch: () => void
}

const HeaderSearch: FC<HeaderSearchProps> = ({isSearchOpen, toggleSearch}) => {
  
  const [isElementVisible, setIsElementVisible] = useState(false);

  const handleInputFocus = () => {
    setIsElementVisible(true);
  };

  const handleInputBlur = () => {
    setIsElementVisible(false);
  };

  const closeSearchComponent = async () => {
    setIsElementVisible(false);
    setTimeout(()=>{toggleSearch()},200)
  }

  return (
    <div className='headerSearch'>
      <div className={`headerSearch-container ${isSearchOpen ? ' open' : ''}`}>
        <search className="headerSearch__search">
          <div className='_search_goback'>
            <button onClick={closeSearchComponent}>
              <TbArrowBack style={{ color: '#343434', padding: "0 10px 5px 0" }} size={34} />
            </button>
          </div>
          <div className='_search_'>
            <div className='_search_input'>
              <input
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder=''
              />
              <div>
                <button className='_search_input_borrar'>{"x "}<i>borrar</i></button>
                <button><FiSearch className='_search_input_fi-search' /></button>
              </div>
            </div>
          </div>
        </search>
        <section className={`headerSearch__section ${isElementVisible ? ' open' : ''}`}>
          <ResultsSection />
        </section>
      </div>
    </div>
  )
}

export default HeaderSearch;