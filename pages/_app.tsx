import { AppProps } from 'next/app'
import React from 'react'
import Layout from 'components/Layout'
import 'styles/global.css'
import 'antd/dist/reset.css'
const Template = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Template
