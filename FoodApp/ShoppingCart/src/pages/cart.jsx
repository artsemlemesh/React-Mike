import { useSelector } from "react-redux"


export default function Cart(){

    const {cart} = useSelector(state=>state)

    console.log(cart)

    return <div>Cart</div>
}