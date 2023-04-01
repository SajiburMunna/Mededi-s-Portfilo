import { useEffect, useRef, useState } from "react";

import Navbar from "@/components/Navbar";
import InfoCard from "@/components/InfoCard";
import Hola from "./hola";

export default function Home() {
  const [isHola, setIsHola] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHola(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isHola ? (
        <Hola />
      ) : (
        <div>
          <Navbar />
          <InfoCard />
        </div>
      )}
    </>
  );
}
