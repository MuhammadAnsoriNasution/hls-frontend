import React from 'react';
import Audio from '../Audio';
import CardMusik from '../components/molecul/card/CardMusik';
import MainLayout from '../components/layout/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <div className=' flex justify-between gap-5 mb-5'>
                <p className=' font-bold text-xl'>Fokus</p>
                <p className=' text-gray-400'>Tampilkan Semua</p>
            </div>
            <div className=' grid grid-cols-5 gap-5'>
                <CardMusik />
                <CardMusik />
                <CardMusik />
                <CardMusik />
                <CardMusik />
            </div>
            <div className=' flex justify-between gap-5 my-5'>
                <p className=' font-bold text-xl'>Playlist Spotify</p>
                <p className=' text-gray-400'>Tampilkan Semua</p>
            </div>
            <div className=' grid grid-cols-5 gap-5'>
                <CardMusik />
                <CardMusik />
                <CardMusik />
                <CardMusik />
                <CardMusik />
            </div>
        </MainLayout>
    );
}
