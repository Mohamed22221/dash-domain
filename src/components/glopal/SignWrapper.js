import React from 'react'
import Slider from "react-slick";
import logo from "../../assets/images/logos/logo2.png"
import slide1 from "../../assets/images/main/slidelogin1.png"
import slide2 from "../../assets/images/main/slidelogin2.png"
import slide3 from "../../assets/images/main/slidelogin3.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SignWrapper = (props) => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
  return (
    <div className='row ml-0  align-items-md-center sign-wrapper '>
      <div className=' col-md-6 main-left' >
        <div className='left-sign-wrapper '>
          <div className='header'>
            <img src={logo} />
            <h1>Start your domain with us.</h1>
          </div>
        
        <Slider {...settings} className=" p-0">
          <div>
          <img src={slide1} />
          </div>
          <div>
          <img src={slide2} />
          </div>
          <div>
          <img src={slide3} />
          </div>
  
        </Slider>
        </div>
        </div>
     <div className='right-sign-wrapper d-flex flex-column align-items-center  col-md-6 p-0'>
      {props.children}
     </div>
    </div>
  )
}

export default SignWrapper