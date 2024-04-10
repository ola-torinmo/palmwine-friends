import '../App.css'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import About from './pages/About';
// import Landing from './component/Landing';
import React from 'react';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../assets/images/pf.png';
import backgroundImage2 from '../assets/images/pfs.png';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import star1 from "../assets/images/star1.png"
import star2 from "../assets/images/star2.png"
import line1 from "../assets/images/line1.png"
import line2 from "../assets/images/line2.png"
import line3 from "../assets/images/line3.png"
// import img from ''


function Landing() {

  return (
    <div>
      <main
      className='w-screen'
    >
     

      <section className=" bg-cover bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply hidden md:block  " style={{ backgroundImage: `url(${backgroundImage})` }}>


      <div className="">
        <div className="flex">
          <img alt='' src={logo} className="mx-5 py-5 w-[120px] h-[100px] md:ml-[5%]" />
          <img alt='' src={star1} className="h-[50px] ml-[32%] md:mt-[2%]" />
        </div>

        <div className="">
          <img alt='' src={line1} className=" w-[160px] h-[90px] md:ml-[82%] mt-[4%] " />
        </div>

        <div className="flex md:ml-[10%] mt-[10%]">
          <img alt='' src={line2} className=" w-[120px] h-[90px] mt-[10]" />
          <img alt='' src={star2} className="h-[70px] md:ml-[70%] mt-[10]" />
        </div>

        <div className="md:ml-[69%]">
          <img alt='' src={line3} className="w-[120px] h-[90px] mt-[45%]" />
        </div>
      </div>
        
             
       
          <Link to="/Sign_up" >
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0  pb-[20%] md:pb-[1%] ">
                  <div  className="inline-flex justify-center items-center  py-5 w-[200px] md:w-[450px] border-2 border-black md:text-[32px] text-[14px] font-medium text-center text-dark rounded-none bg-[#e7ee06] t-[30%]  "  style={{ fontFamily: 'PressStart2P' }} >
                      Press start
                      
                  </div>
                  
              </div>
          </Link>
      </section>



      {/* smaller screens */}
      <section className=" bg-contain bg-center bg-no-repeat  bg-gray-500 bg-blend-multiply md:hidden  pt-[80%] " style={{ backgroundImage: `url(${backgroundImage2})` }}>


      <div className=" pb-[100%]">
        <div className="flex ">
          <img alt='' src={logo} className=" w-[70px] h-[40px] ml-[10%] mt-[-5%]" />
          <img alt='' src={star1} className="h-[30px] ml-[17%] md:mt-[2%] mt-[-5%] " />
        </div>

        {/* <div className="mt-[%]">
          <img src="/images/line1.png" className=" w-[160px] h-[90px] md:ml-[82%] " />
        </div> */}

        {/* <div className="flex ml-[10%] ">
          <img src="/images/line2.png" className=" w-[70px] h-[20px] mt-[0%]" />
          <img src="/images/star2.png" className="h-[30px] ml-[60%] mt-[0%]" />
        </div> */}

        <div className="ml-[80%]  ">
          <img alt='' src={star2} className="w-[40px] h-[40px] mt-[100%]" />
        </div>
       </div>
        
             
       
          <Link to='/Sign_up'>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0   md:pb-[1%]  ">
              <div className="inline-flex justify-center items-center py-3 md:py-5 w-[200px] md:w-[450px] border-2 border-black md:text-[32px] text-[18px] font-medium text-center text-black md:text-black rounded-none bg-[#e7ee06] mt-[-80%] ml-[25%]" style={{ fontFamily: 'PressStart2P' }}>
                      Press start
                  </div>
                  
              </div>
          </Link>
      </section>


    </main>
     
    
    </div>

  )
}

export default Landing
