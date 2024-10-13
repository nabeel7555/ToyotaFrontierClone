import cr from '../Assets/cr.jpg';
import pa from '../Assets/pa.jpg';
import se from '../Assets/se.jpg';

export default function Details(){
    return(
        <div className='flex justify-evenly w-4/5 m-auto mt-16'>
            <div className='w-1/4 h-auto'><img className='w-full object-cover' src={se} alt="" /><p className='text-[32px] text-black font-bold'>SALES</p><p className='text-[14px] text-[grey]'>A devoted team Committed to provide quality services to the customer of Peshawar and KPK. Feel free to browse through all our products that can bring comfort and luxury to your life</p></div>
            <div className='w-1/4 h-auto'><img className='w-full object-cover' src={pa} alt="" /><p className='text-[32px] text-black font-bold'>PARTS</p><p className='text-[14px] text-[grey]'>Indeed Toyota is know for its quality products, a common believe that Toyota never break downs but just in case you need any spares, Toyota Frontier Motors is here to provide you Genuine Toyota Spare Parts</p></div>
            <div className='w-1/4 h-auto'><img className='w-full object-cover' src={cr} alt="" /><p className='text-[22px] text-black font-bold'>CUSTOMER-RELATIONS</p><p className='text-[14px] text-[grey]'>A royal and luxurious service to our customers, at Toyota Frontier Motors we welcome our ever customer and make sure, we provide them with absolute quality service which no one else can offer.</p></div>
            
        </div>
    )
}