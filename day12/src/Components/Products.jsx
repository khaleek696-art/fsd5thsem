import React from 'react'

const Products = ({ products }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
            {
                products.map((product) =>
                    <div style={{
                        border: "2px solid #ccc",
                        textAlign: "center"
                    }}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <img src={product.thumbnail} />
                    </div>
                )
            })

        </div >
    )
}

export default Products