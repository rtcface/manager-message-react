import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'

export const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Gestor de mensajes
        </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    <div className='bg-gray-200 min-h-screen'>
        <div className='flex min-h-screen'>
            <Sidebar/>
            <main className='sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
                {children}   
            </main>
        </div>
       
    </div>
    
    </>
  )
}
