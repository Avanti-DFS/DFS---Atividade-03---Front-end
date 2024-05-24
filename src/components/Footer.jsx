import React from 'react'
import logo_branco from "../assets/logo_branco.svg"

const Footer = () => {
  return (
    <div className='w-full bg-[#f5ac3d] mt-auto'>
        <div className=' container max-w-[1240px] mx-auto py-6 px-4 grid lg:grid-cols-2 gap-8'>
            <div>
                <h1 className='w-full text-3xl font-bold'><img src={logo_branco} alt="Logo" className='h-10' /></h1>
                <p className='py-4 max-w-[300px] break-all '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
            </div>
            <div className='flex justify-end md:w-[75%] my-6'>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>contato@eventos.com</li>
                </ul>
            </div>
            <div className='flex justify-center md:col-span-2'>Eventos © 2020 - 2024. Alguns direitos reservados.</div>
        </div>
    </div>
  )
}

export default Footer