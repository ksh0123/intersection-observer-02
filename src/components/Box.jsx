const Box = ({ boxCount }) => {
  const colorList = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];

  return (
    <div
      className={`${
        colorList[boxCount % colorList.length]
      } text-white w-48 h-48 text-xl font-bold flex justify-center items-center`}
    >
      Box {boxCount}
    </div>
  );
};

export default Box;
