import React from "react";

const OverlappingDivs: React.FC = () => {
  return (
    <>
      <div className="relative w-screen h-[1000px]">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            -translate-x-[450px]   /* Shift 300px to the left of center */
            w-[400px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pr-24
            z-0
            text-left
          "
        >
          <h1 className="text-3xl font-bold">Poodle Docs</h1>
          <p className="mt-2">
            The dog themed Google Docs clone you never knew you needed.
          </p>
          <div className="mt-8 flex gap-3">
            <a 
              href="https://google-docs-clone-lac.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Site
            </a>          
            <a 
              href="https://github.com/DavidChristopherNelson/google-doc-clone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Repo
            </a>
          </div>
        </div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2
            -translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/google-docs-clone.png"
            alt="Poodle Docs screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>



      <div className="relative w-screen my-32">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            translate-x-[50px]
            w-[400px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pl-24
            z-0
            text-right
          "
        >
          <h1 className="text-3xl font-bold">Openflix</h1>
          <p className="mt-4">
            The Netflix clone full of amazing open source video content.
          </p>
          <a 
            href="https://github.com/DavidChristopherNelson/netflix-clone-2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-black px-4 py-2 mt-8 rounded inline-block"
          >
            Visit Repo
          </a>
        </div>

        <div
          className="
            absolute
            top-1/2
            right-1/2
            -translate-y-1/2
            translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/netflix-clone.png"
            alt="OpenFlix screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>












      <div className="relative w-screen h-[1000px]">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            -translate-x-[450px]   /* Shift 300px to the left of center */
            w-[400px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pr-24
            z-0
            text-left
          "
        >
          <h1 className="text-3xl font-bold">YC Job Board Scraper</h1>
          <p className="mt-2">
            Identified the most popular web technologies used by YC companies. 
          </p>
          <div className="mt-8 flex gap-3">
            <a 
              href="https://medium.com/@david.nelson1_80288/in-demand-the-skills-yc-companies-want-in-2024-0e0c809bd8fa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Blog
            </a>          
            <a 
              href="https://github.com/DavidChristopherNelson/tech-stack-scraper-v2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Repo
            </a>
          </div>
        </div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2
            -translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/scraper.png"
            alt="Scraper Blog screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>



      <div className="relative w-screen my-32">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            translate-x-[50px]
            w-[550px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pl-24
            z-0
            text-right
          "
        >
          <h1 className="text-3xl font-bold">Dubber: Full Stack Developer</h1>
          <p className="mt-4">
            I worked at Dubber for 1 year. <br />
            Launched 'Notes by Dubber' into the app store. <br />
            I was personally responsible for removing half the clicks required for customers to add the product to a meeting.
          </p>
          <a 
            href="https://www.dubber.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-black px-4 py-2 mt-8 rounded inline-block"
          >
            Visit Dubber
          </a>
        </div>

        <div
          className="
            absolute
            top-1/2
            right-1/2
            -translate-y-1/2
            translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/dubber.png"
            alt="Dubber screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>











      <div className="relative w-screen h-[1000px]">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            -translate-x-[600px]   /* Shift 300px to the left of center */
            w-[550px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pr-24
            z-0
            text-left
          "
        >
          <h1 className="text-3xl font-bold">DeckNetwork: Junior Full Stack Developer</h1>
          <p className="mt-2">
            I worked at DecoNetwork for one year. <br />
            Developed ErrorMaster an error management software. <br />
            I conducted load testing to optimize ErrorMaster.
          </p>
          <div className="mt-8 flex gap-3">
            <a 
              href="https://medium.com/@david.nelson1_80288/in-demand-the-skills-yc-companies-want-in-2024-0e0c809bd8fa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Report
            </a>          
            <a 
              href="https://github.com/DavidChristopherNelson/error_master_v3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Repo
            </a>
          </div>
        </div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2
            -translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/deconetwork.png"
            alt="DecoNetwork screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>



      <div className="relative w-screen my-32">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            translate-x-[50px]
            w-[400px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pl-24
            z-0
            text-right
          "
        >
          <h1 className="text-3xl font-bold">The University of Queensland</h1>
          <p className="mt-4">
            GPA: 5.5/7<br />
            Class 2A Honors <br />
            Bachelor of Chemical Engineering <br />
            Bachelor of Physics
          </p>
          <a 
            href="https://www.dropbox.com/scl/fi/y0z6d3l49tjjtlt913wjz/Official_Transcript_s4266377.pdf?rlkey=jcz5a5f46w7j0lyozwgwtsget&dl=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-black px-4 py-2 mt-8 rounded inline-block"
          >
            View Transcript
          </a>
        </div>

        <div
          className="
            absolute
            top-1/2
            right-1/2
            -translate-y-1/2
            translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/uq.png"
            alt="UQ screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>










      <div className="relative w-screen h-[1000px]">
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2       /* Center it vertically */
            -translate-x-[600px]   /* Shift 300px to the left of center */
            w-[550px]
            bg-[#008080]
            text-white
            rounded-lg
            p-6
            pr-24
            z-0
            text-left
          "
        >
          <h1 className="text-3xl font-bold">Launch School</h1>
          <p className="mt-2">
            Launch School is a mastery based programming bootcamp. <br />
            A+ average grade
          </p>
          <div className="mt-8 flex gap-3">
            <a 
              href="https://launchschool.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              Visit Launch School
            </a>          
            <a 
              href="https://www.dropbox.com/scl/fi/o5pto2hb0df5ceseb57eg/Launch-School-Transcript.pdf?rlkey=n9eep0lu17qm4zhf3opa3neel&dl=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
            >
              View Transcript
            </a>
          </div>
        </div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-y-1/2
            -translate-x-[100px]   /* Shift 100px to the right of center */
            rounded-lg
            overflow-hidden
            z-10
          "
        >
          <img
            src="/src/assets/launch-school.png"
            alt="Launch School screenshot"
            className="h-[400px] w-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default OverlappingDivs;
