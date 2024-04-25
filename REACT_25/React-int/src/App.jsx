import { useState } from 'react'
import RandomColor from './random-color'
import StarRating from './stars'


function App() {

  return (
    <div className='App'>

      {/* <RandomColor/> */}

      <StarRating noOfStars={10}/>

    </div>
  )
}

export default App
