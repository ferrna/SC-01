import React, { FC } from 'react'
import { Product } from '../../../../common/types'

interface ResultsSectionProps {
  products: Product[]
}

const ResultsSection: FC<ResultsSectionProps> = ({products}) => {
  return (
    <div className='_results-section'>
     ResultsSection
    </div>
  )
}

export default ResultsSection;