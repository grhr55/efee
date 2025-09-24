
"use client";

import Image from "next/image";
export default function Form() {
    return(

         <section  id="tal">

        <div className="w-[100%] h-[100%] min-[600px]:pt-[80px]  bg-[var(--c2,rgba(252,248,245,1))] max-[600px]:pt-[41px] min-[600px]:pb-[80px]  max-[600px]:pb-[54px]  ">
            <div className="flex justify-center flex-wrap 2xl:gap-[180px] xl:gap-[100px] lg:gap-[60px]">
                <div className=" hidden min-[1041px]:flex ">
                      <Image
                   src="/img/picture (2).png"
                   width={600}
                   height={800}
                   alt="User Avatar"
                   className=" 2xl:w-[600px] xl:w-[500px] 2xl:h-[800px] xl:h-[700px] w-[400px] h-[600px] "
                      /> 
                </div>

              <div>

                <div className="">
                <div>
                        <h2 className="text-[clamp(20px,5vw,45px)] min-[600px]:pb-[38px]  max-[600px]:pb-[20px]  min-[1041px]:pt-[38px]  max-[1041px]:pt-[0px]     text-[rgba(220,36,40,1)] ">Tratamentos dermatológicos</h2>
            <div className="hidden min-[600px]:flex">
                        <h3 className=" m-0 p-0 leading-tight  pb-[20px] 2xl:text-[25px] xl:text-[20px] text-left text-[clamp(12px,4vw,20px)]">Há alguns anos, quando se falava em tecnologia, ela era associada <br/> apenas à engenharia e à ciência. Hoje a situação é diferente: <br/>  nossas clientes já desfrutam de diversos tratamentos modernos,<br/>  com segurança e rápida recuperação.</h3>
            </div>
            <div className="flex min-[600px]:hidden">
                        <h3 className=" m-0 p-0 leading-tight  pb-[20px] 2xl:text-[25px] xl:text-[20px] text-left text-[clamp(15px,3vw,20px)]">Há alguns anos, quando se falava em tecnologia, <br/> ela era associada apenas à engenharia e à <br/>ciência. Hoje a situação é diferente:   nossas <br/> clientes já desfrutam de diversos tratamentos<br/> modernos,  com segurança e rápida<br/> recuperação.</h3>
            </div>
            
               <div className="text-[clamp(15px,4vw,22px)] pb-[20px]">
                     <ul className="list-disc pl-5">
                    <li>Ultraformer III</li>
                    </ul>
                     <ul className="list-disc pl-5">
                    <li>Laser de CO2</li>
                    </ul>
                     <ul className="list-disc pl-5">
                    <li>Fotona 4D</li>
                    </ul>
                    <ul className="list-disc pl-5">
                    <li>Reveal Imager</li>
                    </ul>
               </div>
                    <div className="hidden min-[600px]:flex">
                         <h3 className="2xl:text-[25px] xl:text-[20px] text-[clamp(12px,4vw,20px)] pb-[50px] m-0 p-0 leading-tight ">Nossa clínica conta com softwares, sistemas e câmeras de alta <br/>resolução que nos ajudam a diagnosticar, mapear e documentar <br/>doenças da pele, cabelos e unhas, permitindo um diagnóstico e<br/> tratamento mais preciso.</h3>
                    </div>

                    <div className="flex min-[600px]:hidden">
                         <h3 className="2xl:text-[25px] xl:text-[20px] text-[clamp(12px,4vw,20px)] pb-[50px] m-0 p-0 leading-tight ">Nossa clínica conta com softwares, sistemas e <br/>câmeras de alta resolução que nos ajudam a <br/> diagnosticar, mapear e documentar doenças da <br/> pele, cabelos e unhas, permitindo um <br/> diagnóstico e tratamento mais preciso.</h3>
                    </div>
                     
                     
                     <a onClick={() => {
            const section = document.getElementById("contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}   className="w-[263px] cursor-pointer text-center text-[clamp(16px,4vw,20px)]  rounded-[5px] bg-[var(--c8,rgba(220,36,40,1))] text-white p-4    h-[58px] font-bold dm-sans-bold">
                     Agendar Consulta
                     </a>
                </div>

                </div>

              </div>



            </div>
        </div>
</section>
    )
}
    