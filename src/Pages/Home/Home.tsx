import { PageSlider } from "../../components/PageSlider";

type Props = {
  setFunction: () => void;
  activeVariant: string;
};

export const Home = ({ setFunction, activeVariant }: Props) => {
  return (
    <>
      <PageSlider
        variant="Home"
        isOpen={activeVariant === "Home"}
        onClick={setFunction}
      >
        <div className="py-16 px-10 h-screen w-full">
          <h1 className="text-4xl text-orange-500 font-medium">SprinTAL</h1>

          <div className="h-full flex  items-center">
            <div className="flex flex-col">
              <p className="text-gray-300 text-5xl ">
                The challenge is still on
              </p>
              <p className="text-gray-300">
                There are{" "}
                <span className="text-gray-500 font-medium">
                  12 days, 6 hours and 33 minutes{" "}
                </span>
                until finish
              </p>
            </div>
          </div>
        </div>
      </PageSlider>
    </>
  );
};
