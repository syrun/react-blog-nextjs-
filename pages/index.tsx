import { NextPage } from 'next'
import Head from 'next/head'
import React, { memo } from 'react'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      index
    </div>
  )
}

export default memo(Index)
