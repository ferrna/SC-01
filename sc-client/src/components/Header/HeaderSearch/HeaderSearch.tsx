import { FC, useEffect, useRef, useState } from 'react'
import './headerSearch.css'
import { TbArrowBack } from 'react-icons/tb'
import { FiSearch } from 'react-icons/fi'
import SuggestionsSection from './SuggestionsSection/SuggestionsSection'
import ResultsSection from './ResultsSection/ResultsSection'

/*  */
import { productsMock } from '../../mockData'

interface HeaderSearchProps {
  isSearchOpen: boolean
  toggleSearch: () => void
}

const HeaderSearch: FC<HeaderSearchProps> = ({isSearchOpen, toggleSearch}) => {
  
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [productsFetched, setProductsFetched] = useState([...productsMock]);

  useEffect(() => {
    if (document.activeElement === inputRef?.current) {
      if (inputValue === "") {
        setIsResultsVisible(false);
        setIsElementVisible(true);
      } else {
        isElementVisible && setIsElementVisible(false);
        !isResultsVisible && setIsResultsVisible(true)
      }
      if (inputValue.length < 3) return;
      const fetchProducts = async () => {
        /* const response = await fetch('localhost:5000/products');
        const data = await response.json(); 
        setProductsFetched(data); */
      }
      fetchProducts();
    }
  }, [inputValue])

  useEffect(() => 
    () => {
      const clearStates = () => {
        setIsElementVisible(false);
        setIsResultsVisible(false);
      }
      clearStates();
    }
  , []);

  const handleInputOnFocus = () => {
    setIsElementVisible(true);
    setIsResultsVisible(false);
  };

  /* const handleInputBlur = () => {
    setIsElementVisible(false);
  }; */

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  }

  const handleDeleteClick = () => {
    // Focus the input element when the button is clicked
    clearInput();
    !!inputRef && inputRef.current?.focus();
  };

  const closeSearchComponent = async () => {
    setIsElementVisible(false); //clearStates
    setTimeout(() => { toggleSearch() }, 200);
    clearInput()
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
                onFocus={handleInputOnFocus}
                placeholder=''
                onChange={(e)=> handleInputChange(e)}
                value={inputValue}
                ref={inputRef}
              />
              <div>
                <button className='_search_input_borrar' onClick={handleDeleteClick}>{"x "}<i>borrar</i></button>
                <button><FiSearch className='_search_input_fi-search' /></button>
              </div>
            </div>
          </div>
        </search>
        {<section className={`headerSearch__section ${isElementVisible || isResultsVisible ? ' open' : ''}`}>
          {isElementVisible ? <SuggestionsSection /> : isResultsVisible ? <ResultsSection products={productsFetched} /> : null}
        </section>}
        {/* <section className={`headerSearch__section ${isElementVisible || isResultsVisible ? ' open' : ''}`}>
          {productsFetched ? <ResultsSection products={productsFetched} /> : null}
        </section> */}
      </div>
    </div>
  )
}

export default HeaderSearch;