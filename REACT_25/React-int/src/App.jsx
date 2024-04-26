import { useState } from 'react'
import RandomColor from './random-color'
import StarRating from './stars'
import LoadMoreData from './load-more-data'
import LoadData from './load-more-data/mike'


function App() {

  return (
    <div className='App'>

      {/* <RandomColor/> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <LoadMoreData/> */}
      <LoadData/>
    </div>
  )
}

export default App
