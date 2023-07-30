import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
export default function MainLayout({ children }: Props) {
    return (
        <div className='flex flex-row gap-1 min-h-screen'>
            {/* sidebar */}
            <div className=' w-[270px] min-h-screen shrink-0 bg-gray-900 px-5 py-8'>
                <ul className=' text-xl font-bold flex flex-col gap-3'>
                    <li>Home</li>
                    <li>Search</li>
                </ul>
            </div>
            {/* main */}
            <div className='max-h-screen flex-grow flex flex-col gap-1'>
                <nav className='bg-gray-900 h-[80px] flex justify-between items-center px-5'>
                    <button className=' w-5 h-[12px] relative'>
                        <span className=' w-5 h-[2px] bg-white absolute top-0'></span>
                        <span className=' w-5 h-[2px] bg-white absolute top-[5px]'></span>
                        <span className=' w-5 h-[2px] bg-white absolute  bottom-0'></span>
                    </button>
                    <ul className=' flex gap-5 items-center'>
                        <li>
                            <button>Daftar</button>
                        </li>
                        <li>
                            <button className=' bg-white text-gray-900 px-10 rounded-full py-3 transition-all  duration-500 hover:text-xl'>Masuk</button>
                        </li>
                    </ul>
                </nav>
                <main className='bg-gray-900 flex-grow p-3 overflow-scroll'>
                    {children}
                </main>
            </div>
        </div>
    )
}
