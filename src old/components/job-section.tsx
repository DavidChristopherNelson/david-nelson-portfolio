import GitHubActivity from "./github-activity";

interface JobSectionProps {
  backgroundImage?: string;
  title: string;
  subTitle: string;
  info: string;
  moreInfo?: string;
  buttonText?: string[];
}

export const JobSection = () => 
{
  return (
    <>
      <div className="w-full border-t-4 border-teal-500">
        <div className="border-l-4 border-b-4 border-teal-500 text-lg text-white p-2 text-left w-min whitespace-nowrap">
          GitHub Activity
        </div>
        <GitHubActivity />
      </div>
      <div className="w-full border-t-4 border-teal-500">
        <div className="ml-auto border-r-4 border-b-4 border-teal-500 text-lg text-white p-2 text-right w-min whitespace-nowrap">
          Poodle Docs
        </div>
        <GitHubActivity />
      </div>
    </>
  )

/*
export const JobSection = ({ 
  backgroundImage,
  title,
  subTitle,
  info,
  moreInfo,
  buttonText,
 }: JobSectionProps ) => {
  return (
    <div>
      Background image
      <div>
        <h3>Poodle Docs</h3>
      </div>
      <div>
        <div>
          <div>
            <div>The dog themed Google Docs clone you never knew you needed.</div>
            <div>Tech specs overview.</div>
            <div>
              <button>
                Visit Site
              </button>
              <button>
                Visit Repository
              </button>
            </div>
          </div>
        </div>
        <div>
          Video
        </div>
      </div>
      <div>
        More info icon
      </div>
    </div>
  );
*/
};
