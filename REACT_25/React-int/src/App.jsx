import { useState } from 'react'
import RandomColor from './random-color'
import StarRating from './stars'
import LoadMoreData from './load-more-data'
import LoadData from './load-more-data/mike'
import TreeView from './tree-veiw'
import menus from './tree-veiw/data'
import BushView from './mike-tree-view'
import QRCodeGenerator from './qr-code'
import LightDarkMode from './light-dark-mode'
import ScrollIndicator from './scroll-indicator'
import TabTest from './tabs/tab-test'
import TabsMike from './mike-tabs/tab-test'
import ModalTest from './custom-modal-popup/modal-test'
import GitProfileFinder from './github-profile-finder'
import GitHub from './mike-github-practice/myindex'
import SearchAutoComplete from './search-autocomplete'

function App() {

  return (
    <div className='App'>

      {/* <RandomColor/> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <LoadMoreData/> */}
      {/* <LoadData/> */}

      {/* <TreeView menus={menus} /> */}

      {/* <BushView menu={menus} /> */}

      {/* <QRCodeGenerator size='400' /> */}

      {/* <LightDarkMode/> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* <TabTest/> */}

      {/* <TabsMike/> */}

      {/* <ModalTest/> */}

    {/* <GitProfileFinder/> */}

    {/* <GitHub/> */}

    <SearchAutoComplete/>


    </div>
  )
}

export default App
