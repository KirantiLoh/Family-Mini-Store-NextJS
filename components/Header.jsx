import React, { useState } from 'react'
import Logo from '../public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookie, faCoffee, faMugHot, faCandyCane, faCheese, faGifts, faIceCream, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const Header = (props) => {

    const [headerClass, setHeaderClass] = useState("navbar")
    const [productName, setProductName] = useState('')
    
    let router = useRouter()

    if (typeof window !== 'undefined') {
        window.onscroll = () => {
        if (window.scrollY >= 600) {
            setHeaderClass("navbar-sticky")
        } else {
            setHeaderClass("navbar")
        }
    }
    }
    

    let handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/products/search/${productName}`)
    }

    return (
        <header className={props.className? props.className : headerClass}>
            <div className="upper">
                <h1 className='logo'>
                <Link href='/'>
                    <a>
                        <Image src={Logo} alt='Family Mini Store' id='logo-img' width={75} height={75}/>
                        Family <span>Mini</span> <span>Mart</span>
                    </a>
                </Link>
                </h1>
                <form className='search-form' onSubmit={e => handleSubmit(e)}>
                    <input type="search" name="name" id="id_name" placeholder='Cari produk...' onChange={e=>setProductName(e.target.value)}/>
                </form>
            </div>
            <div className="lower">
                <ul className="navlinks">
                <li><Link href='/category/biscuit'><a><FontAwesomeIcon icon={faCookie} /> Biscuits</a></Link></li>
                <li><Link href='/category/coffee'><a><FontAwesomeIcon icon={faCoffee} /> Coffee</a></Link></li>
                <li><Link href='/category/tea'><a><FontAwesomeIcon icon={faMugHot} /> Tea</a></Link></li>
                <li><Link href='/category/sweets'><a><FontAwesomeIcon icon={faCandyCane} /> Sweets</a></Link></li>
                <li><Link href='/category/dairy'><a><FontAwesomeIcon icon={faCheese} /> Dairy</a></Link></li>
                <li><Link href='/category/snack'><a><FontAwesomeIcon icon={faIceCream} /> Snack</a></Link></li>
                <li><Link href='/category/new-year'><a><FontAwesomeIcon icon={faGifts} /> New Year</a></Link></li>
            </ul>
            </div>
            
        </header>
    )
}

export default Header
