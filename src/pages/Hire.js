import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import NewHeader from '../components/NewHeader';
import { get_user,post_post } from '../api/user'
import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import ContactForm from '../components/ContactForm';

const Hire = () => {
  //const {users} = useContext(RoomContext);
  const [user,setUser]=useState(null)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')

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
  const onName=(e) => {
      setName(e.target.value)
  }
   const onEmail=(e) => {
      setEmail(e.target.value)
  }
   const onSubject=(e) => {
      setSubject(e.target.value)
  }
   const onMessage=(e) => {
      setMessage(e.target.value)
  }

    const onSubmit=(e) => {
      post_post({name:name,email:email,subject:subject,message:message,type:3}).then(res => {
		   //console.log(res)
		   const data=res
		   if(data!==undefined && data!==null && data.id!==undefined) {

                 //setUser(data.results[0]);
                // console.log('ok')



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

//console.log(user)
  return <section >
 {/* <ScrollToTop/>*/}
  <NewHeader />
  {/*
  <div className='bg-room bg-cover h-[560px] bg-center relative flex justify-center items-center' style={{backgroundImage: 'url('+user?.cover+')'}}>

   <div className='absolute w-full h-full bg-black/30'></div>
    <h5 className='text-2xl text-white z-20 font-primary flex items-center justify-center text-center'></h5>
  </div>
  */}
  <div className='container mx-auto '>
  <div className='flex flex-col lg:flex-row px-6 h-full py-6'>
    <div className='w-full h-full lg:w-[60%]'>
    <h3 className='h3'>I want to hire</h3>
    <p className='mb-8'>At AISPA.CC, we strive to help you discover the best massage therapy and practitioner that fits your unique needs, ensuring you enjoy the benefits of an exceptional massage. We believe that whether for preventive measures, recovery, or personal well-being, everyone can enjoy the advantages of the best massage experience.</p>
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
    <div className='mt-1' >
    {/*
      <h3 className='h3 mb-3'></h3>
      <p className='mb-12'></p>
      */}
      <div className='grid grid-cols-3 gap-6 mb-1'>
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
        <h3 className='h3'>Leave a Reply</h3>
        <p className='mb-6'>
          Your email address will not be published. Required fields are marked *
        </p>

        <div>
        <ContactForm onName={onName} onEmail={onEmail} onSubject={onSubject} onMessage={onMessage} onSubmit={onSubmit} />
      </div>

      </div>

    </div>


  </div>

  </div>
  </section>;
};

export default Hire;
