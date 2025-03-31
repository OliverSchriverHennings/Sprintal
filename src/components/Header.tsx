type Props = {
  text: string;
};

export const Header = ({ text }: Props) => {
  return <div className="w-full">{text}</div>;
};
