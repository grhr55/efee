"use client";


import Image from "next/image";
import { useState } from "react";






export default function Home() {
  const [meni ,setmeni] = useState(false)
  const sectionsIds = ['glav', 'yslug', 'tal', 'contact', ];



  return (
    <section  id="glav">

    

<div className="bg-[rgba(247,241,223,1)]     min-[1165px]:pb-[140px]   max-[1170px]:pb-[0px]  w-[100%] h-[100%] ">

    <div className=" flex  min-[600px]:justify-around max-[600px]:justify-between  min-[600px]:mx-[0%]  max-[600px]:mx-[9%]    2xl:gap-[550px] xl:gap-[550px] lg:gap-[580px] lg:max-[1123px]:gap-[0px]  gap-[0px] pt-[48px]">
                 <div className="flex min-[600px]:hidden" >



    <div className="relative">
      {/* Кнопка открытия/закрытия */}
      <button
        className="cursor-pointer"
        onClick={() => setmeni(!meni)}
      >
        {meni ? (
          <Image
            src="/img/menu.png"
            width={43}
            height={14}
            alt="menu"
            className="w-[43px] h-[18px]"
          />
        ) : (
          <Image
            src="/img/menu.png"
            width={43}
            height={14}
            alt="menu"
            className="w-[43px] h-[18px]"
          />
        )}
      </button>

      {/* Меню */}
{meni && (
  <div className="bg-amber-600 fixed top-0 left-0 z-50 w-full h-screen">
    <button onClick={() => setmeni(!meni)}>X</button>
    <nav>Главная</nav>
    <nav>О нас</nav>
    <nav>Услуги</nav>
    <nav>Контакты</nav>
  </div>
)}

    </div>



</div>
       <div>
         <h1 className="text-[clamp(20px,8vw,24px)] dm-sans-bold ">DERMATO</h1>
       </div>
       <div className=" hidden min-[600px]:flex">
         <nav
          className="flex flex-wrap items-center0  gap-[48px]  dm-sans-bold text-[clamp(20px,8vw,24px)] "
          initial="hidden"
          animate="visible"
        
        >
          {['Início', 'Serviços', 'Sobre', 'Contato'].map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(sectionsIds[index]);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </a>
          ))}
        </nav>





       </div>

    </div>

  
<div className=" flex justify-around justify-items-center   flex-wrap ">
<div className="min-[600px]:mt-[160px] max-[600px]:mt-[56px]">
    <h2 className="text-[clamp(24px,8vw,48px)] m-0 p-0 leading-tight  pb-[19px] text-[rgba(220,36,40,1)] dm-sans-bold">A sua beleza é única,<br/>
o tratamento também</h2>
<h3 className=" dm-sans-bold text-[clamp(13px,3vw,20px)] pb-[30px]  ">A padronização de tratamentos estéticos gera resultados <br/> artificiais. Por isso analisamos sua pele e realizamos<br/> apenas procedimentos personalizados para você.</h3>

<a href="#" className="w-[263px] text-center text-[clamp(16px,4vw,20px)]  rounded-[5px] bg-[var(--c8,rgba(220,36,40,1))] text-white p-4    h-[58px] font-bold dm-sans-bold">
Agendar Consulta
</a>


</div >
  <Image
    src="/img/img.png"
    width={617}
    height={500}
    alt="User Avatar"
    className="w-[620px] mt-[57px] min-[600px]:h-[500px] max-[600px]:h-[350px]"
   />
</div>


</div>
</section>
  )


}
