import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import img1 from '../Assets/b1.png';
import img2 from '../Assets/b2.jpg';
import img3 from '../Assets/b3.png';
import img4 from '../Assets/b4.png';
import img5 from '../Assets/b5.png';
import img6 from '../Assets/b6.png';
import bluearrow from '../Assets/bluearrow.jpg'
import contactus from '../Assets/contactus.jpeg'
import part from '../Assets/part.jpg'



export default function Banner(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
          
      };

    return(
        <div className="bg-red-700 h-[100vh] p-10">
        <div className="w-[80%] h-[286px] m-auto ">
       <Slider {...settings}>
       <div className="  h-full">
          <img className="" src={img1} alt="" />
        </div>
        <div className="  h-full">
           <img className="" src={img2} alt="" />
        </div>
        <div className="  h-full">
           <img className="" src={img3} alt="" />
        </div>
       <div className="  h-full">
          <img className="" src={img4} alt="" />
        </div>
        <div className="  h-full">
           <img className="" src={img5} alt="" />
        </div>
        <div className="  h-full">
           <img className="" src={img6} alt="" />
        </div>
       </Slider>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="rounded-3xl w-1/4 h-[300px] text-justify p-4 bg-white flex flex-col justify-around cursor-pointer hover:scale-110 hover:duration-200 duration-200">
                <div><img className="w-[33px] h-[30px]" src={bluearrow} alt="" /></div>
                <div><h1 className="text-[24px] text-red-700">Contact Us</h1>
                <p className="text-[16px] text-[grey]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt deleniti, enim illum perferendis officiis voluptates delectus, tempora beatae officia dolores nisi vel mollitia omnis ducimus iure. Minima, veritatis et?</p>
                </div>
            </div>
            <div className="rounded-3xl w-1/4 h-[300px] text-justify p-4 bg-white flex flex-col justify-around cursor-pointer hover:scale-110 hover:duration-200 duration-200">
                <div><img className="w-[40px] h-[40px]" src={contactus} alt="" /></div>
                <div><h1 className="text-[24px] text-red-700">Find Location</h1>
                <p className="text-[16px] text-[grey]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt deleniti, enim illum perferendis officiis voluptates delectus, tempora beatae officia dolores nisi vel mollitia omnis ducimus iure. Minima, veritatis et?</p>
                </div>
            </div>
            <div className="rounded-3xl w-1/4 h-[300px] text-justify p-4 bg-white flex flex-col justify-around cursor-pointer hover:scale-110 hover:duration-200 duration-200">
                <div><img className="w-[40px] h-[40px]" src={part} alt="" /></div>
                <div><h1 className="text-[24px] text-red-700">Buy Parts</h1>
                <p className="text-[16px] text-[grey]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt deleniti, enim illum perferendis officiis voluptates delectus, tempora beatae officia dolores nisi vel mollitia omnis ducimus iure. Minima, veritatis et?</p>
                </div>
            </div>
        </div>
        </div>
    )
}