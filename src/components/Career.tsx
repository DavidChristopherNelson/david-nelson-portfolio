interface CareerProps {
  children?: React.ReactNode;
}

const Career = ({children}: CareerProps ) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        my-20
      "
    >
      {children}
    </div>
  );
};

export default Career;
