import landingSrc from "../../assets/images/landing.jpg";
import Button from "../../components/ui/Button";

export const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="flex m-2 sm:m-6 rounded-md border-[1px] shadow-md border-black">
        <div className="w-[50%] flex flex-col">
          <div className="text-4xl my-auto mx-auto text-bolder">
            Write something to inspire!
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
