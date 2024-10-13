
import car2 from '../Assets/car2.jpg';
import car3 from '../Assets/car3.png';



export default function Cars() {
    return(
      <div className='flex mt-[-500px] justify-center w-1/2 m-auto'>
        
        <img className='w-80 h-80' src={car2} alt="" />
        <img className='w-80 h-80' src={car3} alt="" />
      </div>
    )
  }