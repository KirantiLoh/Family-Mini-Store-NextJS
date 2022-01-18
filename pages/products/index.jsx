import React from 'react'
import Header from '../../components/Header'
import Products from '../../components/Products'
import { useRouter } from 'next/router'

const AllProductsPage = (props) => {

    const products = props.products ? props.products : []


    return (
        <div className="all-products-container">
            <Header className={'navbar-sticky'}/>
            <h1 className="title">Semua Produk</h1>
            <Products products={products} amount={5} paginate={true}/>
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
                products: data,
                revalidate: 60*60
            },
        }
}
