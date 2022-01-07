import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import Products from '../../../components/Products'

const SearchResultPage = () => {

    let router = useRouter()

    let { query } = router.query

    const [products, setProducts] = useState([])
    const [message, setMessage] = useState('')
    let getSearchResults = async () => {
        let response = await fetch(`https://family-mini-store-backend.herokuapp.com/api/products/search/${query}`, {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        let data = await response.json()
        if (response.status === 200) {
            setProducts(data)
        } else {
            setProducts([])
           setMessage(data.message)
        }
    }

    useEffect(() => {
        getSearchResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    return (
        <div className='search-result-container'>
            <Header className={'navbar-sticky'}/>
            {
                products.length >= 1 ? (
                    <div className="search-results">
                        <h1 className='title'>Pencarian : {query}</h1>
                        <Products products={products}/>
                    </div>
                )
                 : <h1>{message}</h1>
            }
            
        </div>
    )
}

export default SearchResultPage
