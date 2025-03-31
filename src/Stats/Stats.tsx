import { PageSlider } from "../components/PageSlider";

type Props = {
  setFunction: () => void;
  activeVariant: string;
};

export const Stats = ({ setFunction, activeVariant }: Props) => {
  return (
    <>
      <PageSlider
        variant="Stats"
        isOpen={activeVariant === "Stats"}
        onClick={setFunction}
      ></PageSlider>
    </>
  );
};
