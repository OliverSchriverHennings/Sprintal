import { ReactNode } from "react";
import { Variant } from "../Pages/App";

type Props = {
  children?: ReactNode;
  variant: Variant;
  isOpen: boolean;
  onClick: () => void;
};

export const PageSlider = ({ children, variant, isOpen, onClick }: Props) => {
  function getColor(variant: Variant): string {
    switch (variant) {
      case "Home":
        return "bg-white text-gray-900";
      case "Stats":
        return "bg-sky-300 text-white";
      case "Log":
        return "bg-orange-500 text-white";
    }
  }

  return (
    <>
      <div
        onClick={onClick}
        className={`ease-out-in shadow-2xl" h-full overflow-hidden transition-all duration-500 ${getColor(variant)} ${isOpen ? "w-full" : "flex w-16 cursor-pointer items-center justify-center hover:w-20"}`}
      >
        {!isOpen && <p className="rotate-90">{variant}</p>}
        {isOpen && <div className="starting:open:opacity-0">{children}</div>}
      </div>
    </>
  );
};
