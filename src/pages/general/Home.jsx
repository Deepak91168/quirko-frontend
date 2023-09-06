import landingSrc from "../../assets/images/landing.png";
import Button from "../../components/ui/Button";

export const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="max-w-screen-xl flex my-4 mx-4 md:mx-auto border-[0.5px] rounded-md shadow-md ">
        <div className="w-[50%] flex flex-col">
          <div className="my-auto mx-auto p-4 pl-8 pb-0">
            <div className="text-[24px]">
              Welcome back
              <span className="font-extrabold text-blue-600"> Username</span>
            </div>
            <p className="text-3xl font-bold">A Daily Oasis of Insights and Inspiration</p>
            <div>
              <Button className="text-sm mt-4" onClick={handleClick}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-4">
          <img src={landingSrc} className="h-96" alt="landing Page" />
        </div>
      </div>
    </>
  );
};
