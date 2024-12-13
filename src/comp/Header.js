import {Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import React from 'react';

export default function Header(){
    const [toggleMenu,setToggleMenu]=useState(false);
    return <header className="flex justify-between px-7 py-3 bg-primary">
        <a className="font-bold font-about-font text-white text-4xl" href="#">Bharath A I</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
        <ul className="flex flex-col text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
    </header>
}