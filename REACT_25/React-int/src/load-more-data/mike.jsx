import { useEffect, useState } from "react";
import './styles.css'


function LoadData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    async function bringProducts() {
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
                count === 0 ? 0 : count * 20
            }`);

            const result = await response.json()


            if (result && result.products && result.products.length){
                setProducts((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }
            console.log(result)

        } catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        bringProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true) 
    }, [products])


    if(loading) {
        return <div>Loading the data</div>
    }


    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length ? products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p>{item.title}</p>
                    </div>
                )
                    
            ) : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={()=>setCount(count + 1)}>
                    load more prod
                </button>
                {disableButton ? <p>you reached 100</p> : null}
            </div>
        </div>
    )

}


export default LoadData;