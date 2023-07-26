type Props = {
  title: string;
};

const EmptySection = ({ title }: Props) => {
  return (
    <div className="h-60 p-10 w-full border-gray-200 rounded-2xl border-dashed border-2 bg-gray-50 flex justify-center items-center">
      <p className="text-center text-gray-400 text-base">
        You currently don&apos;t have your {title} configured.
      </p>
    </div>
  );
};

export default EmptySection;
