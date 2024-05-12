import { useParams } from "react-router-dom";

const Detail = () => {


    const {id} = useParams()
    

  return <div>
    <h1>detail</h1>
    <h2>hello</h2> <h1 style={{color:'red'}}>{id}</h1>
    </div>;
};

export default Detail;
