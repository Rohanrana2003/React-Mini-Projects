import { useEffect, useState } from "react"

let data = ['https://plus.unsplash.com/premium_photo-1724800663657-3e57bf4f622c?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1725406029195-f0afc31b2f10?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1725610588149-adc351ad606d?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const ImageSlider = () => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(index == data.length - 1 ? 0 : index + 1)
    }

    const handlePrev = () => {
        setIndex(!index ? data.length - 1 : index - 1);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            handleNext();
        }, 1000);

        return ()=>{
            clearTimeout(timer);
        }
        
    }, [index])
    
    return (
        < >

            <div className="flex justify-center gap-10 items-center">

                <button onClick={handlePrev} className=" font-bold py-2 px-6 rounded-lg text-white bg-slate-700">Prev</button>

                {data.map((url, i)=>(
                    <>
                        <img src={url} className={"w-[290px] h-[250px] object-contain " + (index === i ? "block":'hidden')} />
                    </>

                ))}

                <button onClick={handleNext} className="font-bold py-2 px-6 rounded-lg text-white bg-slate-700">Next</button>

            </div>

        </>

    )



}

export default ImageSlider;