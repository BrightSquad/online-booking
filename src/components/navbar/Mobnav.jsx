import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";



const Mobnav = ({ mobileMenuToggle }) => {
  
  return (
    <nav className=" top-0 right-0 absolute z-50 bg-[#330099]">
      <div className=" bg-[#330099] w-screen  h-screen [395px] px-8 py-6 centered gap-8">
        <CgClose
          onClick={mobileMenuToggle}
          fontSize={20}
          className="text-[#330099] right-4  lg:hidden absolute border top-4 bg-white opacity-90 cursor-pointer self-end"
        />
        <ul className="flex flex-col lg:hidden  mt-16 gap-y-[24px]">
       
            <li
              // onClick={mobileMenuToggle}
           
              className="tracking-[0.5px] z-50 text-base text-center text-[#330099] flex flex-col gap-1"
            >
      
          <Link to={"#about"} className="no-underline font-semibold text-[#ff8800]">
            About Us
          </Link>
       
       
          <Link to={"#book"} className="no-underline font-semibold  text-[#ff8800]">
            Book
          </Link>
         
         

              <hr
                className={`bg-light opacity-0 mx-auto w-[20%] h-[2px] transition-opacity duration-100`}
              />
            </li>
        
          <div className="flex gap-4 z-50 place-content-center ">
          <Link to={"/signup"} className="w-[120px] h-[44px]  flex items-center justify-center bg-white text-[#330099] rounded-[10px] font-semibold">
            Sign up
          </Link>
             
          <Link  to={"/login"} className="w-[120px] h-[44px] border flex items-center justify-center  border-white text-white  rounded-[10px] font-semibold">
            Login
          </Link>
      
          </div>
        </ul>
      </div>
      <div
        onClick={mobileMenuToggle}
        className="fixed border top-0 right-0 left-0  bottom-0 bg-dark bg-opacity-70 h-full w-screen"
      ></div>
    </nav>
  );
};

export default Mobnav;




