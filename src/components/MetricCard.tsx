type Props = {
  label: string;
  metric: string;
  flex?: string;
};

export const MetricCard = ({ label, metric, flex = "flex-[1]" }: Props) => {
  return (
    <div
      className={`${flex} flex flex-col items-center justify-around gap-2 rounded-lg bg-sky-200/50 p-6 text-gray-900`}
    >
      <p className="text-xl font-semibold">{metric}</p>
      <p>{label}</p>
    </div>
  );
};
