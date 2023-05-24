{/* <div className='w-full p-4 h-auto flex-column bg-gray-100'>
      <div className='py-2 justify-between flex w-full '>
        <div className='px-2 w-2/4'>
          <input type="search" placeholder='City Name' 
          className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-md shadow-gray-300 w-full'
          onKeyPress={(e) => {handleKeyPress(e)}} 
          ref={inputRef}/>
          <div className='px-2 text-lg'>
              Please Enter City Name to Search
          </div>
        </div>
        <div className='px-4 w-2/4'>
          
          <input type="search" placeholder='City Code' 
          className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-md shadow-gray-300 w-full'
          onKeyPress={(e) => {handleKeyCodePress(e)}} 
          ref={inputRefcode}/>
          <div className='px-2 text-lg'>
              Please Enter City Code to Search
          </div>
        </div>
        
      </div>
      {isFetching? <p>City Not Found</p> : (
            <div>
                <div className='bg-white'>
                  <div className='p-4 flex justify-around'>
                    <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className='text-4xl'> {data.name} , {data.sys.country}</div>
                    </div>
                  </div>
                  <div className='p-4 '>
                    <div className='flex  justify-around'>
                    <img className={"img"} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} 
                      width={150}
                      height={150}/>
                    </div>
                    <div className='flex justify-around'>
                    <div className='m-auto flex font-bold text-4xl '>{data.weather[0].main} , <p className='my-1 text-3xl font-normal '>{data.weather[0].description}</p>  </div>
                    </div>
                    
                  </div>
                  <div>
                    <div className='flex justify-between '>
                      <div className='m-auto mr-0 text-4xl font-bold w-2/6'>Temp: {data.main.temp}° C </div>
                      <div className='flex-row  mr-auto ml-0 justify-around '>
                        <div className='text-xl '> Max:{data.main.temp_max}° C </div>
                        <div className='text-xl'> Min:{data.main.temp_min}° C </div>
                        <div className='text-xl'> Feels Like:{data.main.feels_like}° C</div>
                      </div>
                    </div>
                  </div>
                  <div className='mx-10'>
                    <div className=''>
                    <div className='m-auto flex font-bold text-2xl '>Humidity : <p className='my-1 text-xl font-normal '>{data.main.humidity} %</p>  </div>
                    </div>
                    <div className=''>
                    <div className='m-auto flex font-bold text-2xl '>Wind Speed/Degree : <p className='my-1 text-xl font-normal '>{data.wind.speed} m/s , {data.wind.deg}° </p>  </div>
                    </div>
                    <div className=''>
                    <div className='m-auto flex font-bold text-2xl '>Pressure: <p className='my-1 text-xl font-normal '>{data.main.pressure} hPa</p>  </div>
                    </div>
                  </div>
                  <div>
                    {
                      (data.weather[0].icon.at(-1) === `d`)?<p>Day</p>:<p>Night
                        
                      </p>
                    }
                  </div>
                  <div>
                    {
                      <p>{currentTime(data.timezone,data.dt)}</p>
                    }
                  </div>
                  {/* <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>

                    <div className='px-4'>
                      <text className='font-bold'>Sunrise :</text>{data.sys.sunrise}
                    </div>
                    <div className='px-4'>
                      <text className='font-bold'>Sunset :</text>{data.sys.sunset}
                    </div>

                  </div>
                  <div className='p-4 flex justify-around'>
                    <div className='flex'>
                    <div className='text-4xl'> {data.main.temp} K </div>
                    </div>
                    
                  </div> */}
    //             </div>
    //         </div>
    //     )}
      
    // </div> */}