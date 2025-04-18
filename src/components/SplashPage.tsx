import { useRef } from 'react';
import profilePicture from '../assets/profile-picture.png';
import FadingBackground from './FadingBackground';

const SplashPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return(
    <>
      <div 
        className="
            w-screen 
            h-screen 
            relative
            flex 
            flex-row
            items-center
            justify-between
            bg-black"
      >
        <div
          className="
            relative
            w-full
            h-full
            flex
            items-center
          "
        >
          <div
            className="
              p-20
              relative
              z-10
            "
          >
            <h1 
              className="
                text-[12rem] 
                font-mono 
                -translate-x-3
                leading-[0.9]
              "
            >
              David
            </h1>
            <h1 
              className="
                text-[12rem] 
                font-mono 
                leading-[0.9]
              "
            >
              Nelson
            </h1>
            <p
              className="text-2xl"
            >
              <br />
              US and Australian Citizen<br />
              <br />

              Previous Software Developer at Dubber and DecoNetwork.<br />
              Degrees in Chemical Engineering and Physics.<br />
              Raised over $100,000 in funding for my startups.<br />
              <br />
              david.nelson1@uqconnect.edu.au<br />
            </p>
          </div>
          {Array(10).fill(0).map((_, i) => (
            <FadingBackground key={i} />
          ))}
        </div>
        <div className="relative">
          <img 
            ref={imgRef}
            src={profilePicture}
            alt="Example Image" 
            className="my-container w-auto h-screen [max-width:none]"
          />
          {Array(10).fill(0).map((_, i) => (          
            <FadingBackground
              key={i}
              className=" "
              style={{
                top: `${Math.floor(0.20 * window.innerHeight)}px`,
                right: `${Math.floor(0.33 * window.innerHeight)}px`,
                width: `${Math.floor(0.2 * window.innerHeight)}px`,
                height: `${Math.floor(0.5 * window.innerHeight)}px`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SplashPage;
