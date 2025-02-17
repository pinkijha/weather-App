import React from 'react'
import Search from './Search'

const Home = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-200'>
        <div className='flex  justify-center  bg-gradient-to-bl from-blue-600 
     to-blue-900 w-[250px] h-[400px] md:w-[450px] md:h-[550px] rounded-2xl shadow-2xl' >        
      <div className='flex flex-col items-center'>
      <Search/>      
        <img className=' md:w-[150px] w-[100px] h-[100px] md:h-[150px] '
        src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' />
        <p className='flex font-bold text-white text-[40px] md:text-[70px] justify-center '>21°C</p>
        <p className='flex text-white text-[30px] md:text-[40px] justify-center '>Pune</p>      

         <div className='flex md:mt-4 mt-3 gap-4 md:gap-7'>
        <div className='flex text-white items-center gap-2'>
            <img className='md:w-10 md:h-10 w-5 h-5 '
            src='https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/recycle-symbol-white-icon.png' />
            <p className='flex flex-col text-lg '>67%                
            <span className='text-xs'>Humidity</span>
            </p>
        </div>
        <div className='flex text-white items-center gap-2'>
            <img className='md:w-11 md:h-11 w-6 h-6 rounded-4xl'
            src='https://media.istockphoto.com/id/1368763816/vector/wind-blow-vector-icon-air-puff-symbol.jpg?s=612x612&w=0&k=20&c=0GIijczbW0qFbHtaPWS9tf-QUSYCRr627AkUp5I0jRo=' />
            <p className='flex flex-col text-md '>2.06 km/h               
            <span className='text-xs'>Wind Speed</span>
            </p>
        </div>
      </div>  
      </div>

     
     
    </div> 
    </div> 
  )
}

export default Home
