import { useEffect } from "react";
import Career from "./components/Career";
import Overview from "./components/Overview";
import GitHubActivityCalendar from "./components/GitHubActivityCalendar";
import SplashPage from "./components/SplashPage";
import TechStackBarChart from "./components/TechStackBarChart";
import { TypographyType } from "./components/Overview";
import Heading from "./components/Heading";
import ProjectLeft from "./components/ProjectLeft";
import ProjectRight from "./components/ProjectRight";
import { useIsMobileScreenStore } from './store/is_mobile_screen_store';

import googleDocsClone from "./assets/google-docs-clone.png";
import netflixClone from "./assets/netflix-clone.png";
import scraper from "./assets/scraper.png";
import dubber from "./assets/dubber.png";
import deconetwork from "./assets/deconetwork.png";
import uq from "./assets/uq.png";
import launchSchool from "./assets/launch-school.png";
import nuclearBlast from "./assets/nuclear-blast.jpg";
import homecube from "./assets/homecube.png";
import MobileSplashPage from "./components/MobileSplashPage";
import MobileProject from "./components/MobileProject";

const App = () => {
  const { isMobileScreen, setIsMobileScreen } = useIsMobileScreenStore();
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);

  const techStackList = [
    { name: "React", frequency: 4 },
    { name: "TailwindCSS", frequency: 3 },
    { name: "Typescript", frequency: 3 },
    { name: "NextJS", frequency: 2 },
    { name: "Python", frequency: 2 },
    { name: "Ruby", frequency: 2 },
    { name: "Vercel", frequency: 2 },
    { name: "AWS", frequency: 2 },
    { name: "Kotlin", frequency: 1 },
    { name: "Javascript", frequency: 1 },
    { name: "MongoDB", frequency: 1 },
    { name: "PostgreSQL", frequency: 1 },
    { name: "Rails", frequency: 1 },
    { name: "Prisma", frequency: 1 },
    { name: "Liveblocks", frequency: 1 },
    { name: "Shadcn", frequency: 1 },
    { name: "S3", frequency: 1 },
    { name: "Convex", frequency: 1 },
    { name: "Clerk", frequency: 1 },
    { name: "TipTap", frequency: 1 },
    { name: "NextAuth", frequency: 1 },
    { name: "Applescript", frequency: 1 }
  ];

  const googleProjectParams = {
    heading: "Google Docs Clone",
    tags: ["React", "Tailwind", "TS", "Next.js", "Vercel", "Convex"],
    description: "A Google Docs clone complete with a user and organization management system, fully featured text editor and real-time multi-user collaboration.",
    buttons: [
      {
        href: "https://google-docs-clone-lac.vercel.app/",
        text: "Visit Site"
      },
      {
        href: "https://github.com/DavidChristopherNelson/google-doc-clone",
        text: "Visit Repo"
      }
    ],
    imageInfo: {
      src: googleDocsClone,
      alt: "Google Docs screenshot"
    }
  };

  const openflixProjectParams = {
    heading: "Openflix",
    tags: ["React", "Tailwind", "TS", "Next.js", "Vercel"],
    description: "The Netflix clone full of amazing open-source video content!",
    buttons: [
      {
        href: "https://github.com/DavidChristopherNelson/netflix-clone-2",
        text: "Visit Repo"
      }
    ],
    imageInfo: {
      src: netflixClone,
      alt: "Openflix screenshot"
    }
  };
  
  const scraperProjectParams = {
    heading: "YC Job Board Scraper",
    tags: ["Python"],
    description: "Identified the most popular web technologies used by YC companies.",
    buttons: [
      {
        href: "https://medium.com/@david.nelson1_80288/in-demand-the-skills-yc-companies-want-in-2024-0e0c809bd8fa",
        text: "Visit Report"
      },
      {
        href: "https://github.com/DavidChristopherNelson/tech-stack-scraper-v2",
        text: "Visit Repo"
      }
    ],
    imageInfo: {
      src: scraper,
      alt: "Scraper Blog screenshot"
    }
  };
  
  const dubberProjectParams = {
    heading: "Dubber: Full Stack Developer",
    tags: ["React", "PostgreSQL", "Tailwind", "Ruby", "Rails"],
    description:
      "I worked at Dubber for 1 year during which time 'Notes by Dubber' was launched into the app store. I was personally responsible for removing half the clicks required for customers to add the product to a meeting.",
    buttons: [
      {
        href: "https://www.dubber.net/",
        text: "Visit Dubber"
      }
    ],
    imageInfo: {
      src: dubber,
      alt: "Dubber screenshot"
    }
  };
  
  const decoNetworkProjectParams = {
    heading: "DecoNetwork: Junior Full Stack Developer",
    description:
      "I worked at DecoNetwork for one year, during which I developed and performed load testing on ErrorMaster, an error management tool.",
    buttons: [
      {
        href: "https://github.com/DavidChristopherNelson/error_master_v3",
        text: "Visit Repo"
      },
      {
        href: "https://www.deconetwork.com/",
        text: "Visit DecoNetwork"
      }
    ],
    imageInfo: {
      src: deconetwork,
      alt: "DecoNetwork screenshot"
    }
  };
  
  const uqProjectParams = {
    heading: "Chemical Engineering and Physics Degrees",
    description:
      "I graduated with Class 2A honors and a GPA of 5.5/7 from the University of Queensland (40th world ranking).",
    buttons: [
      {
        href: "https://www.dropbox.com/scl/fi/y0z6d3l49tjjtlt913wjz/Official_Transcript_s4266377.pdf?rlkey=jcz5a5f46w7j0lyozwgwtsget&dl=0",
        text: "View Transcript"
      }
    ],
    imageInfo: {
      src: uq,
      alt: "UQ photo"
    }
  };
  
  const launchProjectParams = {
    heading: "Launch School Programming Bootcamp",
    description:
      "I partially completed the Launch School mastery-based programming bootcamp achieving an average grade of A+. Launch School has an average graduate salary of $116K/year.",
    buttons: [
      {
        href: "https://launchschool.com/",
        text: "Visit Launch School"
      },
      {
        href: "https://www.dropbox.com/scl/fi/o5pto2hb0df5ceseb57eg/Launch-School-Transcript.pdf?rlkey=n9eep0lu17qm4zhf3opa3neel&dl=0",
        text: "View Transcript"
      }
    ],
    imageInfo: {
      src: launchSchool,
      alt: "Launch School screenshot"
    }
  };
  
  const researchProjectParams = {
    heading: "Research Paper",
    tags: ["Python", "Monte Carlo", "Data Analysis"],
    description:
      "As a paid research assistant at the University of Canterbury, I published a mechanical engineering paper on how to ensure everyone is fed during a nuclear winter.",
    buttons: [
      {
        href: "https://www.mdpi.com/2673-8783/4/2/33",
        text: "View Paper"
      },
      { 
        href: "https://github.com/DavidChristopherNelson/wood_gasification_paper",
        text: "View Repository"
      }
    ],
    imageInfo: {
      src: nuclearBlast,
      alt: "Nuclear blast graphic"
    }
  };

  const homecubeProjectParams = {
    heading: "Homecube",
    description:
      "Developing the world's first council-approved house that can be constructed by anyone without any tools.",
    buttons: [
      {
        href: "https://www.dropbox.com/scl/fi/mq5udjprm9i8qxlbculfs/Homecube-Founder-Video.mov?rlkey=gv6eodlcycpd1efm91xoipz2w&dl=0",
        text: "View Video"
      }
    ],
    imageInfo: {
      src: homecube,
      alt: "Homecube rendering"
    }
  };  
  
  return (
    <div
    >
      { isMobileScreen ? <MobileSplashPage /> : <SplashPage /> }
      <Career>
        <Overview 
          textInfo={
            [
              {type: TypographyType.Big, text: "7"}, 
              {type: TypographyType.Double, text: "SOFTWARE PROJECTS"}, 
              {type: TypographyType.Small, text: "over"},
              {type: TypographyType.Big, text: "2"},
              {type: TypographyType.Double, text: "YEARS EXPERIENCE"},
              {type: TypographyType.Small, text: "at"},
              {type: TypographyType.Big, text: "2"},
              {type: TypographyType.Double, text: "INTERNATIONAL COMPANIES"}
            ]
          }
          backgroundText="SOFTWAREDEVELOPER.SOFTWAREDEVELOPER.SOFTWAREDEVELOPER"
        />
        { !isMobileScreen && <Heading text={"Skills"} /> }
        { !isMobileScreen && <TechStackBarChart techStackList={techStackList} /> }
        { !isMobileScreen && <GitHubActivityCalendar /> }
        <Heading text={"Projects"} />
        { isMobileScreen ? 
          <MobileProject {...googleProjectParams} /> : 
          <ProjectLeft {...googleProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...openflixProjectParams} /> : 
          <ProjectRight {...openflixProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...scraperProjectParams} /> : 
          <ProjectLeft {...scraperProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...dubberProjectParams} /> : 
          <ProjectRight {...dubberProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...decoNetworkProjectParams} /> : 
          <ProjectLeft {...decoNetworkProjectParams} />
        }
      </Career>

      <Career>
        <Overview 
          textInfo={
            [
              {type: TypographyType.Big, text: "2"}, 
              {type: TypographyType.Double, text: "STEM DEGREES"}, 
              {type: TypographyType.Small, text: "and"},
              {type: TypographyType.Big, text: "1"},
              {type: TypographyType.Double, text: "PUBLISHED PAPER"},
              {type: TypographyType.Small, text: "and"},
              {type: TypographyType.Big, text: "1"},
              {type: TypographyType.Double, text: "PROGRAMMING BOOTCAMP"}
            ]
          }
          backgroundText="EDUCATION.EDUCATION.EDUCATION"
        />

        { isMobileScreen ? 
          <MobileProject {...uqProjectParams} /> : 
          <ProjectRight {...uqProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...launchProjectParams} /> : 
          <ProjectLeft {...launchProjectParams} />
        }
        { isMobileScreen ? 
          <MobileProject {...researchProjectParams} /> : 
          <ProjectRight {...researchProjectParams} />
        }
      </Career>

      <Career>
        <Overview 
          textInfo={
            [
              {type: TypographyType.Big, text: "$100K"}, 
              {type: TypographyType.Double, text: "MONEY RAISED"}, 
              {type: TypographyType.Small, text: "through"},
              {type: TypographyType.Big, text: "2"},
              {type: TypographyType.Double, text: "ACCELERATOR PROGRAMS"},
              {type: TypographyType.Small, text: "creating"},
              {type: TypographyType.Big, text: "3"},
              {type: TypographyType.Double, text: "REVENUEGENERATING BUSINESSES"}
            ]
          }
          backgroundText="ENTREPRENEURSHIP.ENTREPRENEURSHIP.ENTREPRENEURSHIP"
        />
        { isMobileScreen ? 
          <MobileProject {...homecubeProjectParams} /> : 
          <ProjectLeft {...homecubeProjectParams} />
        }
      </Career>
    </div>
  );
};

export default App;
