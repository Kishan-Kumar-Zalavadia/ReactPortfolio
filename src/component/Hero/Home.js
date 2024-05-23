import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpeg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
import skill7 from "../pic/skill7.png"
import skill8 from "../pic/skill8.png"
import skill9 from "../pic/skill9.png"
import { Typewriter } from "react-simple-typewriter"
import resume from "../pic/kishanresume-2.pdf"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className="Welcoming">
          <h3>WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I’m <span>Kishan Kumar</span>
          </h1>
          <h2>
            a
            <span>
              <Typewriter words={[" Java Coder.", " Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
        </div>

        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Kishan Kumar</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Java Coder.", " Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            

            <p>I am an enthusiastic engineering fresher who is capable of using technical skills for the betterment of the organization. A bachelor’s degree in Software Engineering has enhanced my software skills and looking forward to work in a competitive environment that enhances overall learning.</p>
            {/* <button className='btn_shadow resume_btn'>Resume</button> */}

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  {/* <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button> */}
                  <a target="_blank" href="https://www.linkedin.com/in/kishan-kumar-zalavadia/">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a target="_blank" href="https://github.com/Kishan-Kumar-Zalavadia">
                    <button className='btn_shadow'>
                      <i class='fab fa-github'></i>
                    </button>
                  </a>

                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill4} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill5} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill6} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill7} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill8} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill9} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
