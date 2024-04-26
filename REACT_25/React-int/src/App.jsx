import { useState } from 'react'
import RandomColor from './random-color'
import StarRating from './stars'
import LoadMoreData from './load-more-data'
import LoadData from './load-more-data/mike'
import TreeView from './tree-veiw'
import menus from './tree-veiw/data'
import BushView from './mike-tree-view'
import QRCodeGenerator from './qr-code'

function App() {

  return (
    <div className='App'>

      {/* <RandomColor/> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <LoadMoreData/> */}
      {/* <LoadData/> */}

      {/* <TreeView menus={menus} /> */}

      {/* <BushView menu={menus} /> */}

      <QRCodeGenerator size='400' />

    </div>
  )
}

export default App
