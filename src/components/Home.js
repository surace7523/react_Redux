import React from 'react'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
            <img src="http://www.pngmart.com/files/7/Cart-PNG-Clipart.png"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-warpper">
            
             <div className="img-wrapper">
                <img src="https://dsmn8.com/wp-content/uploads/2018/06/iphone-hd-png-iphone-apple-png-file-550.png"/></div>
            </div>
            <div className="text-wrapper-item">
                <span>I-Phone</span>

                <span>Price: $1000</span>

            </div>
            <div className="button-wrapper-item">
             <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Home
 