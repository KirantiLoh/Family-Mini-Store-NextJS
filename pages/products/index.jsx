import React, { useState, useEffect} from 'react'
import Header from '../../components/Header'
import Products from '../../components/Products'

const AllProductsPage = (props) => {

    const [products, setProducts] = useState(props.products ? props.products : [])


    return (
        <div className="all-products-container">
            <Header className={'navbar-sticky'}/>
            <h1 className="title">Semua Produk</h1>
            <Products products={products}/>
        </div>
        
    )
}

export default AllProductsPage

export async function getStaticProps() {
    let response = await fetch(`https://family-mini-store-backend.herokuapp.com/api/products`, {
            'method':'GET',
            'headers':{
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        return {
            props: {
                products: data
            },
        }
}
