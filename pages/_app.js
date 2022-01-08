import '../styles/App.css'
import Head from 'next/head'
import Logo from '../public/logo.png'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Family Mini Store | Shop your daily needs with us!</title>
            <meta name="title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta name="description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://family-mini-store.netlify.app/"/>
            <meta property="og:title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta property="og:description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>
            <meta property="og:image" content={Logo}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://family-mini-store.netlify.app/"/>
            <meta property="twitter:title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta property="twitter:description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>
            <meta property="twitter:image" content={Logo}/>
        </Head>
        <Component {...pageProps }/>
        </>
        )
}

export default MyApp