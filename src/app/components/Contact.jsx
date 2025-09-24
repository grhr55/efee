'use Client'
import Image from "next/image";

export default function Contac() {
    return(

        <section  id="contact">

        <div className="bg-[rgba(100,75,44,1)] w-[100%] h-[100%] pb-[30px]">
            <div className="flex  min-[800px]:justify-around  max-[800px]:justify-start    min-[800px]:ml-[0xp]  max-[800px]:ml-[36px]   flex-wrap pt-[80px] ">
                <h2 className="text-[clamp(24px,4vw,32px)] dm-sans-bold text-[rgba(255,255,255,1)] min-[700px]:mb-[0px] max-[700px]:mb-[36px] ">DERMATO</h2>
                <div className="text-[clamp(16px,4vw,20px)] dm-sans-bold text-[rgba(255,255,255,1)]">
                    <h2 className="text-[clamp(20px,4vw,24px)] mb-[32px]" >CONTATO</h2>
                    <h3 className="mb-[12px]">+55 21 9999-9999</h3>
                    <h3>contato@dermato.com.br</h3>
                    <div className="  max-[600px]:w-[300px]   min-[600px]:w-[360px] w-[300px] h-[1px] mb-[12px] mt-[12px] bg-[rgba(255,255,255,1)]"></div>
                    <h2 className="mb-[12px]">Rua São Paulo, 45 - Americana</h2>
                    <h2 className="mb-[12px]">Americana - SP</h2>
                     <div className="max-[600px]:w-[300px]   min-[600px]:w-[360px]  w-[300px] h-[1px] mb-[16px] mt-[12px] bg-[rgba(255,255,255,1)]"></div>
                     <div className="flex gap-[42px] ">
                     <a href="https://www.instagram.com/"> 
                           <Image
                             src="/img/instagram.svg"
                             width={32}
                             height={32}
                             alt="User Avatar"
                             className=" 2xl:w-[32px] xl:w-[32px] w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] 2xl:h-[32px] xl:h-[32px]"
                        /> 
                     </a>
                     <a href="https://www.facebook.com/">
                            <Image
                             src="/img/facebook.svg"
                             width={32}
                             height={32}
                             alt="User Avatar"
                             className=" 2xl:w-[32px] xl:w-[32px] w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] 2xl:h-[32px] xl:h-[32px]"
                        /> 
                     </a>
                      <a href="https://www.youtube.com/">
                           <Image
                             src="/img/youtube.svg"
                             width={32}
                             height={32}
                             alt="User Avatar"
                             className=" 2xl:w-[32px] xl:w-[32px] w-[32px] h-[32px] lg:w-[32px] lg:h-[32px] 2xl:h-[32px] xl:h-[32px]"
                        /> 
                      </a>
                     </div>

                </div>
                <div className="text-[clamp(16px,4vw,20px)] dm-sans-bold text-[rgba(255,255,255,1)]">
                    <h2 className="text-[clamp(20px,4vw,24px)] min-[700px]:mt-[0px] max-[700px]:mt-[46px] mb-[30px]">INFORMAÇÕES</h2>
                    <h3 className="mb-[20px]">Procedimentos</h3>
                    <h3 className="mb-[20px]">Contato</h3>
                    <h3 >Termos e Condições</h3>
                </div>

            </div>
            <h2 className="text-[clamp(16px,4vw,20px)] pl-[11%] dm-sans-bold mt-[76px] text-[rgba(255,255,255,1)]">Dermato Alguns direitos reservados</h2>
        </div>
</section>
    )
}