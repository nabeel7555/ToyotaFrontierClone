
import bus1 from '../Assets/bus1.jpg';
import bus2 from '../Assets/bus2.png';



export default function Cars() {
    return(
      <div className='flex mt-[-500px] justify-center w-1/2 m-auto'>
        
        <img className='w-96 h-80' src={bus1} alt="" />
        <img className='w-80 h-80' src={bus2} alt="" />
      </div>
    )
  }