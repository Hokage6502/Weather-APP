// const [cityname, setCityname]=useState('london');
//   const [citycode, setCitycode]=useState('');
//   const [city, setCity]=useState([]);
//   useEffect(() => {
    
//       try
//       {
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=dbb50c1700b55d9da3791433a7f39284`)
//         .then((response) => {
//           setCity(response.data);
//           console.log(response.data);
//         });
//         alert('data loaded Successful');
//       }
//       catch(e)
//       {
//         alert('Incorrect City');
//       }
    
//   }, [cityname]);

// // {/* <div className='py-2 flex-column w-full'>
// //               <div className='px-2 text-lg'>
// //               Enter City Name
// //               </div>
// //               <div className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-md shadow-gray-300'>
                
// //               <input type='text' 
// //                 placeholder='Enter City Name' 
// //                 className='w-full outline-none' 
// //                 value={cityname}
                
// //                 onChange={ev=> setCityname(ev.target.value)}>

// //               </input>
// //               <button className='bg-primary p-1 rounded-full text-white'>
// //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
// //                   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
// //                 </svg>
// //               </button>
// //               </div>
// //             </div>

// //             <div className='py-2 flex-column w-full'>
// //               <div className='px-2 text-lg'>
// //               Enter City Code
// //               </div>
// //               <div className='flex gap-2 border border-gray-300 rounded-full p-2 text-bold shadow-md shadow-gray-300'>
                
// //               <input type='text' 
// //                 placeholder='Enter City Code' 
// //                 className='w-full outline-none'
// //                 value={citycode}

// //                 onChange={ev=> setCitycode(ev.target.value)}>
// //               </input>
// //               <button className='bg-primary p-1 rounded-full text-white'>
// //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
// //                   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
// //                 </svg>
// //               </button>
// //               </div>
// //             </div> */}

// //             <div>
           
// //             Hello Fuckers
// //             <br>
// //             </br>
// //             {city.name}
// //             <br>
// //             </br>
// //             {city.visibility}
// //             <br>
// //             </br>
// //             {city.dt}
// //             <br>
// //             </br>
// //             {city.timezone}
// //             <br>
// //             </br>
// //             {city.id}
// //             <br>
// //             </br>
// //             {city.cod}
// //             <br>
// //             </br>
// //             {/* {
// //               city.wind?.map((c)=>return(
// //                 <div>
// //                 </div>))
// //             }; */}
// //             {/* {city.wind.deg
// //             } */}

// //             <br></br>
            
// //           </div>