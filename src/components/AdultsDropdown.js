import React, {useContext} from 'react';

import {RoomContext} from '../context/RoomContext';
//headless ui menu

import {Menu} from '@headlessui/react'

import { BsChevronDown } from 'react-icons/bs';

const lis = [
  {name: 'EAST'},
  {name: 'WEST'},
  {name: 'SOUTH'},
  {name: 'NORTH'},
]

const AdultsDropdown = () => {
  const {area, setArea} = useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full flex h-full items-center justify-between px-8'>
        {area}
        <BsChevronDown className='text-base text-accent-hover'/>
      </Menu.Button>

      <Menu.Items as='ul' className='bg-white absolute flex flex-col z-40 w-full'>
        {lis.map((li, index)=>{
          return (
            <Menu.Item 
            as='li' 
            key={index}
            onClick={()=> { setArea(li.name); }}
            className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'
            >
            {li.name}
            </Menu.Item>
          )
        })}

      </Menu.Items>

    </Menu>
   
  );
};

export default AdultsDropdown;
