import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { get_user } from '../api/user'
import Header from '../components/Header';
import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import whatsapp_logo from '../assets/img/whatsapp.png';

const RoomDetails = () => {
  //const {users} = useContext(RoomContext);
  const [user,setUser]=useState(null)

  const {id} = useParams();
  const getUser=(id) => {

        get_user({id:id}).then(res => {
		   //console.log(res)
		   const data=res
		   if(data!==undefined && data!==null && data.results!==undefined) {

                 setUser(data.results[0]);


            }

		}).catch(err => {

		  console.log(err)

		})

  }
  useEffect(()=>{
     getUser(id);

  }, [])
  /*
  const room = users.find((room)=> {
    return room.id === Number(id);
  })
  */
 // const {name,phone, description, cover, images,video_path} = room

console.log(user)
  return <section >
  <ScrollToTop/>
  <Header/>
  <div className='bg-room bg-cover h-[560px] bg-center relative flex justify-center items-center' style={{backgroundImage: 'url('+user?.cover+')'}}>
   {/* <div className='absolute w-full h-full bg-black/70'></div>  */}
   <div className='absolute w-full h-full bg-black/30'></div>
    <h5 className='text-2xl text-white z-20 font-primary flex items-center justify-center text-center'></h5>
  </div>
  <div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row px-6 h-full py-6'>
    <div className='w-full h-full lg:w-[60%]'>
    <h3 className='h3'>{user?.name}</h3>
    <div className='mb-5' dangerouslySetInnerHTML={{ __html: user?.description }}></div>
    <div  className='flex flex-row items-center justify-end px-6 h-full py-3'> <div><img src={whatsapp_logo} className='w-6 h-6 md:w-8 md:h-8' alt=""/></div><a href={`whatsapp://send?phone=+65${user?.phone}&text=Hello`}><div>{user?.phone}</div> </a>  </div>
    {
        user?.images.map((item,index) => (

             <img key={index} src={item}
                    alt=''
                    className='mb-8'
                    />
        )


        )
    }
    {/*
    <img src={user?.cover}
    alt=''
    className='mb-8'
    />
    */}
    <div className='mt-12' >
    {/*
      <h3 className='h3 mb-3'></h3>
      <p className='mb-12'></p>
      */}
      <div className='grid grid-cols-3 gap-6 mb-12'>
       {/*
        {facilities.map((item, index)=>{
          const {name, icon} = item;
          return (
            <div className='flex items-center gap-x-3' key={index}>
              <div className='text-3xl text-accent'>{icon}</div>
              <div className='text-base'>{name}</div>
            </div>
          )
        })}
        */}
      </div>
    </div>
   
    </div>

    <div className='w-full h-full lg:w-[40%]'>
        {/*
        <div className='py-8 px-6 bg-accent/20 mb-12'>
          <div className='flex flex-col space-y-4 mb-4'>
          <h3>Your Reservation</h3>
          <div className='h-[60px]'>
            <CheckIn/>
          </div>
          <div className='h-[60px]'>
            <CheckOut/>
          </div>
          <div className='h-[60px]'>
            <AdultsDropdown/>
          </div>
          <div className='h-[60px]'>
            <KidsDropdown/>
          </div>
          </div>
        <button className='btn btn-lg btn-primary w-full'>book for now for </button>
      </div>
      */}
      <div>
        <h3 className='h3'>Services</h3>
        <p className='mb-6'>
          Best massage service in singapore
        </p>
        { user?.tag_str_list  && (
        <ul className='flex flex-col gap-y-6'>
          {
              user?.tag_str_list.map( item => (
                  <li className='flex items-center gap-x-4'>
                    <FaCheck/>
                    {item}
                  </li>
              ))
          }

        </ul>
        )
        }
      </div>
      <div>
      {user?.video_path && (
           <video
              className='mb-8 w-full h-full lg:w-[90%]'

              controls>
            <source src={user?.video_path}  />
            您的浏览器不支持视频标签。
          </video>

      )

      }
      </div>
    </div>


  </div>

  </div>
  </section>;
};

export default RoomDetails;
