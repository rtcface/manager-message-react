import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Sidebar = () => {
  // routing de next
  const router = useRouter();

  console.log(router.pathname)


  return (
    <aside className='bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
        <div>
            <p className='text-white text-2xl font-black'> Gestor de mensajes </p>
        </div>
        <nav className='mt-5 list-none'>
          <li className={ router.pathname === "/sendEmail" ? "bg-blue-800 p-2" : "p-2"  }>
            <Link href="/sendEmail" className='text-white block'>
             
              Enviar Correo
            
            </Link>
          </li>
          <li className={ router.pathname === "/sendWhatsApp" ? "bg-blue-800 p-2" : "p-2"  }>
            <Link href="/sendWhatsApp" className='text-white block'>
             
                Enviar WhatsApp
              
            </Link>
          </li>
          <li className={ router.pathname === "/sendSms" ? "bg-blue-800 p-2" : "p-2"  }>
            <Link href="/sendSms" className='text-white block'>
              Enviar Sms
            </Link>
          </li>
        </nav>
    </aside>
  )
}

export default Sidebar