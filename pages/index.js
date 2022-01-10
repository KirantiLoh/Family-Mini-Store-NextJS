import React, {useState,useEffect, useRef} from 'react'
import Products from '../components/Products'
import BackgroundImage from '../public/background.jpg'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const HomePage = (props) => {

    const [products, setProducts] = useState(props.products ? props.products : [])
    const [headerHeight, setHeaderHeight] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const formRef = useRef()

    let sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('FMS_82', 'template_mjnynj3', formRef.current, 'user_pFhkoQkAc1yrbgpIcz3GW')
        .then((result) => {
            console.log(result.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log(error.text)
        })
    }

    useEffect(() => {
        setHeaderHeight(document.querySelector('.navbar').clientHeight)
    }, [])

    return (
        <div id='home'>
            <Header/>
            <Image src={BackgroundImage} alt='Family Mini Store' className='background-img' layout='fill'/>
            <div className="hero" style={{'height':`calc(100vh - ${headerHeight}px)`}}>
                <div className="intro">
                    <h1 className='heading'>Shop your daily needs with us!</h1>
                    <Link href='/products' ><a className="primary-btn" id='shop-now-btn'><FontAwesomeIcon icon={faShoppingCart} /> Belanja Sekarang</a></Link>
                </div>
            </div>
            <div className="product-container">
                <h1 className='title'>Produk Terbaru</h1>
                <Products products={products} amount={9} />
            </div>
            <footer>
                <div className="inner-content">
                <form ref={formRef} onSubmit={e => sendEmail(e)} className='contact-form'>
                    <h1 className='title'>Hubungi Kami</h1>
                    <label>Name</label>
                    <input type="text" id='id_username' name="from_name" onChange={e => setName(e.target.value) } />
                    <label>Email</label>
                    <input type="email" id='id_email' name="email" onChange={e => setEmail(e.target.value)} />
                    <label>Message</label>
                    <textarea name="message" id='id_message' onChange={e => setMessage(e.target.value)} />
                    <button type="submit" id='send-message-btn' className='primary-btn' disabled={!name || !email || !message}>Send</button>
                </form>
                    <ul className="social-links">
                        <li>
                            <h3>Whatsapp</h3>
                            <p><FontAwesomeIcon icon={faWhatsapp}/> 0811 8188 860</p>
                            <p><FontAwesomeIcon icon={faWhatsapp}/> 0811 1187 882</p>
                            <p><FontAwesomeIcon icon={faWhatsapp}/> 0852 1604 8530</p>
                        </li>
                        <li>
                            <h3>Email</h3>
                            <p><FontAwesomeIcon icon={faEnvelope}/> f.ministore82@gmail.com</p>
                        </li>
                        <li>
                            <h3>Tokopedia</h3>
                            <p><FontAwesomeIcon icon={faShoppingCart} /> Family Mini Store</p>
                        </li>
                    </ul>
                </div>
            <small>&copy; Copyright 2022, Family Mini Store</small> 
            </footer>
        </div>
    )
}

export default HomePage

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