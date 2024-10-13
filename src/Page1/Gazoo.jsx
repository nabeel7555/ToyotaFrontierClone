
import gazoo1 from '../Assets/gazoo1.png';
import gazoo2 from '../Assets/gazoo2.png';



export default function Cars() {
    return(
      <div className='flex mt-[-500px] justify-center w-1/2 m-auto'>
        
        <img className='w-96 h-72' src={gazoo1} alt="" />
        <img className='w-80 h-72' src={gazoo2} alt="" />
      </div>
    )
  }