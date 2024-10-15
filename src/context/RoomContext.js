import React, {createContext, useEffect, useRef, useState}from 'react';
import { get_user_list } from '../api/user'
//import {roomData} from '../data';


export const RoomContext = createContext()

const RoomProvider = ({children}) => {
  const myRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [area, setArea] = useState('Area');
  const [category, setCategory] = useState('Type');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false)
  const getUserList=() => {

        get_user_list({page_size:1000,page:1}).then(res => {
		   //console.log(res)
		   const data=res
		   if(data!==undefined && data!==null && data.results!==undefined) {

                 setUsers(data.results);
                 setTotal(data.count)

            }

		}).catch(err => {

		  console.log(err)

		})

  }
  useEffect(()=>{
     getUserList();

  }, [area,category])

  const handleClick = (e) =>{
    e.preventDefault();
    setLoading(true);

    const newUsers = users.filter(user => {
        if (area!='Area') {
            if(category!='Type') {

                    return user.area_filter_name==area && user.category_filter_name==category;
            }
            else
                {
                     return user.area_filter_name==area;
                }
        }
        else {
            if(category!='Type') {

                  return user.category_filter_name==category;
               }
            else {
                     return user.area_filter_name!==null;
               }

        }
      });
      setTimeout(()=>{
        setUsers(newUsers);
        setLoading(false);
      }, 500)
    }

    const handleScroll = (e) =>{
      console.log("button is working")
      e.preventDefault();
      myRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
      <RoomContext.Provider value={{users, area, category, setArea, setCategory, handleClick, loading, myRef, handleScroll}}>{children}</RoomContext.Provider>
      )
  

  }


export default RoomProvider;
