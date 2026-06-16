import React, { useEffect, useState } from "react";

interface SliderProps {
  children: React.ReactNode[];
}

const SimpleSlider: React.FC<SliderProps> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const total = React.Children.count(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <>
      {React.Children.map(children, (child, i) =>
        i === index ? child : null
      )}
    </>
  );
};

export default SimpleSlider;