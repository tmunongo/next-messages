import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // setLoading(true)
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex items-center justify-center m-0 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <NavBar />
        </div>
        <div>
          <p className="text-2xl">Welcome</p>
          <div>
            {data ? <p>{data.name}</p> : <p>Placeholder</p>}
            {data ? <p>{data.body}</p> : <p>Placeholder</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
