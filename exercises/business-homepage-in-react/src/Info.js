import React from 'react'
import ProductsServices from './ProductsServices'

function Info(){
    return (
        <div id="everything">
        <div id="titleDiv">
            <h1 id="title">A Slice of Ice</h1>
            </div>
            <div id="info">
            <div id="infoParagraph">
            <p>Ice is so cold. That's why we love it. And that's why we've made it our mission to bring it to people in as many forms as possible!</p>
            </div>
                <ProductsServices />
        </div>
        </div>
    )
}
export default Info