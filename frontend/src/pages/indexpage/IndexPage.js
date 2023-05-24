import React from 'react';
import { useRef, useState} from "react";
import axios from "axios";

function IndexPage()
{
  // const[search,setSearch]=useState('London');
  const inputRef = useRef(null);
  const inputRefcode = useRef(null);
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  // const [defaultLocation, setDefaultLocation] = useState('m-2 justify-between');

  function currentDate(timezoneIn, dtIn) {
      let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));
      // // Convert into 24-hour format
      // let hour = (dateTime.getHours());
      // let ampm = hour >= 12 ? 'pm' : 'am';
      // let minutes = dateTime.getMinutes();
      // let weekday = dateTime.toLocaleString('default', { weekday: 'long' });
      let month = dateTime.toLocaleString('default', { month: 'short' });
      let date = dateTime.getDate();
      let year= dateTime.getFullYear();
      
      return `${date} ${month} ${year} `; 
  }
  function currentDay(timezoneIn, dtIn) {
      let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));
      let weekday = dateTime.toLocaleString('default', { weekday: 'long' });
      // let month = dateTime.toLocaleString('default', { month: 'short' });
      // let date = dateTime.getDate();
      // let year= dateTime.getFullYear();
      
      return `${weekday}`; 
  }
  function apiRequest(location) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dbb50c1700b55d9da3791433a7f39284`)
          .then(response => {
              setData(response.data)
              setIsFetching(false)
          }).catch(() => {
              // pass
              alert('City Data not found or City Name Invalid')
      })
  }
  function apiRequestcode(code) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${code}&units=metric&appid=dbb50c1700b55d9da3791433a7f39284`)
          .then(response => {
              setData(response.data)
              setIsFetching(false)
          }).catch(() => {
              // pass
              alert('City Data not found or City Code Invalid')
      })
  }
  
  function handleKeyPress(e) {
      setIsFetching(true);
      if (e.key === 'Enter') {
          apiRequest(inputRef.current.value.toLowerCase());
      }

  }
  function handleKeyCodePress(e) {
      setIsFetching(true);
      if (e.key === 'Enter') {
          apiRequestcode(inputRefcode.current.value);
      }

  }

  return (
    <div className='h-auto p-4 m-auto w-full '>
      <div className='w-full p-5  h-auto rounded-2xl flex-column bg-bag'>
        <div className='py-2 justify-between flex w-full '>
          <div className='px-2 w-2/4'>
            <input type="search" placeholder='City Name' 
            className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-sm shadow-gray-100 w-full'
            onKeyPress={(e) => {handleKeyPress(e)}} 
            ref={inputRef}/>
            <div className='px-2 m-2 text-xl text-white'>
                Please Enter City Name to Search
            </div>
          </div>
          <div className='px-4 w-2/4'>
            <input type="search" placeholder='City Code' 
            className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-sm shadow-gray-100 w-full'
            onKeyPress={(e) => {handleKeyCodePress(e)}} 
            ref={inputRefcode}/>
            <div className='px-2 m-2 text-xl text-white'>
                Please Enter City Code to Search
            </div>
          </div>
        </div>
      
        <div className='p-5 mx-auto  min-h-[40rem] h-fit'>
          {isFetching? 
          <p className='bg-mainbag text-white text-2xl h-full p-4 '>City Not Found</p> : 
          (
            <div className='text-white flex h-full mx-auto'>
              <div className='bg-gradient-to-tr from-red-500  p-5 w-2/6 rounded-2xl min-h-[38rem] h-full hover:from-red-800 hover:to-amber-100'>
                <div className='mx-auto my-2 text-4xl font-bold'>
                  {
                    <p>{currentDay(data.timezone,data.dt)}</p>
                  }
                </div>
                <div className='my-3 text-3xl'>
                  {
                    <p>{currentDate(data.timezone,data.dt)}</p>
                  }
                </div>
                <div className='my-3 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div className='text-3xl '> {data.name} , {data.sys.country}</div>
                </div>
                <img className='mx-auto mt-20 mb-5' src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png` } 
                    width={130}
                    height={130}/>
                <div className='mx-auto mb-20 text-5xl font-bold w-fit'>{data.main.temp}° C</div>
                <div className='m-auto my-4 text-4xl '>{data.weather[0].main} </div>
              </div>
              <div className='w-4/6 p-2'>
                <div className='bg-mainbag rounded-2xl p-2 mx-2 w-full my-2'>
                  {
                    (data.weather[0].icon.at(-1) === `d`)?
                    
                    <div className='m-4 flex justify-between'>
                      <div className='font-bold text-xl '>DAY</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    </div>
                    :
                    <div className='m-4 flex justify-between'>
                      <div className='font-bold text-xl '>NIGHT</div> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>
                    </div>
                  }
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>DESCRIPTION</div>
                    <div className='text-xl font-normal '>  {data.weather[0].description}</div>  
                  </div>
                </div>
                <div className='bg-mainbag rounded-2xl p-2 mx-2 w-full my-5'>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>HUMIDITY</div>
                    <div className='text-xl font-normal '>  {data.main.humidity} %</div>  
                  </div>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>PRESSURE</div>
                    <div className='text-xl font-normal '>  {data.main.pressure} hPa </div>  
                  </div>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>WIND SPEED</div>
                    <div className='text-xl font-normal '>  {data.wind.speed} m/s , {data.wind.deg}° </div>  
                  </div>
                  <div className='mx-4 my-2 flex justify-between'>
                    <div className='font-bold text-xl '>CLOUDS</div>
                    <div className='text-xl font-normal '>  {data.clouds.all} % </div>  
                  </div>
                </div>
                <div className='bg-mainbag rounded-2xl p-2 mx-2 w-full my-5'>
                  <p className='m-4 font-bold text-xl '>
                    TEMPERATURE</p>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>FEELS LIKE</div>
                    <div className='text-xl font-normal '>  {data.main.feels_like}° C</div>  
                  </div>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>MAX</div>
                    <div className='text-xl font-normal '> {data.main.temp_max}° C  </div>  
                  </div>
                  <div className='m-4 flex justify-between'>
                    <div className='font-bold text-xl '>MIN</div>
                    <div className='text-xl font-normal '> {data.main.temp_min}° C</div>  
                  </div>
                </div>
                
                
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
    
  );
}
export default IndexPage;