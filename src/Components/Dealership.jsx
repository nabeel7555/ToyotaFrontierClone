import bgg from '../Assets/bgg.png';

export default function Dealership() {
    return (
        <div className='w-4/5 h-[500px] m-auto mt-16 object-cover relative'>
            <img className='w-full h-full ' src={bgg} alt="" />
            <div className=' w-[40%] h-[340px] absolute top-[15%] left-[15%] text-red-700 font-bold text-[14px] text-justify p-[90px] bg-white'>TFM Dealership of Indus Motors Company is committed to provide 3S quality services (Sale, Service and Spare Parts) according to the expectation of Customers with confidence, devotion and enthusiasm, and to build trustworthy long terms relationship with them.</div>
            <div className='w-[25%] h-[203.2px] absolute top-[28%] left-[55%] bg-[#FF5858] p-10 '>
                <div className='  text-white text-[14px] font-normal'>Please Contact us</div>
                <button className='text-white text-[16px] font-normal p-[10px] mt-10 border-2 border-white hover:text-red-700 hover:bg-white rounded-2xl'>Get Started</button>
            </div>
        </div>
    );
}
