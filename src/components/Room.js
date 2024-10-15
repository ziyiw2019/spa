import React from 'react';

import { Link } from 'react-router-dom';

import {BsArrowsFullscreen, BsPeople,BsWhatsapp,BsPerson} from 'react-icons/bs'


const Room = ({room}) => {
  //destructure room
  const {id, name, cover, description, phone} = room;

  return (
  <div className='bg-white shadow-2xl min-h-[350px] group'>
    <div className='overflow-hidden'>
      {/*
      <img className='group-hover:scale-110 transition-all duration-300 w-full ' src={cover}
      alt=""/>
      */}
      <img className='group-hover:scale-110 transition-all duration-300  w-full' src={cover}
      alt=""/>
    </div>
    <div className='bg-white opacity-70 shadow-lg max-w-[300px] h-[50px] mx-auto -translate-y-1/9 flex justify-center uppercase items-center font-tertiary tacking-[1px] font-semibold text-[16px] text-base'>
      <div className='flex justify-between w-[80%]'>
      {/* Height Weight */}
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
            <BsPerson className='text-[20px]'/>
          </div>
          <div className='flex gap-x-1'>
            <div></div>
            <div>{name}</div>
          </div>
        </div>
        {/* Whatsapp */}
        <a href={`whatsapp://send?phone=+65${phone}&text=Hello`}>
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
            <BsWhatsapp className='text-[18px]'/>
          </div>
          <div className='flex gap-x-1'>
            <div></div>
            <div>{phone}</div>
          </div>
        </div>
        </a>
      </div>
    </div>
    {/* name */}
    <div className='text-center'>
    {/*  <Link to={`/room/${id}`}>
        <h3 className='h3'>{name}</h3>
      </Link>
      */}
      <div className='max-w-[300px] mx-auto mb-2 lg:mb-5'  dangerouslySetInnerHTML={{ __html: description }} ></div>
    </div>
    {/* btn */}

    <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>
      View Profile
    </Link>

  </div>
  );
};

export default Room;
