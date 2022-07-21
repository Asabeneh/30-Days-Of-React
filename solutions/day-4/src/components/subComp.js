import React from "react";

export default function SubComp() {
     return (
          <section className='sub'>
               <div>
                    <h2>subscribe</h2>
                    <p>Sign up with your eamil address to receive news and updates</p>
                    <form action="*">
                         <input type="text" placeholder='First name'/>
                         <input type="text" placeholder='Last name'/>
                         <input type="text" placeholder='Email' />
                    </form>
                    <button>Subscribe</button>
               </div>
      </section>
     )
}