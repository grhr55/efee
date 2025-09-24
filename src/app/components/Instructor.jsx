

"use client";

import { useState } from "react";
import Image from "next/image";
export default function Instructor() {

   
   
     const [factions ,setfactions] =useState(Array(5).fill(false))


     const Clickfacti = (index) => {
        setfactions(prev => prev.map((val, i) => (i === index ? !val :val)))
     }

  
  

    return(
        <div className="flex justify-center 2xl:pt-[80px] bg-[var(--c1,rgba(255,255,255,1))] xl:pt-[80px] lg:pt-[80px] md:pt-[80px] sm:pt-[0px] pt-[0px] flex-wrap 2xl:gap-[180px] xl:gap-[140px] lg:gap-[112px] md:gap-[12px] pb-[80px] gap-[0px] h-[100%]">
             <div className="pt-[30px] min-[500px]:px-[0px] max-[500px]:px-[20px]">
              <div >
                 <div>
                 <button onClick={() =>Clickfacti(0)}>


                    <div className="2xl:w-[630px]  mb-[30px] xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%] box-border border  border-[rgba(178,178,178,1)] bg-[rgba(255,255,255,1)] h-[100%]">
                          
                     {factions[0] ?
                      <div className="flex  justify-between pt-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[11px] ">Como se preparar para a consulta</h2>
                                <Image
                                    src="/img/arrow__1_-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>: 
                     <div>

                    <div className="flex justify-between pt-[20px] pb-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold pr-[11px] ">Como se preparar para a consulta</h2>
                                <Image
                                    src="/img/arrow-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>
                        
                        </div>}
                         {factions[0] && (<div className="px-[30px] pt-[20px] pb-[12px] ">
                        <h1 className="text-left text-[clamp(16px,4vw,18px)] m-0 p-0 leading-tight  dm-sans-regular">Anote todas as suas dúvidas caso esqueça na hora da consulta.<br/> Deixe as unhas livres de esmaltes e o rosto limpo, sem<br/> maquiagem para não interferir na análise. </h1>
                    </div>)}
                        </div>

                    
                </button>
            
               </div>


                <div>
                 <button onClick={() =>Clickfacti(1)}>


                    <div className="2xl:w-[630px] mb-[30px] xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%] box-border border  border-[rgba(178,178,178,1)] bg-[rgba(255,255,255,1)] h-[100%]">
                          
                     {factions[1] ?
                      <div className="flex  justify-between pt-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold ">Com que frequência devo ir ao dermatologista?</h2>
                                <Image
                                    src="/img/arrow__1_-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>: 
                     <div>

                    <div className="flex justify-between pt-[30px] pb-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold">Com que frequência devo ir ao dermatologista?</h2>
                                <Image
                                    src="/img/arrow-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>
                        
                        </div>}
                         {factions[1] && (<div className="px-[30px] pt-[20px] pb-[12px] ">
                        <h1 className="text-left text-[clamp(16px,4vw,18px)] m-0 p-0 leading-tight  dm-sans-regular">Em geral, é recomendado ir ao dermatologista uma vez por ano, ou mais se houver histórico de problemas de pele.</h1>
                    </div>)}
                        </div>
                    
                </button>

                
                
               </div>
                <div>
                 <button onClick={() =>Clickfacti(2)}>


                    <div className="2xl:w-[630px] mb-[30px] xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%] box-border border  border-[rgba(178,178,178,1)] bg-[rgba(255,255,255,1)] h-[100%]">
                          
                     {factions[2] ?
                      <div className="flex  justify-between pt-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold ">Preciso de encaminhamento para consulta</h2>
                                <Image
                                    src="/img/arrow__1_-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>: 
                     <div>

                    <div className="flex justify-between pt-[20px] pb-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold">Preciso de encaminhamento para consulta</h2>
                                <Image
                                    src="/img/arrow-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>
                        
                        </div>}
                         {factions[2] && (<div className="px-[30px] pt-[20px] pb-[12px] ">
                        <h1 className="text-left text-[clamp(16px,4vw,18px)] m-0 p-0 leading-tight  dm-sans-regular">Na maioria dos casos, não é necessário encaminhamento; você pode marcar a consulta diretamente com o dermatologista. </h1>
                    </div>)}
                        </div>
                    
                </button>

                
                
               </div>
                <div>
                 <button onClick={() =>Clickfacti(3)}>


                    <div className="2xl:w-[630px] mb-[30px] xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%] box-border border  border-[rgba(178,178,178,1)] bg-[rgba(255,255,255,1)] h-[100%]">
                          
                     {factions[3] ?
                      <div className="flex  justify-between pt-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold ">O que um dermatologista faz em uma consulta?</h2>
                                <Image
                                    src="/img/arrow__1_-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>: 
                     <div>

                    <div className="flex justify-between pt-[20px] pb-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] text-left m-0 p-0 leading-tight  dm-sans-bold">O que um dermatologista faz em uma consulta?</h2>
                                <Image
                                    src="/img/arrow-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>
                        
                        </div>}
                         {factions[3] && (<div className="px-[30px] pt-[20px] pb-[12px] ">
                        <h1 className="text-left text-[clamp(16px,4vw,18px)] m-0 p-0 leading-tight  dm-sans-regular">O dermatologista avalia a pele, unhas e cabelo, identifica problemas e orienta tratamentos ou cuidados preventivos. </h1>
                    </div>)}
                        </div>
                    
                </button>

                
                
               </div>
                <div>
                 <button onClick={() =>Clickfacti(4)}>


                    <div className="2xl:w-[630px] mb-[30px] xl:w-[530px] lg:w-[530px] md:w-[530px] sm:w-[530px] w-[100%] box-border border  border-[rgba(178,178,178,1)] bg-[rgba(255,255,255,1)] h-[100%]">
                          
                     {factions[4] ?
                      <div className="flex  justify-between pt-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] m-0 p-0 leading-tight  text-left dm-sans-bold ">O que devo esperar de uma análise de pele?</h2>
                                <Image
                                    src="/img/arrow__1_-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>: 
                     <div>

                    <div className="flex justify-between pt-[20px] pb-[20px] px-[30px]">
                                <h2 className="text-[clamp(16px,4vw,20px)] m-0 p-0 leading-tight  text-left dm-sans-bold">O que devo esperar de uma análise de pele?</h2>
                                <Image
                                    src="/img/arrow-removebg-preview.png"
                                    width={40}
                                    height={30}
                                    alt="User Avatar"
                                    className="w-[40px]  h-[30px]"
                                   />
                                

                            </div>
                        
                        </div>}
                         {factions[4] && (<div className="px-[30px] pt-[20px] pb-[12px] ">
                        <h1 className="text-left text-[clamp(16px,4vw,18px)] m-0 p-0 leading-tight  dm-sans-regular">O dermatologista examina sua pele atentamente, observa manchas, sinais e textura, e indica cuidados ou tratamentos necessários.
 </h1>
                    </div>)}
                        </div>
                    
                </button>

                
                
               </div>
              </div>

                
            </div>
            <div className="hidden min-[1042px]:flex">
                 <Image
                                    src="/img/img (2).png"
                                    width={700}
                                    height={600}
                                    alt="User Avatar"
                                    className="2xl:w-[700px] xl:w-[500px] 2xl:h-[600px] xl:h-[700px] w-[400px] h-[600px]"
                                   />
            </div>
        </div>

    )
}
    