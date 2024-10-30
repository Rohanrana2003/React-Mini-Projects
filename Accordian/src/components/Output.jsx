/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

const Output = () => {
    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false)

    const fetchData = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let result = await response.json();
            let ans = result.slice(0, 3);
            console.log(ans);
            setData(ans);
        }
        catch (error) {
            console.log(error);
        }
    }
    // fetchData();
    useEffect(() => {
        fetchData();
        console.log(data);

    }, []);

    const handleClick = (i) =>{
        setVisible(!visible)
    }

    return (
        <>
            <div className="box">
                {data.map((element, i) => (
                    <>
                        <div key={i} className="container">

                            <h1 className="heading" onClick={()=>{handleClick(i)}} >{element.title}</h1>
                            {visible && <p className="para" >{element.body}</p>}
                        </div>

                    </>
                ))}
            </div>
        </>
    )
}

export default Output
