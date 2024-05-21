
import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/MainNav'
import Homeproduct from './components/home_product'
import Footer from './components/footer/footer'
function App() {

  const[cart, setCart] = useState([])
  const[shop, setShop] = useState(Homeproduct)
  const[search, setSearch] = useState('')




  const searchLength = (search || []).length === 0
  const searchproduct = () => {
    if(searchLength){
      alert('search something')
      setShop(Homeproduct)
    }else{
      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchFilter)
    }
  }

  // const addToCart = ()


  return (
    <>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    
      <Footer/>
    </>
  )

}

export default App
