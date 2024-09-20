
/* eslint-disable react/prop-types */


const ItemList = ({ listData, setListData }) => {

    const handleDelete = (removeIndex) =>{
        setListData(  listData.filter((e, index)=>  index !== removeIndex));       
    }

    const handleList = (e) =>{
        if(e.target.tagName === 'SPAN'){
            return;
        }

        e.target.classList.toggle('checked')
            
    }


    return (
        <ul className="pt-5 max-h-[300px] overflow-auto">
            {
                listData && listData.map((item, i) => (

                    <li onClick={handleList}
                        key={i} 
                        className='flex items-center justify-between cursor-pointer'>

                        <div className='flex items-center justify-center'>
                            <img className='w-10 p-2'
                                src="images/unchecked.png" alt="" />

                            <p className="">{item}</p>
                        </div>

                        <span onClick={()=>handleDelete(i)} className='font-semibold text-[20px] mr-7'>x</span>

                    </li>
                ))
            }

        </ul>

    )
}

export default ItemList;