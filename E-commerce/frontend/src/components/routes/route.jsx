import { Routes, Route } from "react-router-dom"
import MyHome from "../homePage/MyHome"
import Shop from "../shop/shop"
import Cart from "../cart/cart"
import Contact from "../contact/contact"
import About from "../about/about"
import PaymentForm from "../cart/payment"




const MyRoute = () => {


    return (
        
        <Routes>
            <Route path='/checkout' element={<PaymentForm />}/>
            <Route path='/' element={<MyHome />}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>

        </Routes>
        
    )
}

export default MyRoute