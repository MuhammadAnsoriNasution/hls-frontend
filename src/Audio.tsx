import React, { useRef } from 'react'
import ReactHlsPlayer from 'react-hls-player'

export default function Audio() {
    const playerRef = useRef<HTMLVideoElement>(null);
    const playerRef2 = useRef<HTMLVideoElement>(null);

    return (
        <>
            <div className=''>
                <ReactHlsPlayer
                    playerRef={playerRef2}
                    src={`${process.env.REACT_APP_BASE_URL}/play/vagetos_kehadiranmu.m3u8`}
                    autoPlay={false}
                    controls={true}
                    className=' h-96'
                />
                <ReactHlsPlayer
                    playerRef={playerRef}
                    src={`${process.env.REACT_APP_BASE_URL}/play/Diary_Depresiku.m3u8`}
                    autoPlay={false}
                    controls={true}
                    className=' w-80'
                />
            </div>
        </>
    )
}
