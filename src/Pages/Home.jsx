import Index from '../Components/Index';
import Banner from "../Components/Banner";
import Explore from '../Components/Explore';
import { Outlet } from 'react-router-dom';
import Dealership from '../Components/Dealership';
import Details from '../Components/Details';
import Hbk from '../Components/Hbk';

export default function Home() {
  return (
    <div>
      <Index />
      <Banner />
      <Explore />
      {/* Outlet will render the nested routes */}
      <Outlet />
      <Dealership/>
      <Details/>
      <Hbk/>
      <div className='w-full h-[100px] bg-[#2F2F2F] mt-10'></div>
    </div>
  );
}
