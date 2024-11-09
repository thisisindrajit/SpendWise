import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center m-auto max-w-[96rem]">
      <div className="flex flex-col gap-4 font-medium">
        <div className="text-6xl">SpendWise</div>
        <div className="text-lg text-green-500">
          {`Powered by Chrome's in-browser model (Gemini Nano)`}
        </div>
      </div>
      <div className="text-3xl/relaxed text-justify">
        SpendWise is an{" "}
        <span className="underline underline-offset-8 decoration-dotted text-cyan-500">
          AI based
        </span>{" "}
        expense tracker that is dead simple to use.
      </div>
    </div>
  );
};

export default Home;
