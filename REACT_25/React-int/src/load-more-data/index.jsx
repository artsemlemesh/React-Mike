import { useEffect, useState } from "react";
import './styles.css'


export default function LoadMoreData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);


    async function fetchProducts(){ //provides more synchronous -like way of writing code

        try {
            setLoading(true);//indication of the beginning of execution of function(spinning wheel)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
                count === 0 ? 0 : count * 20}`) // dynamic objects on page 
        

        const result = await response.json()// await pauses the execution of fetchProducts untill the promise resolved
        //result contains the parsed json data

        if(result && result.products && result.products.length){ // if result obj exists and has products property and products has elements
            setProducts((prevData) => [...prevData, ...result.products]) //concatenating the prevData, by using ... spread operator creates a new array containing previous(prevData) and new(results.products)
            setLoading(false) //spinning wheel is over
        }

        console.log(result)
    } catch(e) {
        console.log(e);// prints an error to the console
        setLoading(false); // ends the loading process even if incomplete
    }
    }
    
    //is triggered whenever the count variable changes.
    //it calls fetchProducts() function, to fetch more products based on the updated count
    useEffect(() => {
        fetchProducts();
    }, [count])

    //if products array exists and its length is 100, disables the button(load more)
    useEffect(() => {
        if(products && products.length === 100) setDisableButton(true);
    }, [products])
    //useEffect runs first after the first render and then after [products] changes
    


    //if loading is true it shows the message
    if(loading) { 
        return <div>Loaing data. Please wait</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length ? products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>
                    </div>
                )) : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={()=> setCount(count+1)}>
                    load more products
                </button>
                {disableButton ? <p>you have reached 100 products</p> : null}
            </div>
        </div>
    )

}