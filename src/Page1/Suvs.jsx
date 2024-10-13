
import suv1 from '../Assets/suv1.png';
import suv2 from '../Assets/suv2.jpg';
import suv3 from '../Assets/suv3.png';



export default function Suvs() {
    return(
      <div className='flex mt-[-500px] justify-center  m-auto '>
        
        <img className='w-80 h-80' src={suv1} alt="" />
        <img className='w-80 h-80' src={suv2} alt="" />
        <img className='w-80 h-80' src={suv3} alt="" />
      </div>
    )
  }