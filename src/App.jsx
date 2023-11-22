import { useRef, useState, useEffect } from "react";
import Box from "./components/Box";
import DetectArea from "./components/DetectArea";

const App = () => {
  const [boxCount, setBoxCount] = useState(6);
  const [boxCompList, setBoxCompList] = useState([
    <Box boxCount={1} />,
    <Box boxCount={2} />,
    <Box boxCount={3} />,
    <Box boxCount={4} />,
    <Box boxCount={5} />,
  ]);

  const detectAreaRef = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("디텍팅 에어리어가 감지되었습니다.");
          setBoxCompList([
            ...boxCompList,
            <Box boxCount={boxCount} />,
            <Box boxCount={boxCount + 1} />,
            <Box boxCount={boxCount + 2} />,
            <Box boxCount={boxCount + 3} />,
            <Box boxCount={boxCount + 4} />,
          ]);

          setBoxCount(boxCount + 5);
        }
      },
      { threshold: 0.7 }
    );

    observer.current.observe(detectAreaRef.current);

    return () => observer.current.unobserve(detectAreaRef.current);
  }, [boxCompList]);

  return (
    <ul className="flex flex-col items-center gap-20">
      {boxCompList.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
      <DetectArea detectAreaRef={detectAreaRef} />
    </ul>
  );
};

export default App;
