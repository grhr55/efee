"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [meni, setmeni] = useState(false);
  const sectionsIds = ['glav', 'yslug', 'tal', 'contact'];

  // Варианты анимации
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const menuAnim = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="glav">
      <div className="bg-[rgba(247,241,223,1)] min-[1165px]:pb-[140px] max-[1170px]:pb-[0px] w-[100%] h-[100%]">

        <div className="flex min-[600px]:justify-around max-[600px]:justify-between min-[600px]:mx-[0%] max-[600px]:mx-[9%] 2xl:gap-[560px] xl:gap-[550px] lg:gap-[385px] md:max-[1123px]:gap-[0px] gap-[0px] pt-[48px]">
          <div className="flex min-[600px]:hidden">
            <div className="relative">
              <button className="cursor-pointer" onClick={() => setmeni(!meni)}>
                <Image
                  src="/img/menu.png"
                  width={43}
                  height={14}
                  alt="menu"
                  className="w-[43px] mt-[7px] h-[18px]"
                />
              </button>

              {meni && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuAnim}
                  className="bg-amber-600 fixed top-0 left-0 z-50 w-full h-screen flex flex-col"
                >
                  <button
                    onClick={() => setmeni(false)}
                    className="absolute top-5 right-5 text-white text-4xl cursor-pointer hover:rotate-90 transition-transform"
                  >
                    ✕
                  </button>

                  <nav className="flex flex-col items-center justify-center flex-1 gap-10 text-white font-bold">
                    <h1 className="text-3xl sm:text-4xl tracking-widest mb-6">DERMATO</h1>
                    {['Início', 'Serviços', 'Sobre', 'Contato'].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-200 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.getElementById(sectionsIds[index]);
                          if (section) section.scrollIntoView({ behavior: "smooth" });
                          setmeni(false);
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>

                  <div className="pb-10 text-white text-sm text-center opacity-80">
                    © 2025 DERMATO. Todos os direitos reservados.
                  </div>
                </motion.div>
              )}

            </div>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-[clamp(20px,8vw,24px)] dm-sans-bold">DERMATO</h1>
          </motion.div>

          <div className="hidden min-[600px]:flex">
            <nav className="flex flex-wrap items-center0 gap-[48px] dm-sans-bold text-[clamp(20px,8vw,24px)]">
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

        <div className="flex justify-around justify-items-center flex-wrap">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="min-[600px]:mt-[160px] max-[600px]:mt-[56px]">
            <h2 className="text-[clamp(24px,7vw,48px)] m-0 p-0 leading-tight pb-[19px] text-[rgba(220,36,40,1)] dm-sans-bold">
              A sua beleza é única,<br/>o tratamento também
            </h2>
            <h3 className="dm-sans-bold text-[clamp(11px,3vw,20px)] pb-[30px]">
              A padronização de tratamentos estéticos gera resultados <br/> artificiais. Por isso analisamos sua pele e realizamos<br/> apenas procedimentos personalizados para você.
            </h3>

            <a
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-[263px] cursor-pointer text-center text-[clamp(16px,4vw,20px)] rounded-[5px] bg-[var(--c8,rgba(220,36,40,1))] text-white p-4 h-[58px] font-bold dm-sans-bold"
            >
              Agendar Consulta
            </a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Image
              src="/img/img.png"
              width={617}
              height={500}
              alt="User Avatar"
              className="w-[620px] mt-[57px] 2xl:min-[1920px]:h-[500px] 2xl:max-[1900px]:h-[600px] xl:h-[556px] lg:h-[555px] sm:h-[460px] h-[300px]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
