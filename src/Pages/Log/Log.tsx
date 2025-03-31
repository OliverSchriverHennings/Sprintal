import { PageSlider } from "../../components/PageSlider";

type Props = {
  setFunction: () => void;
  activeVariant: string;
};

export const Log = ({ setFunction, activeVariant }: Props) => {
  return (
    <>
      <PageSlider
        variant="Log"
        isOpen={activeVariant === "Log"}
        onClick={setFunction}
      ></PageSlider>
    </>
  );
};
