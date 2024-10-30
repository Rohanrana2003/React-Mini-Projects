/* eslint-disable react/no-unescaped-entities */

function Content() {
  return (
    <div className="page">

        <div className="left">
            <h6>YOUR FEET DESERVE THE BEST  </h6>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="buttons">
                <button id="shop">Shop Now</button>
                <button id="category">Category</button>
            </div>

            <div className="bottom">
                <p>Also avaliable on </p>

                <div className="icons">
                    <img src="src\images\flipkart.png" id="" />
                    <img src="src\images\amazon.png" id="" />
                </div>
            </div>


        </div>

        <div className="right">

            <img id="shoe" src="src\images\shoe.png" alt="" />
        </div>
    </div>
  )
}

export default Content
