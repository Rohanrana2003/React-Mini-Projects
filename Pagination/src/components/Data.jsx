/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Data = ({quantity}) => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);


    const getData = async () => {

        let response = await fetch(`https://dummyjson.com/products?limit=${quantity}`);
        let data = await response.json();

        if (data && data.products) {
            setProducts(data.products);
        }
    }

    useEffect(() => {

        getData();

    }, [])

    const handlePrev = () =>{

        if(page === 1){
            return;
        }
        setPage(page - 1);

    }

    const handleNext = () =>{

        if(page === products.length/10){
            return;
        }
        setPage(page + 1);

    }




    return (
        <div className="top">

        {
            products.length > 0 && <div className="products">

                {products.slice((page*10)-10, page * 10).map((product)=>(

                    <span className="products__single" key={product.id} >
                        <img src={product.thumbnail} alt={product.title} />
                        {product.title}
                    </span>

                ))}

            </div>
        }

        {
            products.length>0 && <div className="pagination">
                <span onClick={handlePrev}>◀</span>
          
                    {[...Array(products.length/10)].map((_, i)=>(
                        <span 
                            className={page === i+1 ? "pagination__selected" : ""}
                            onClick={()=>setPage(i+1)} 
                            key={i}
                            >
                            {i+1}
                        </span>
                    ))}

                <span onClick={handleNext}>▶</span>

            </div>
        }
        </div>
    )
}

export default Data