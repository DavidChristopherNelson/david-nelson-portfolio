interface JobSectionProps {
  backgroundImage?: string;
  title: string;
  subTitle: string;
  info: string;
  moreInfo?: string;
  buttonText?: string[];
}

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
};
