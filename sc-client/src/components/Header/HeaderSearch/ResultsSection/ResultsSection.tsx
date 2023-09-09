import { FC, useState } from 'react'
import { Product } from '../../../../common/types'
import './resultsSection.css'
import ItemResult from './ItemResult/ItemResult'

interface ResultsSectionProps {
  products: Product[]
}

const ResultsSection: FC<ResultsSectionProps> = ({ products }) => {
  
  const [scrollTop, setScrollTop] = useState(0);
  const [hideBar, setHideBar] = useState<boolean>(false);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    if (event.currentTarget.scrollTop < scrollTop) {
      //@ts-ignore
      setHideBar(false)
    } else {
      //@ts-ignore
      setHideBar(true)
    }
    setScrollTop(event.currentTarget.scrollTop);
  };
  
  return (
    <div className='_results-section'>
      <div className={`_results-section__filters ${hideBar ? ' hide' : ''}`}>
        <div>Filtros</div>
        <div><input type="range" /></div>
      </div>
      <div className="_results-section-container" onScroll={handleScroll}>
        <div className="_results-section__filters-gridspace"></div>
        <div className="_results-section__results">
          {products && products.map((product) => <ItemResult product={product}/>)}
        </div>
      </div>
    </div>
  )
}

export default ResultsSection;