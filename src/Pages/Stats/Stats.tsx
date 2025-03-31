import { PageSlider } from "../../components/PageSlider";
import { MetricCard } from "../../components/MetricCard";

type Props = {
  setFunction: () => void;
  activeVariant: string;
};

export const Stats = ({ setFunction, activeVariant }: Props) => {
  return (
    <PageSlider
      variant="Stats"
      isOpen={activeVariant === "Stats"}
      onClick={setFunction}
    >
      <div className="flex h-screen flex-col gap-8 px-10 py-16">
        <h1 className="text-4xl font-medium text-black">SprinTAL</h1>
        <div className="flex flex-row gap-8">
          <MetricCard label="Total runs" metric="245" flex="flex-[2]" />
          <MetricCard label="Total time" metric="600 hours" />
          <MetricCard label="Height climbed" metric="3040 m." />
          <MetricCard label="Average pace" metric="6:20 min/km" />
        </div>

        <div className="w-full flex-1 rounded-lg bg-sky-200/50">
          I am a graph📈
        </div>
      </div>
    </PageSlider>
  );
};
