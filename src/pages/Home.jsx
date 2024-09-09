import React from "react";

// image
import man from "../assets/Frame 20.png";
import sociallogo from "../assets/Frame 42.png";
import skill1 from "../assets/Skills.png";
import skill2 from "../assets/Skills (1).png";
import skill3 from "../assets/Skills (2).png";
import skill4 from "../assets/Skills (3).png";
import skill5 from "../assets/Skills (4).png";
import skill6 from "../assets/Skills (5).png";
import google from "../assets/google.png";
import youtube from "../assets/youtube.png";
import apple from "../assets/apple.png";
import me from "../assets/Group 1000015845.png";
import image1 from "../assets/image 771.png";
import image2 from "../assets/image 770.png";
import image3 from "../assets/image 770 (1).png";
import avatar1 from "../assets/Frame 18.png";
import avatar2 from "../assets/Frame 18 (1).png";
import logo2 from "../assets/logo 2.png";

const Home = () => {
  return (
    <div className="dark:text-[white]">
      <div className="dark:bg-[#34343580] w-[100%] pt-[50px] pb-[50px] flex flex-wrap items-center justify-center gap-[50px]">
        <div className="w-[500px] flex flex-col gap-[20px]">
          <h1 className="flex flex-wrap gap-[10px] text-[48px]">
            <span className="">Hello I’am</span>
            <span className="font-[800]">Evren Shah.</span>
            <span className="font-[800]">Frontend</span>
            <span className="font-[800]">Developer</span>
            <span>Based In</span>
            <span className="font-[800]">India.</span>
          </h1>
          <p>
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          <img className="w-[320px]" src={sociallogo} alt="" />
        </div>

        <img className="w-[750px]" src={man} alt="" />
      </div>

      <div className="dark:bg-[#34343580] w-[100%] pt-[50px] pb-[50px] flex flex-col justify-center items-center gap-[30px] ">
        <h1 className="text-[48px] flex gap-[20px]">
          <span>My</span>
          <span className="font-[800]">Skills</span>
        </h1>
        <div className="w-[80%] flex flex-wrap gap-[20px] items-center justify-center">
          <img src={skill1} alt="" />
          <img src={skill2} alt="" />
          <img src={skill3} alt="" />
          <img src={skill4} alt="" />
          <img src={skill5} alt="" />
          <img src={skill6} alt="" />
          <img src={skill1} alt="" />
          <img src={skill3} alt="" />
          <img src={skill4} alt="" />
          <img src={skill5} alt="" />
        </div>
      </div>

      <div className="dark:bg-[#34343580] bg-[black] text-[white] w-[100%] pt-[50px] pb-[50px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="text-[48px] flex gap-[20px]">
          <span>My</span>
          <span className="font-[800]">Experience</span>
        </h1>
        <div className="w-[80%] flex flex-col gap-[20px]">
          <div className="w-[100%] flex flex-col gap-[20px] pt-[20px] pb-[20px] border-[solid] border-[2px] border-[lightgray]">
            <div className="w-[90%] m-auto flex justify-between items-center">
              <div className="flex justify-center items-center gap-[20px]">
                <img src={google} alt="" />
                <h1 className="sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[white] text-[24px] font-[800]">
                  Lead Software Engineer at Google
                </h1>
              </div>
              <h1 className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white]">
                Nov 2019 - Present
              </h1>
            </div>
            <p className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white] w-[90%] m-auto">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-[20px]">
          <div className="w-[100%] flex flex-col gap-[20px] pt-[20px] pb-[20px] border-[solid] border-[2px] border-[lightgray]">
            <div className="w-[90%] m-auto flex justify-between items-center">
              <div className="flex justify-center items-center gap-[20px]">
                <img src={youtube} alt="" />
                <h1 className="sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[white] text-[24px] font-[800]">
                  Lead Software Engineer at Google
                </h1>
              </div>
              <h1 className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white]">
                Nov 2019 - Present
              </h1>
            </div>
            <p className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white] w-[90%] m-auto">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-[20px]">
          <div className="w-[100%] flex flex-col gap-[20px] pt-[20px] pb-[20px] border-[solid] border-[2px] border-[lightgray]">
            <div className="w-[90%] m-auto flex justify-between items-center">
              <div className="flex justify-center items-center gap-[20px]">
                <img src={apple} alt="" />
                <h1 className="sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[white] text-[24px] font-[800]">
                  Lead Software Engineer at Google
                </h1>
              </div>
              <h1 className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white]">
                Nov 2019 - Present
              </h1>
            </div>
            <p className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[white] w-[90%] m-auto">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#34343580] w-[100%] pt-[50px] pb-[50px] flex flex-col justify-center items-center  gap-[50px]">
        <h1 className="flex flex-wrap gap-[10px] text-[48px]">
          <span className="">About</span>
          <span className="font-[800]">Me</span>
        </h1>

        <div className="w-[70%] m-auto flex flex-wrap gap-[40px]">
          <img className="w-[500px]" src={me} alt="" />
          <div className="w-[500px] flex flex-col gap-[20px]">
            <p className="text-[16px] leading-[24px] text-justify">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.I
              began my journey as a web developer in 2015, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.When I'm not in full-on
              developer mode, you can find me hovering around on twitter or on
              indie hacker, witnessing the journey of early startups or enjoying
              some free time. You can follow me on Twitter where I share
              tech-related bites and build in public, or you can follow me on
              GitHub. Tailwindcss, Supabase and much more.When I'm not in
              full-on developer mode, you can find me hovering around on twitter
              or on indie hacker, witnessing the journey of early startups or
              enjoying some free time. You can follow me on Twitter where I
              share tech-related bites and build in public, or you can follow me
              on GitHub.
            </p>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#34343580] bg-[black] text-[white] w-[100%] pt-[50px] pb-[50px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className=" sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] text-[48px] flex gap-[20px]">
          <span>My</span>
          <span className="font-[800]">Projects</span>
        </h1>

        <div className="w-[80%] m-auto flex flex-wrap justify-center items-center gap-[30px]">
          <div className="w-[90%] flex flex-wrap items-center gap-[30px]">
            <img src={image1} alt="" />
            <div className="w-[450px] flex flex-col gap-[20px] ">
              <h1 className="text-[48px] text-[white] font-[800]">01</h1>
              <p className="sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] text-[32px] text-[white] font-[800]">
                Crypto Screener Application
              </p>
              <p className="dark:text-[white] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[gray]">
                {" "}
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
            </div>
          </div>

          <div className="w-[90%] flex flex-wrap items-center gap-[30px]">
            <div className="w-[450px] flex flex-col gap-[20px] ">
              <h1 className="text-[48px] text-[white] font-[800]">01</h1>
              <p className="sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] text-[32px] text-[white] font-[800]">
                Crypto Screener Application
              </p>
              <p className="dark:text-[white] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[gray]">
                {" "}
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
            </div>
            <img src={image2} alt="" />
          </div>

          <div className="w-[90%] flex flex-wrap items-center gap-[30px]">
            <img src={image3} alt="" />
            <div className="w-[450px] flex flex-col gap-[20px] ">
              <h1 className="text-[48px] text-[white] font-[800]">01</h1>
              <p className="sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] text-[32px] text-[white] font-[800]">
                Crypto Screener Application
              </p>
              <p className="dark:text-[white] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[16px] text-[gray]">
                {" "}
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:text-[white] dark:bg-[#34343580] text-[black] w-[100%] pt-[50px] pb-[50px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className=" sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] text-[48px] flex gap-[20px]">
          <span>My</span>
          <span className="font-[800]">Testimonial</span>
        </h1>

        <div className=" w-[80%] flex flex-wrap justify-center items-center gap-[20px]">
          <div className="w-[370px] p-[20px] rounded-[5px] shadow-lg shadow-slate-500 flex flex-col items-center gap-[20px]">
            <img src={avatar1} alt="" />
            <p className="text-center text-[16px] w-[300px]">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </p>
            <div className="w-[150px] h-[2px] bg-[black]"></div>
            <h1 className="text-[20px] text-[#404040] font-[800]">
              Evren Shah
            </h1>
            <h1 className="text-[20px] text-[#404040] font-[700]">Designer</h1>
          </div>

          <div className="w-[370px] p-[20px] rounded-[5px] bg-[black] text-[white] shadow-lg shadow-slate-500 flex flex-col items-center gap-[20px]">
            <img src={avatar2} alt="" />
            <p className="text-center text-[16px] w-[300px]">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </p>
            <div className="w-[150px] h-[2px] bg-[black]"></div>
            <h1 className="text-[20px] text-[white] font-[800]">Flora sheen</h1>
            <h1 className="text-[20px] text-[white] font-[700]">Designer</h1>
          </div>

          <div className="w-[370px] p-[20px] rounded-[5px] shadow-lg shadow-slate-500 flex flex-col items-center gap-[20px]">
            <img src={avatar1} alt="" />
            <p className="text-center text-[16px] w-[300px]">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </p>
            <div className="w-[150px] h-[2px] bg-[black]"></div>
            <h1 className="text-[20px] text-[#404040] font-[800]">
              Evren Shah
            </h1>
            <h1 className="text-[20px] text-[#404040] font-[700]">Designer</h1>
          </div>
        </div>
      </div>

      <div className="dark:text-[white] dark:bg-[#34343580] text-[black] w-[100%] pt-[50px] pb-[50px] m-auto flex flex-wrap justify-center items-center gap-[30px]">
        <div className="w-[500px] pt-[20px] pb-[20px] flex flex-col gap-[10px]">
          <input
            type="text"
            placeholder="Your name"
            className="w-[100%] h-[56px] pl-[10px] border-[1.8px] border-[solid] border-[black] rounded-[5px] "
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[100%] h-[56px] pl-[10px] border-[1.8px] border-[solid] border-[black] rounded-[5px] "
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Your website"
            className="w-[100%] h-[56px] pl-[10px] border-[1.8px] border-[solid] border-[black] rounded-[5px] "
            name=""
            id=""
          />
          <textarea
            name=""
            placeholder="How can I help?*"
            className="w-[100%] h-[120px] pl-[10px] border-[1.8px] border-[solid] border-[black] rounded-[5px] "
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex gap-[20px] items-center">
            <button className="w-[170px] h-[60px] bg-[black] text-[white] font-[700] rounded-[8px] text-[20px] ">
              Get In Touch
            </button>
            <img src={sociallogo} alt="" />
          </div>
        </div>

        <div className="w-[60%] flex flex-col gap-[20px]">
          <h1 className="sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] text-[48px] font-[800]">
            Let’s talk for <br /> Something special
          </h1>
          <p className="sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] w-[full]">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, <br /> and memorable interactive experiences.
          </p>
          <p className="sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-[700]">
            Youremail@gmail.com
          </p>
          <p className="sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] font-[700]">
            1234567890
          </p>
        </div>
      </div>

      {/* footer */}
      <div className="dark:bg-[#000000d0] bg-[black] text-[white] w-[100%] flex justify-evenly items-center pt-[20px] pb-[20px]">
        <div className="flex gap-[20px] items-center">
          <img src={logo2} alt="" />
          <h1 className="dark:text-[black] text-[20px] text-[white] font-[800]">
            Personal
          </h1>
        </div>

        <h1 className="dark:text-[black] text-[14px] text-[white] font-[800] text-end">@ 2019-2023 Personal <br /> Made In Figma</h1>
      </div>
    </div>
  );
};

export default Home;
