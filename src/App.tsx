export const App = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="py-16 px-10 h-screen w-full">
        <h1 className="text-4xl text-orange-500 font-medium">SprinTAL</h1>

        <div className="h-full flex  items-center">
          <div className="flex flex-col">
            <p className="text-gray-300 text-5xl ">The challenge is still on</p>
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

      <div className="w-16 bg-sky-300 h-full flex items-center justify-center">
        <p className="rotate-90 text-white ">Stats</p>
      </div>

      <div className="w-16 bg-orange-500 h-full flex items-center justify-center">
        <p className="rotate-90 text-white ">Log</p>
      </div>
    </div>
  );
};
