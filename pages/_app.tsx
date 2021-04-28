import 'tailwindcss/tailwind.css'
import React from "react";
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Tres Ases</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

