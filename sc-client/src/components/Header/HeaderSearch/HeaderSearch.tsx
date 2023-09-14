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

type HistoryState = {
  history: any[]; // Replace 'any[]' with the actual type of your history data
};

const HeaderSearch: FC<HeaderSearchProps> = ({isSearchOpen, toggleSearch}) => {
  
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [productsFetched, setProductsFetched] = useState([...productsMock]);

  const [localHistory, setLocalHistory] = useState<HistoryState>({ history: [{text: "asdijasd"}]})
  useEffect(()=>{
    recover();
  },[])
  const recover = (): void => {
    let data = localStorage.getItem('history') || null;
    if (data === null) {
      localStorage.setItem('history', JSON.stringify({ history: [] }));
      return;
    }
    try {
      const parsedData = JSON.parse(data);
      setLocalHistory({ history: [...parsedData?.history] });
    } catch (e) {
      console.log(e);
    }
  }
  const saveToStorage = (): void => {
        let data: HistoryState = {...localHistory}
        
        data.history?.push({text: inputValue});
        setLocalHistory({ history: data.history });
        localStorage.setItem('history', JSON.stringify(data));
  }
  const handleSuggestionClick = (value: string) => {
    inputRef.current?.focus();
    setInputValue(value)
  }

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
        console.log('fetching products...')
      }
      const timer = setTimeout(() => {
        
        if(inputRef != null && inputRef.current?.value === inputValue) {
          fetchProducts();
          saveToStorage();
        }
      }, 500)
    
      // Every time the useEffect runs it creates a new setTimeout function
      // Returning this cleanup function will run before each new render and remove the old timer
      return () => {
        clearTimeout(timer)
      }
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

  const clearLocalHistory = () => {
    localStorage.removeItem('history');
    setLocalHistory({ history: [] });
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
          {isElementVisible ? <SuggestionsSection props={{localHistory, handleSuggestionClick, clearLocalHistory}} /> : isResultsVisible ? <ResultsSection products={productsFetched} /> : null}
        </section>}
        {/* <section className={`headerSearch__section ${isElementVisible || isResultsVisible ? ' open' : ''}`}>
          {productsFetched ? <ResultsSection products={productsFetched} /> : null}
        </section> */}
      </div>
    </div>
  )
}

export default HeaderSearch as FC<HeaderSearchProps>;


/* TO DO:
 - no guardar busquedas similares
 - no guardar busquedas hasta que el input termine de completarse indistintamente
 a la frecuencia de la peticion
 - agregar animacion a la aparicion de items de sugerencias
 */