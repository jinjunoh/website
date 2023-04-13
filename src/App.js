import Vetri from "./images/jinjun2.PNG";
import { Spline } from "@splinetool/react-spline";
import './App.css'; 
import Progressbar from './Progress_bar';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Jupyter Notebooks" },
  ]
  
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Jin Jun Oh</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Experience
              </a>
              <a
                href="#service"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Service & Leadership
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>

              {/* <a
                href="#"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Download
              </a> */}
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Experience
                </a>
                <a
                  href="#service"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Service & Leadership
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                {/* <a
                  href="#"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a> */}
              </motion.div>
            )}
          </div>
        </nav>
        
        
        <div className="relative" id="home">
         
        </div> 
        
        <main className="w-[90%] mt-4=">
          <section className="w-full my-24">
            <div className="flex flex-col text-center w-full h-420 items-center justify-center md:flex-row md:space-x-12">
              <div className="w-275 h-340 relative bg-blue-200 rounded-md">
                <img
                  src={Vetri}
                  alt=""
                  className="w-full h-full absolute -right-4 top-0 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
              <div className = 'md:mt-10'>
                <h1  className='font-bold text-white text-4xl'>
                    Hi, I'm JJ! 
                </h1>
                <p className='font-bold text-white text-1xl md:w-64 '>
                    I'm a <span className = 'bg-gradient-to-r from-gray-500 to-white-500 bg-clip-text	text-transparent'>
                    .....
                    </span>
                </p>
              </div>
            </div>
            
          </section>
          <section >
            <div class="meter" > </div>
          </section>
          <section id="about">
            <div class="invinsible1" ></div>
          </section>
          <section>
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl text-white ">
                  About Me
                  <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="text-white flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                  <div className="md:w-1/2 ">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                      Get to know me!
                    </h1>
                    <p>
                      Hi, my name is JJ and I am a{" "}
                      <span className="font-bold  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text	text-transparent">{"highly ambitious"}</span>,
                      <span className="font-bold  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text	text-transparent">{" self-motivated"}</span>, and
                      <span className="font-bold  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text	text-transparent">{" driven"}</span> student studying Electrical and Computer Engineering at University of Texas at Austin.
                    </p>
                    
                    <br />
                    <p>
                      I have a wide range of hobbies and passions that keep me busy.
                      From reading, playing sports, traveling, to bouldering,
                      I am always seeking new experiences and love to keep myself
                      engaged and learning new things.
                    </p>
                    <br />
                    <p>
                      I believe that you should{" "}
                      <span className="font-bold  bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text	text-transparent">
                        never stop growing
                      </span>{" "}
                      and that&#39;s what I strive to do, I have a passion for
                      technology and a desire to always push the limits of what is
                      possible. I am excited to see where my career takes me and am
                      always open to new opportunities. 
                    </p>
                    {/* <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" /> */}
                  </div>
                  <div className="text-center md:w-1/2 md:text-left">
                    {/* <h1 className="text-2xl font-bold mb-6 ">My Skills</h1> */}
                    <div className=" justify-center z-10 md:justify-start">
                          <Progressbar bgcolor="#99ccff" progress='80'  height={30} skill ='Java' />
                          <Progressbar bgcolor="#99ccff" progress='60'  height={30} skill ='C/C++' />
                          <Progressbar bgcolor="#99ccff" progress='85'  height={30} skill ='Assembly' />
                          <Progressbar bgcolor="#99ccff" progress='50'  height={30} skill ='Java Script'/>
                          <Progressbar bgcolor="#99ccff" progress='55'  height={30} skill ='CSS'/>
                          <Progressbar bgcolor="#99ccff" progress='70'  height={30} skill ='HTML'/>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section id="experience">
            <div class="invinsible" ></div>
          </section>

          <section >
            <div class="meter" > </div>
          </section>
          
          <section  className="w-full flex items-center justify-center" >
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title text-lg text-white text-textBase font-medium uppercase">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          

          <section id = 'service'>
                <div class="meter"></div>
                <div class="invinsible"  ></div>
                <div class="invinsible"  ></div>
          </section >
          

          <section
            class='container'
          >
            {Projects && Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-white rounded-md p-1 width-full flex items-center justify-between"
                >
                  <div class='card'>
                    <div className="flex flex-1 items-center justify-between">
                      <p  className="text-lg text-gray-300">
                          <p className="text-lg text-white text-textBase font-medium uppercase">
                          {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                          </p>
                        <span className="text-md text-gray-250">
                          {n.duration}
                        </span>
                        <span className="block text-lg text-gray-100">
                          {n.position}
                        </span>
                        <span className="block text-lg text-gray-250">
                          {n.techs}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  /> */}
                </motion.div>
              ))}
          </section>
          
          <section>
            <div class="invinsible" ></div>
          </section>

          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
