import profilePicture from '../assets/profile-picture-8.png';

const SplashPage = () => {
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
            bg-red-900"
      >
        <div>
          <h1 className="text-9xl font-mono m-0 leading-[0.9] -translate-x-2">
            
          </h1>
        </div>
        <img 
          src={profilePicture}
          alt="Example Image" 
          className="w-auto h-screen"
        />

      </div>
    </>
  );
};

export default SplashPage;
