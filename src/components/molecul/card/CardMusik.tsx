import React from 'react'
import { musicImage } from '../../../assets/images'
import { icPlay } from '../../../assets/svg'

export default function CardMusik() {
    return (
        <div className=' p-4 bg-slate-800 rounded-md flex flex-col gap-5 cursor-pointer card-musik hover:bg-slate-950'>
            <div className=' relative container'>
                <img src={musicImage} alt="" className=' rounded-md' />
                <button className=' hover:w-[60px] hover:h-[60px] absolute bottom-[-20px] w-14 h-14 bg-green-500 right-1 opacity-0 rounded-full btn-play transition-all duration-500 flex justify-center items-center'>
                    <img src={icPlay} className=' w-5 h-5' alt="" />
                </button>
            </div>
            <div className=' flex flex-col gap-2'>
                <p>Instrumental Study</p>
                <p className=' text-gray-400 text-sm'>Focus with soft study music in the background.</p>
            </div>
        </div>
    )
}
