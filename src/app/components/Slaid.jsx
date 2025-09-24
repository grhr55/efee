

"use client";




import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {  Navigation, Pagination,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";



export default function Form() {

const products = [
  {
    name: 'Débora Souza',
    img: '/img/picture.png',
    otzov: 'Really good quality, lovely packaging & delivery. Love it!',
     zvezd:'/img/Rating.png'
  },
  {
    name: 'Daiene Rodrigues',
    otzov: 'Really good quality, lovely packaging & delivery. Love it!',
    img: '/img/picture (1).png',
    zvezd:'/img/Rating.png'
  },
   {
    name: 'Mariana Costa',
    otzov: 'Really good quality, lovely packaging & delivery. Love it!',
    img: '/img/images (4).jpeg',
    zvezd:'/img/Rating.png'
  },
   {
    name: 'Lucas Almeida',
    otzov: 'Really good quality, lovely packaging & delivery. Love it!',
    img: '/img/card_master.jpg',
    zvezd:'/img/Rating.png'
  },
   {
    name: 'Thiago Ribeiro',
    otzov: 'Really good quality, lovely packaging & delivery. Love it!',
    img: '/img/6081f3d8cf881_b.jpeg',
    zvezd:'/img/Rating.png'
  },
  


];


    return(
        <div className=" bg-[var(--c4,rgba(228,208,180,1))] w-[100%] pb-[50px] h-[100%]">
            <div className=" flex justify-center min-[600px]:pt-[80px] max-[600px]:pt-[48px]">
               <div> <h2 className="text-[clamp(20px,5vw,36px)] text-center text-[rgba(220,36,40,1)] pb-[81px] dm-sans-bold ">O que as nossas clientes dizem?</h2>
               <div className="relative hidden min-[1162px]:flex w-full max-w-5xl mx-auto py-10">
  {/* Кнопка "назад" */}
  <div className="hidden min-[1155px]:flex">
    <div className="custom-prev  text-[rgba(220,36,40,1)] text-[60px]  top-[160px]  absolute left-[-60px] -translate-y-1/2 z-10 cursor-pointer text-2xl">
    &#10094;
  </div>

  {/* Кнопка "вперед" */}
  <div className="custom-next absolute text-[rgba(220,36,40,1)] text-[60px] top-[160px]  right-[-60px]  -translate-y-1/2 z-10 cursor-pointer text-2xl">
      &#10095;
  </div>
  </div>
  
  <Swiper
   
    modules={[Navigation, Pagination]}
      navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  pagination={{ clickable: true }}
  slidesPerView={2}
  spaceBetween={20}

  observer={true}
  observeParents={true}

  >
    {products.map((product, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center pb-[70px]">
          <div className="h-[175px]  2xl:h-[254px] xl:h-[254px] lg:h-[254px] md:h-[254px] sm:h-[175px]  2xl:w-[451px] xl:w-[451px] lg:w-[451px] md:w-[451px] sm:w-[311px] w-[311px] rounded-[9px]  bg-white flex items-center justify-center">
            <div className="flex justify-center gap-[20px]" >
                 <Image
                    src={product.img}
                    width={172}
                    height={172}
                    alt="User Avatar"
                    className="w-[172px] rounded-[90px]  h-[172px]"
                   />
                   <div>
                    <h2 className="text-[20px] dm-sans-bold ">{product.name}</h2>
                    <div className="w-[188px] mt-[12px] mb-[20px] h-[2px] bg-amber-950"></div>
                     <h3 className="w-[184px] m-0 p-0  mb-[20px] leading-tight">{product.otzov}</h3>
                      <Image
                    src={product.zvezd}
                    width={167}
                    height={24}
                    alt="User Avatar"
                    className="w-[167px]  h-[24px]"
                   />
                   </div>
            
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

   <div className="relative flex min-[1155px]:hidden  w-full max-w-5xl mx-auto py-10">
  {/* Кнопка "назад" */}
  
<div className="hidden min-[500px]:flex">
        <div className="custom-next-desktop  text-[rgba(220,36,40,1)] 2xl:text-[60px] xl:text-[60px] lg:text-[30px] text-[30px] top-[160px]  absolute 2xl:left-[-10px] xl:left-[-10px] lg:left-[200px]  md:left-[200px] sm:left-[50px] left-[200px] -translate-y-1/2 z-10 cursor-pointer text-2xl">
    &#10094;
  </div>

  {/* Кнопка "вперед" */}
  <div className="custom-prev-desktop text-[rgba(220,36,40,1)] 2xl:text-[60px] xl:text-[60px] lg:text-[30px] text-[30px] top-[160px] 2xl:left-[-10px] absolute xl:left-[-10px] lg:left-[770px] md:left-[770px] sm:left-[50px] left-[770px]  right-[-10px]  -translate-y-1/2 z-10 cursor-pointer text-2xl">
      &#10095;
  </div>

</div>
  
  <Swiper
   
    modules={[Navigation, Pagination]}
      navigation={{
    nextEl: ".custom-prev-desktop ",
    prevEl: ".custom-next-desktop",
  }}
  pagination={{ clickable: true }}
  slidesPerView={1}
  spaceBetween={20}


  >
    {products.map((product, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center pb-[70px]">
          <div className="h-[175px]  2xl:h-[254px] xl:h-[254px] lg:h-[254px] md:h-[254px] sm:h-[175px]  2xl:w-[451px] xl:w-[451px] lg:w-[451px] md:w-[451px] sm:w-[311px] w-[311px] rounded-[9px]  bg-white flex items-center justify-center">
            <div className="flex justify-center gap-[20px]" >
                 <Image
                    src={product.img}
                    width={172}
                    height={172}
                    alt="User Avatar"
                    className="xl:w-[172px] lg:ml-[0px] md:ml-[0px] sm:ml-[45px] ml-[45px]  md:w-[172px] sm:w-[123px] w-[123px] rounded-[90px] xl:h-[172px] md:h-[172px] sm:h-[123px]   h-[123px]"
                   />
                   <div>
                    <h2 className=" xl:text-[20px] md:text-[20px] sm:text-[14px] text-[14px] dm-sans-bold ">{product.name}</h2>
                    <div className="xl:w-[188px] md:w-[188px] sm:w-[130px] w-[130px]  lg:mt-[12px] md:mt-[12px] sm:mt-[10px] mt-[10px] lg:mb-[20px] md:mb-[20px] sm:mb-[10px]  mb-[10px] h-[2px] bg-amber-950"></div>
                     <h3 className="w-[184px] m-0 p-0  lg:mb-[20px] md:mb-[20px] sm:mb-[10px] mb-[10px] leading-tight">{product.otzov}</h3>
                      <Image
                    src={product.zvezd}
                    width={167}
                    height={24}
                    alt="User Avatar"
                    className=" lg:w-[167px] md:w-[167px] sm:w-[131px] w-[131px]  h-[24px]"
                   />
                   </div>
            
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

               
               </div>



    
               
            </div>

        </div>

    )
}
    