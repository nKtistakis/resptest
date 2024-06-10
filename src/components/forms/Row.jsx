const Row = ({ children }) => {
  return (
    <div className="flex flex-row w-full items-start desktop:space-x-6 mobiles:flex-col mobiles:items-center mobiles:space-y-6">
      {children}
    </div>
  );
};

export default Row;
