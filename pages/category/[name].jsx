import React, { useState, useEffect} from 'react'
import Header from '../../components/Header';
import Products from '../../components/Products'
import { useRouter } from 'next/router'

const FilteredProductsPage = (props) => {

    const router = useRouter()

    const { name } = router.query

    const [products, setProducts] = useState(props.products ? props.products : [])
    const [message, setMessage] = useState(props.message ? props.message : '')

    let getProducts = async () => {
        let response = await fetch(`https://family-mini-store-backend.herokuapp.com/api/products/${name}`, {
            'method':'GET',
            'headers':{
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setProducts(data)
        } else {
            setMessage(data.message)
        }
    }

    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    return (
        <div className="filtered-product-container">
            <Header className={'navbar-sticky'}/>
            {(products.length >= 1) ?
            (<div className="filtered-products">
                <h1 className='title'>Kategori : {name.replace('-', ' ')}</h1>
                <Products products={products} />
            </div>) 
            : <h1>{message}</h1>}
        </div>
        
        
    
    )
}

export default FilteredProductsPage



export async function getServerSideProps({params}) {
    console.log(params.name)
    let response = await fetch(`https://family-mini-store-backend.herokuapp.com/api/products/${params.name}`, {
            'method':'GET',
            'headers':{
                'Content-Type': 'application/json'
            }
        })
    let data = await response.json()
    if (response.status === 200) {
        return {
            props: {
                products: data
            }
        }
    } else {
        return {
            props: {
                message: data.message
            }
        }
    }
}