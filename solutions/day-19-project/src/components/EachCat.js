import React from 'react'
import getData from '../services/catApi'


const EachCat = () => {

     let [catData, setCatData] = React.useState([]);   // We are usin the react states to store the values
     React.useEffect(() => {
          async function getCatsData() {
               let data = await getData();
               setCatData(data);
          }
          getCatsData();                                 // This asynchronous function  calls the  another function that have the api details and fetchs the data and stores in a variable
     }, [ ]);                                           // The use Effect will run only once after the component rendered
     

     function showData(item) {
          if(item.image)
               return <div class=" max-w-5xl mx-auto leading-loose text-2xl my-10 text-left bg-white  rounded overflow-hidden shadow-lg">
                    <div className='w-100  overflow-hidden '>
                         <img class="w-full h-full transition-all ease-in-out  hover:scale-110" src={item.image.url} alt={item.name} />
                    </div>
                    <div class="p-10 md:px-20">
                              <div class="font-bold text-3xl mb-2"> {item.name} </div>
                              <p> {item.origin} </p>
                         
                         <p class="text-gray-700  text-2xl">
                         <span className='font-semibold'>Temperament : </span> {item.temperament}
                         </p>
                         <p class="text-gray-700 text-2xl">
                         <span className='font-semibold'>Weight : </span> {item.weight.metric} Years
                         </p>
                         <p class="text-gray-700 text-2xl">
                         <span className='font-semibold'>Life Span : </span> {item.life_span} Years
                         </p>
                         <p class="text-gray-700 text-2xl">
                         <span className='font-semibold'>Description : </span> {item.description}
                         </p>
                    </div>
                    
               </div>
     }                                                                // This function is called after fetching data from the api and put in the tailwind component

     // name , temperament , description , weight :{metric} , origin , image:{url,height,width} , life_span
  return (
       <div className='text-center '>
            
          {/* the below code will call the showData function with an argument */}

            {catData.map(item => showData(item))}                       
            
     </div>
  )
}

export default EachCat
