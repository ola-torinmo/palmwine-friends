import React from 'react'
import '../App.css'
import 'tailwindcss/tailwind.css';
import backgroundImage from '../assets/images/palm.png';
import backgroundImage2 from '../assets/images/palm2.png';
import backgroundImage3 from '../assets/images/pfs2.png';
// import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import star1 from "../assets/images/star1.png"
import star2 from "../assets/images/star2.png"
// import line1 from "./assets/images/line1.png"
import line2 from "../assets/images/line2.png"
import line3 from "../assets/images/line3.png"
import email from "../assets/images/email.png"
import insta from "../assets/images/insta.png"
import name from "../assets/images/name.png"
import { useState } from 'react';


function Sign_up() {
  const  [formState, setFormState] =useState({});
  const changeHandler =(event) =>{
   setFormState({...formState,[event.target.name]:event.target.value});
  };

  const submitHandler=(event)=>{
    event.preventDefault();

    const config ={
      SecureToken : 'dcaa0e4c-ae02-4bf1-93f1-4e93820252b2',
      Port : 2525 ,
      To : 'palmwineandfriendsng@gmail.com',
      From : formState.email,
      Subject : "This user will show up!",
      Body : `${formState.name} connected to you over mail`

    };
    if (window.Email){
      window.Email.send(config).then(() => alert('success'));
    }
    event.target.reset()

  };
  return (
   <>
    <main
        className={`w-screen`}
      >
        <section className="h-screen md:h-[1290px] md:bg-contain bg-contain bg-center bg-no-repeat   hidden md:block  " style={{ backgroundImage: `url(${backgroundImage})` }}>
        
          <img src={logo} alt='' className="mx-4  py-4 md:mt-[-1.5%] ml-[3.5%]  w-[90px] h-[70px]"/>
 
        </section>

         {/* smaller screens */}
        <section className="h-screen md:h-[1290px] md:bg-contain bg-contain bg-center bg-no-repeat   md:hidden mt-[-30%] se:mt-[0%]  " style={{ backgroundImage: `url(${backgroundImage2})` }}>
        
          <div className="pt-[54%] ip12:pt-[54%] ip14:pt-[54%] ipx:pt-[54%] md:pt-[54%]  ">
          <img src={logo} alt='' className=" ip12:ml-[3.5%] ip14:ml-[3.5%] ipx:ml-[3.5%] md:ml-[3.5%]  ml-[3.5%]  md:w-[90px] w-[50px] md:h-[70px] h-[30px]"/>
          </div>
 
        </section>
       
  
        <section className="md:bg-cover bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply  " style={{ backgroundImage: `url(${backgroundImage3})` }}>
        
        <div className="" >
          <div className="md:flex md:mt-[-1.5%] mt-[-40%]">
          {/* <img src="/images/logo.png" className="mx-5 py-5 w-[120px] h-[100px] ml-[5%] "/> */}
          <img src={star1} alt='' className="md:h-[70px] h-[25px]  md:ml-[47%] ml-[47%] md:mt-[10%] pt-[2%] "/>
          
          </div>

          {/* <div className="">
          <img src="/images/line1.png" className=" w-[160px] h-[90px] md:ml-[82%] mt-[4%]"/>
          </div> */}
          
          <div className="flex ml-[10%] md:mt-[15%] mt-[27%]">
          <img src={line2} alt='' className=" md:w-[120px] w-[50px] md:h-[90px]"/>
          <img src={star2} alt='' className="md:h-[70px] h-[40px] md:ml-[70%] ml-[70%]  mt-[%]"/>
          
          </div>
          
          <div className="md:ml-[70%] ml-[82%] md:mt-[25%]  ">
            <img src={line3} alt='' className=" md:w-[120px] md:h-[90px] h-[60px] w-[60px] md:mt-[30%] mt-[40%] se:mt-[60%]  "/>
          </div>
        </div>
          
           
               
         
            <div className="">

              

                <form  onSubmit={submitHandler}  className=" md:mx-[25%] mx-[21%] md:mt-[-25%] mt-[-45%] ip12:mt-[-44%] ip14:mt-[-36%] ipx:mt-[-39%] " style={{ fontFamily: 'moderat' }}>
                  <div className="md:mb-[45px] mb-[15px]  relative">
                   
                    <input type="text"
                    onChange={changeHandler}   
                    
                      id="fullname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block md:w-[600px] w-[250px] p-2.5 pl-12 bg-transparent" placeholder="fullname" required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src={name} alt='' className="h-5 w-5"/> 
                  </div> 
                  </div>
                  <div className="md:mb-[45px] mb-[15px] relative">
                   
                    <input 
                      type="text"
                      onChange={changeHandler}
                      id="email" class="shadow-sm bg-gray-50 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 pl-12 md:w-[600px] w-[250px] " placeholder="email" required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src={email} alt='' className="h-5 w-5"/> 
                  </div> 
                  </div>
                  <div className="md:mb-5 pb-[%] relative">
                    
                    <input 
                    onChange={changeHandler}
                    
                    id="insta" class="shadow-sm bg-gray-50 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 pl-12 md:w-[600px] w-[250px] " placeholder="instagram"required />
                    <div class="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"> 
                      
                      <img src={insta} alt='' className="h-5 w-5"/> 
                  </div> 
                  </div>
                  
                  

                  <div className="flex  sm:justify-center  pb-[5%] ">
                    <button className="inline-flex justify-center items-center ip12:mt-[8%] ip14:mt-[8%] ipx:mt-[8%] md:mt-[8%] mt-[5%]  md:py-5 py-3 md:w-[450px] w-[200px] border-2 border-black md:text-[32px] text-[18px] font-medium text-center text-black rounded-none bg-[#e7ee06] md:mb-[0%] md:ml-[0%] mb-[1%] ml-[12%]  " type='submit'   style={{ fontFamily: 'PressStart2P' }} >
                        Sign up
                        
                    </button >
                    
                </div>
                </form>

  
              
               
                
                

                    
                </div>
        </section>
  
      </main>
    
   </>
  )
}

export default Sign_up