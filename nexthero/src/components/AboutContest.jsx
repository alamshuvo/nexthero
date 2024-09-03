"use client"
import Link from 'next/link';
import React from 'react';

const AboutContest = () => {
    return (
        <div className='flex '>
            <Link href={"/about/history"} >History</Link>
            <Link href={"/about/mission"}>Mission</Link>
        </div>
    );
};

export default AboutContest;