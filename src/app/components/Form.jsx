
"use client";

import CountUp from "react-countup";
import Image from "next/image";




export default function Form() {
    return(
        <div className=" w-[100%] h-[100%] md-[100px] bg-[rgba(228,208,180,1)]" >


        

    <div className="flex justify-center min-[1165px]:hidden  ">
    <div className="bg-[rgba(255,255,255,1)] flex justify-center w-[74%] h-[500px]  ">


  <div className="text-center dm-sans-bold  "> 
         
    <div className="pb-[50px] pt-[49px]">
        <CountUp className='text-[40px]' end={3000} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[16px]  text-[rgba(220,36,40,1)] ' >Clientes satisfeitas</h2>
    </div>

    <div className="pb-[50px]">
          <CountUp className='text-[40px]' end={15} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[16px] text-[rgba(220,36,40,1)] ' >Anos de experiência</h2>
    </div>

      <div>
        <CountUp className='text-[40px]' end={10} duration={2.5} separator=" " prefix="+ " />
    <h2 className='text-[16px] text-[rgba(220,36,40,1)]' >Filiais</h2>
    </div>
  </div>


    </div>
    </div>


        <h2 className="text-[clamp(24px,7vw,36px)] text-[rgba(220,36,40,1)] dm-sans-bold  min-[1165px]:pt-[190px] max-[1165px]:pt-[50px]  text-center ">Tratamentos estéticos</h2>


        <div className="flex justify-center min-[600px]:pt-[60px] max-[600px]:pt-[35px] min-[600px]:pb-[100px] max-[600px]:pb-[55px]   min-[600px]:gap-[60px] max-[600px]:gap-[12px] flex-wrap ">
        

            <div className=" flex   min-[600px]:gap-[60px] max-[600px]:gap-[12px]  justify-center flex-wrap">
                 <div >
                <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px]  bg-[var(--c1,rgba(255,255,255,1))]">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon.png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] pt-[29px] dm-sans-bold">Limpeza de pele</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[30px] xl:pr-[30px] lg:pr-[26px] md:pr-[38px] pr-[38px] 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]">Remoção de cravos e </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> impurezas da pele, proporcionando a <br/> renovação celular e a redução dos poros.</h5>
                            
                        </div>

               
                 </div>
                </div>
            </div>
                 <div >


                         <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px] bg-[var(--c1,rgba(255,255,255,1))]">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon (1).png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] text-[rgba(220,36,40,1)] pt-[29px] dm-sans-bold">Peeling</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[25px] xl:pr-[25px] lg:pr-[21px] md:pr-[34px] pr-[34px] 2xl:text-[20px] xl:text-[20px]   lg:text-[17px] md:text-[15px] text-[15px]">Promove a renovação </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> celular, de forma progressiva,  <br/> estimulando a regeneração natural dos tecidos. </h5>
                            
                        </div>

               
                 </div>
                </div>



            </div>
                 <div >



                 <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px] bg-[var(--c1,rgba(255,255,255,1))]">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon (2).png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] pt-[29px] dm-sans-bold">Radiesse</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[63px] xl:pr-[63px] lg:pr-[54px] md:pr-[63px] pr-[63px] 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]">Proporciona uma </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> correção imediata de efeitos comuns  <br/> do envelhecimento, como flacidez e perda de sustentação da pele. </h5>
                            
                        </div>

               
                 </div>
                </div>




            </div>

         

            </div>
            <div className=" flex min-[600px]:gap-[60px] max-[600px]:gap-[12px]  justify-center flex-wrap">

                             <div >
                <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px] bg-[var(--c1,rgba(255,255,255,1))]">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon (3).png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] text-[rgba(220,36,40,1)]  pt-[29px] dm-sans-bold">Lifting não invasivo</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[73px] xl:pr-[73px] lg:pr-[60px] md:pr-[70px] pr-[71px] 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]">Tratamento que </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> devolve o tônus à pele e amenizar  <br/> sinais de envelhecimento sem demandar internação hospitalar.</h5>
                            
                        </div>

               
                 </div>
                </div>
            </div>
                
      
                 <div >




            <div >
                <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px] bg-[var(--c1,rgba(255,255,255,1))] ">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon (4).png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] pt-[29px] dm-sans-bold">Drenagem linfática</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[10px] xl:pr-[10px] lg:pr-[10px] md:pr-[24px] pr-[25px] 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]">Ajuda na eliminação de </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> toxinas, melhora o sistema  <br/>  imunológico, melhora a aparência de celulite.</h5>
                            
                        </div>
                 </div>
                </div>
            </div>


        
            </div>

  <div >
                <div className="2xl:w-[460px] xl:w-[400px] lg:w-[330px] md:w-[300px] sm:w-[350px] min-[500px]:w-[350px] max-[500px]:w-[316px]  2xl:h-[260px] xl:h-[260px]  lg:h-[260px] md:h-[230px] sm:h-[216px] min-[500px]:h-[216px] max-[500px]:h-[180px]  rounded-[9px] bg-[var(--c1,rgba(255,255,255,1))]">
                 <div className="2xl:pl-[40px] xl:pl-[40px] lg:pl-[30px] pl-[30px] overflow-visible relative">
                     <div className=" flex min-[600px]:pt-[35px] max-[600px]:pt-[18px] 2xl:gap-[30px] xl:gap-[30px] lg:gap-[12px] gap-[12px]">
                    
                    <Image
                        src="/img/icon (5).png"
                        width={100}
                        height={100}
                        alt="User Avatar"
                        className=" 2xl:w-[100px] xl:w-[100px] w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] 2xl:h-[100px] xl:h-[100px]"
                       /> 
                       <h2 className="2xl:text-[23px] xl:text-[23px] lg:text-[18px] text-[18px] pt-[29px] text-[rgba(220,36,40,1)]  dm-sans-bold">Microagulhamento</h2>
                      
                  </div>
                    <div className="m-0 p-0   absolute  left-[35px] 2xl:w-[350px] xl:w-[350px] lg:w-[280px] w-[264px] 2xl:top-[120px]  xl:top-[110px] lg:top-[110px] md:top-[100px]  sm:top-[100px] top-[80px] ">
                            <h4 className="  text-right  leading-tight 2xl:pr-[15px] xl:pr-[15px] lg:pr-[12px] md:pr-[27px] pr-[27px]   2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]">Indicado para remover </h4>
                            <h5 className=" text-left leading-tight 2xl:text-[20px] xl:text-[20px]  lg:text-[17px] md:text-[15px] text-[15px]"> cicatrizes de acne, amenizar estrias,   <br/> eliminar rugas, diminuir a flacidez da pele e prevenir a queda de cabelo . </h5>
                            
                        </div>
                 </div>
                </div>
            </div>






           

            </div>

        
    
       
        </div>


        



            

            
        </div>
    )
}