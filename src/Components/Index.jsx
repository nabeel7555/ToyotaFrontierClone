import videobg from '../Assets/videobg.mp4';

export default function Abc() {
    return (
        <div className='main'>
            <video src={videobg} autoPlay muted loop></video>
            <div className='overlay'></div>
            <div className='absolute top-44 flex flex-col space-y-5 z-10'>
                <h1 className='heading text-white text-[100px] cursor-pointer font-semibold max-sm:text-[50px]'>
                    Welcome To Toyota Frontier Motors
                </h1>
                <button className='bg-red-700 text-white text-[16px] m-auto p-3 font-medium rounded-xl hover:scale-125 hover:duration-200 duration-200'>🚘 Book a Test Drive</button>
                <button className='bg-red-700 text-white text-[16px] m-auto p-3 font-medium rounded-xl hover:scale-125 hover:duration-200 duration-200'>💻 Online Appointment</button>
            </div>
        </div>
    );
}
