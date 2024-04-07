import { useState, useEffect } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Taneeshq2002/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-3xl bg-gray-400 text-center">
        Repositories:{data.length}
      </div>
    </>
  );
}
