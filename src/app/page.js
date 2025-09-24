"use client";


import Heder from './components/Heder'
import Form from './components/Form'
import Client from './components/Client'
import CountUp from "react-countup";
import Instructor  from './components/Instructor';

import Contac from './components/Contact';

export default function Home() {
  return (
 <div  >
   <Heder />
<div className="absolute hidden min-[1165px]:flex   2xl:min-[1920px]:top-[69%] 2xl:max-[1900px]:top-[76%] xl:top-[76%]  lg:min-[1277px]:top-[76%]  lg:max-[1277px]:top-[76%]     top-[49%]  2xl:min-[1920px]:left-[10%] 2xl:max-[1900px]:left-[8%] left-[5%]  h-[250px] w-[clamp(600px,88vw,1500px)] rounded-[5px] bg-[var(--c1,rgba(255,255,255,1))]">
<div className='   flex  '>
    <div className=' 2xl:min-[1920px]:ml-[180px] 2xl:max-[1900px]:ml-[150px]   xl:min-[1351px]:ml-[100px] xl:max-[1351px]:ml-[70px]  lg:ml-[90px] ml-[90px]  text-center dm-sans-bold mt-[70px] 2xl:mr-[150px] xl:mr-[131px]  lg:mr-[90px]  mr-[90px]'>
    <CountUp className='text-[45px]' end={3000} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[20px]' >Clientes satisfeitas</h2>
    </div>

    <div className='w-[3px] h-[65px] mt-[100px] bg-[rgba(126,98,60,1)]'></div>

    <div className=' 2xl:min-[1920px]:ml-[170px] 2xl:max-[1900px]:ml-[148px] ml-[148px] dm-sans-bold text-center mt-[70px]   2xl:min-[1920px]:mr-[170px] 2xl:max-[1900px]:mr-[148px]    xl:mr-[200px] xl:max-[1500px]:mr-[140px] lg:mr-[97px] lg:ml-[97px] mr-[50px]'>
     <CountUp className='text-[45px]' end={15} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[20px]' >Anos de experiência</h2>
    </div>

    <div className='w-[3px]  h-[65px] mt-[100px] bg-[rgba(126,98,60,1)]'></div>

    <div  className='2xl:min-[1920px]:mr-[180px] 2xl:max-[1900px]:mr-[150px]  xl:mr-[100px]  lg:mr-[90px]  mr-[90px] text-center dm-sans-bold mt-[70px] 2xl:ml-[130px] xl:min-[1321px]:ml-[150px]  xl:max-[1295px]:ml-[118px]  lg:ml-[90px]  ml-[90px]  '>
   <CountUp className='text-[45px]' end={10} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[20px] pl-[37px] '>Filiais</h2>
    </div>

</div>

</div>

   <Form/>
   <Client/>
   <Instructor/>
   <Contac/>
 </div>
  );
}
