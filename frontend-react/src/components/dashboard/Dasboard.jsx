import React,{useEffect} from 'react'
import axios from 'axios';
import axiosInstance from '../../axiosinstance.js'

const Dasboard = () => {
    
    useEffect(() => {
        // Fetch user data or perform any necessary actions
        const fetchProtectedData=async()=>{
            try{
                const response=await axiosInstance.get('/protected-view')
                console.log('success',response.data);

            }catch(error){
                console.error('Error fetching protected data:', error);
            }
        };
        fetchProtectedData();
    }, [])

  return (
    <div className='text-light container'>Dasboard</div>
  )
}

export default Dasboard