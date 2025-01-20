import { useState } from "react";
import { MainText } from "../../elements/texts/main-text";
import "./index.css";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  const toggleMenu = () => {
    setMenu(!menu);
    console.log("clicou");

    if (!menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <nav className="px-[2%]">
      <div className=" flex flex-row lg:items-start items-center justify-between mx-auto max-w-[1280px]  gap-16 py-8 ">
        <div className="flex items-start  justify-between lg:w-7/12 w-full">
          <h4 className="font-medium text-sm dark:text-white">
            {" "}
            MADE IN <br></br>RIO DE JANEIRO, BRASIL
          </h4>
          <div className="lg:flex hidden wrapper-line flex-col gap-2">
            <a
              href="mailto:alexandrezenas11@gmail.com"
              className="font-medium text-sm dark:text-white"
            >
              {" "}
              FALE COMIGO <br></br>ALEXANDREZENAS@GMAIL.COM
            </a>
            <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
              <div className="line w-0 h-full bg-black dark:bg-white rounded-3xl "></div>
            </div>
          </div>
          <div
            className="lg:flex hidden wrapper-line flex-col gap-2 hover:cursor-pointer transition-colors "
            onClick={toggleTheme}
          >
            <h4 className="font-medium text-sm dark:text-white">
              {" "}
              <br></br> DARK MODE
            </h4>
            <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
              <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden  justify-end gap-4 w-4/12 ">
          <a
            className="font-medium text-md dark:text-white transition-colors "
            href="#sobre"
          >
            SOBRE
          </a>
          <a
            className="font-medium text-md dark:text-white transition-colors"
            href=""
          >
            EXPERIÊNCIA
          </a>
          <a
            className="font-medium text-md dark:text-white transition-colors"
            href=""
          >
            PROJETOS
          </a>
          <a
            className="font-medium text-md dark:text-white transition-colors"
            href=""
          >
            CONTATO
          </a>
        </div>
        {/* menu mombile */}
        <div className="relative lg:hidden" onClick={toggleMenu}>
          <div
            className={` ${
              menu
                ? "-left-[0]  duration-[.75s] "
                : "-left-[200vw] duration-[1s] delay-500"
            } fixed h-screen w-[100vw] overflow-hidden bg-[rgba(15,15,15,0.4)] top-0`}
            onClick={toggleMenu}
          >
            <div
              className={`${
                menu
                  ? " -left-[0]  duration-[1s] delay-500"
                  : " -left-[200vw] duration-[1s] "
              } absolute h-full w-5/6 dark:bg-[#242126] bg-white  flex flex-col px-8 py-16 pb-32 justify-between`}
            >
              <div className="flex flex-col justify-end items-end">
                <p className="font-medium text-sm dark:text-white">CLOSE</p>
                <div className="w-11 wrapper-line h-[2px] bg-[#969696] rounded-3xl">
                  <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  className="text-2xl dark:text-white transition-colors"
                  href=""
                >
                  SOBRE
                </a>
                <a
                  className="text-2xl dark:text-white transition-colors"
                  href=""
                >
                  EXPERIÊNCIA
                </a>
                <a
                  className="text-2xl dark:text-white transition-colors"
                  href=""
                >
                  PROJETOS
                </a>
                <a
                  className="text-2xl dark:text-white transition-colors"
                  href=""
                >
                  CONTATO
                </a>
              </div>

                <div className="flex flex-col items-end justify-between ">
                    <div className="">
                        <a
                        href="mailto:alexandrezenas11@gmail.com"
                        className="font-medium text-sm dark:text-white text-left"
                        >
                        {" "}
                        ALEXANDREZENAS<wbr></wbr>@GMAIL.COM
                        </a>
                        <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
                            <div className="line w-0 h-full bg-black dark:bg-white rounded-3xl "></div>
                        </div>
                    </div>   
                    <div onClick={toggleTheme}>
                        <h4 className="font-medium text-sm dark:text-white">
                            {" "}
                            <br></br> DARK MODE
                        </h4>
                        <div className="w-full h-[2px] bg-[#969696] rounded-3xl">
                            <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
                        </div>
                    </div>                
              </div>
            </div>
          </div>
          <p className="font-medium text-sm dark:text-white">MENU</p>
          <div className="w-full wrapper-line h-[2px] bg-[#969696] rounded-3xl">
            <div className="line w-[0%] h-full bg-black dark:bg-white rounded-3xl"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
