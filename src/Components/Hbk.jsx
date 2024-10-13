import hbk from '../Assets/hbk.jpeg'; 
import news from '../Assets/news.png'; 


export default function Hbk(){
    return(
        <div className=' w-4/5 h-[600px] m-auto mt-16 overflow-hidden bg-red-700'>
           <img className='m-auto bg-white' src={news} alt="" />
          <div className='bg-[#545760]'><h1 className='text-[90px] text-white w-[30%] h-[100%] pt-10  font-bold mt-5 animate-pulse'>TOYOTA <span className='font-normal'>CROSS</span> HBK</h1></div>
          <div><img className='w-[30%] h-[300px] ml-[50%] mt-[-350px]' src={hbk} alt="" /></div>
        </div>
    )
}