/* eslint-disable react/prop-types */

export default function First({toggle}) {

  return (
    <div className="main">

        <div className="left">
            <img src="public/image.png" alt="" />
        </div>
        <div className="right">
            <h1>Dice Game</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
      
    </div>
  )
}
