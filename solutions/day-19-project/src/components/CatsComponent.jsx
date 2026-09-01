import React from 'react'
import EachCat from './EachCat';

function CatsComponent() {

  

   return (
    
      <div className=' p-10 bg-red-300  mx-auto '>
         
         {/* Each Cat  component will take the data from api and maps into the it */}

         <EachCat />
     </div>
     
  )
}

export default CatsComponent
