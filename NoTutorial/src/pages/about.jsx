import useFetch from "../components/about-hook";

const About = () => {

  const {data, loading, error} = useFetch('https://dummyjson.com/products')

  console.log(data);
  

  return <div>
    {loading? 'wait': null}
    {error? <p>{error}</p>: null}
    {data? data.products.map((item, index)=>(<div key={index}><img src={item.thumbnail}/>{item.title}</div>)): null}

  </div>;
};

export default About;
