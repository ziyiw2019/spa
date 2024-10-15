import React, {useState, useEffect} from 'react';

import LogoWhite from '../assets/img/logo-white.png';
import LogoDark from '../assets/img/logo-dark.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'



const NewHeader = () => {
  const [header, setHeader] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return (
  <header
  className={`${
    header ? 'bg-white py-3 shadow-lg  fixed': 'bg-transparent py-5'}  z-50 w-full transition-all duration-500`}
  >
    <div className='container mx-auto flex flex-row items-center justify-between  gap-y-1 lg:flex-row lg:justify-between lg:gap-y-0'>
    <a href='/'>
    {header ? (<img src={LogoDark} className='w-full h-6 md:h-10' alt="" />
    ): (<img src={LogoWhite} className='w-full h-6 md:h-10' alt=""/>)}
    </a>
    <nav className={`${
      header ? 'text-primary' : 'text-primary'}  flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
      <a href='/' className='hover:text-accent transition'>
        Home
      </a>



     {/* <a href='/' className='hover:text-accent transition'>
        Spa
      </a>
      */}
      <a href='/aboutus' className='hover:text-accent transition'>
        About Us
      </a>
       <Menu>
        <MenuButton className="inline-flex items-center gap-2   py-1.5 px-3 text-sm/6  hover:text-accent transition    focus:outline-none  data-[focus]:outline-white  font-tertiary tracking-[3px] text-[15px] items-center uppercase">
          Contact

        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className={`  w-52 origin-top-right rounded-xl text-sm/6   transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 ${ header ? " bg-slate-50 mt-6 md:mt-9  border border-neutral/2 bg-neutral p-1  text-yellow-600 opacity-85" : " bg-slate-50 mt-2 md:mt-5  border border-neutral/2 bg-neutral p-1  text-yellow-600 opacity-85ss" }`}
        >
          <MenuItem>
            <button className="group opacity-100 flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-neutral/10">

            <a href='/rent'>  I want to rent </a>
              <kbd className="ml-auto hidden font-sans text-xs text-yellow-600 group-data-[focus]:inline">⌘R</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-neutral/10">

            <a href='/work'>  Looking for work </a>
              <kbd className="ml-auto hidden font-sans text-xs text-yellow-600 group-data-[focus]:inline">⌘W</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">

            <a href='/hire'>  I want to hire </a>
              <kbd className="ml-auto hidden font-sans text-xs text-yellow-600 group-data-[focus]:inline">⌘H</kbd>
            </button>
          </MenuItem>

        </MenuItems>
      </Menu>
    </nav>

    </div>
  </header>

  );
};

export default NewHeader;
