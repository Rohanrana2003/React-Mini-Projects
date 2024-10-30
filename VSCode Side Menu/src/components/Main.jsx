/* eslint-disable react/prop-types */

import { useState } from "react"


const Main = ({ explorer }) => {
    const [view, setView] = useState(false)
    const [showInput, setShowInput] = useState({
        visible:false,
        isFolder: null
    });

    const handleNewEntity = (e, isFolder) =>{
        e.stopPropagation();
        setView(true);
        setShowInput({
            visible:true,
            isFolder: isFolder
        })
    }

    const addEntity = (e) =>{
        if(e.keyCode === 13 && e.target.value){
            console.log(e.target.value);
            setShowInput({...showInput, visible:false});
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: ['5px'], paddingLeft:['30px'] }}>

                <div className="folder"  onClick={()=>(setView(!view))}>
                    
                    <span>📁 {explorer.name}</span>

                    <div className="btns">
                        <button onClick={(e)=>handleNewEntity(e, true)}>New Folder</button>
                        <button onClick={(e)=>handleNewEntity(e, false)}>New File</button>
                    </div>

                </div>

                <div style={{ display: view ? 'block':'none', paddingLeft:['0px']}} >

                    {showInput.visible && (
                        <div className="inputField">
                            <span>{showInput.isFolder ? '📁' : '📄'}</span>
                            <input 
                                onBlur={()=>(setShowInput({...showInput, visible:false}))}
                                onKeyDown={addEntity}
                                autoFocus
                                className="inputField--input" 
                                type="text" />

                        </div>
                    )}

                    {explorer.items.map((exp) => (
                        <Main explorer={exp} key={exp.id}/>
                    ))}

                </div>

            </div>
            )
        }
    else{
        return <span className="file" style={{paddingLeft:['30px'], marginTop: ['5px']}}>📄 {explorer.name}</span>    
    }
}

export default Main