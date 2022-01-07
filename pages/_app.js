import '../styles/App.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Family Mini Store | Shop your daily needs with us!</title>
            <meta name="title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta name="description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta property="og:description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Family Mini Store | Shop your daily needs with us!"/>
            <meta property="twitter:description" content="We are Family Mini Store. Shop your daily needs with us! We sell biscuits,  instant coffees, teas, sweets, dairy products, snacks, and new year products! The quality of our products are remarkable!"/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        </Head>
        <Component {...pageProps }/>
        </>
        )
}

export default MyApp