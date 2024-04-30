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
import TicTacToe from './tic-tac-toe/index'
import FeatureFlagGlobalState from './feature-flag/context'
import FeatureFlags from './feature-flag'
import MyFeatureFlags from './mike-feature-flag'
import MyFeatureFlagGlobalState from './mike-feature-flag/context'
import UseFetchHookTest from './use-fetch/test'
import UseOnclickOutsideTest from './use-outside-click/test'
import UseWindowResizeTest from './use-window-resize/test'
import ScrollTotopAndBottom from './scroll-to-top-bottom'


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

    {/* <SearchAutoComplete/> */}

    {/* <TicTacToe/> */}

    {/* <FeatureFlagGlobalState>
      <FeatureFlags/>
    </FeatureFlagGlobalState> */}

    {/* <MyFeatureFlagGlobalState>
      <MyFeatureFlags/>
    </MyFeatureFlagGlobalState> */}

    {/* <UseFetchHookTest/> */}

    {/* <UseOnclickOutsideTest/> */}


    {/* <UseWindowResizeTest/> */}

    <ScrollTotopAndBottom/>

    </div>
  )
}

export default App
