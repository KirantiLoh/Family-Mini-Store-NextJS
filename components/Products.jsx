import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

const Products = (props) => {
    let products = props.products
    if (props.amount) {
        if (props.paginate) {
            products = products.slice(0, props.amount)
        } else {
            products = products.slice(0, props.amount)
        }
        
    }

    return (
        <ul className="products">
            {products.map((product) => {
                return (
                    <li className="product" key={product.id}>
                        <div className="product-detail">
                            <Image src={product.image} alt={product.name} layout='responsive' width={500} height={500} className='product-image' priority/>
                            <h1 className="product-name">{product.name}</h1>
                            <p className='netto'>Netto : {product.netto} g</p>
                            <p className="category">Category : <Link href={`category/${product.category.replace(' ', '-')}`} ><a className="category">{product.category}</a></Link></p>
                        </div>
                        
                        <a href={product.link} target='_blank' rel='noreferrer' className="primary-btn"><FontAwesomeIcon icon={faShoppingCart} /> Tampilkan Produk</a>
                    </li>
                )})}
                {(props.amount && !props.paginate && products.length >= 1) ? 
                    <Link href='/products' ><a className="product" id='show-more'><FontAwesomeIcon icon={faArrowCircleRight} /> <span>Lihat Semua Produk</span> </a></Link>
                    : null}
        </ul>
        
    )
}

export default Products
