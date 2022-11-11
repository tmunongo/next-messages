import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

type Message = {
  name: string;
  body: string;
};

const Home: NextPage = () => {
  const [data, setData] = useState<Message[]>();

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.allPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start h-full w-full">
          <div>
            <p className="text-2xl">Welcome</p>
          </div>
          <div className="flex flex-col items-center justify-start mt-2 p-4 rounded-md shadow-lg w-2/3 h-4/5">
            {data ? (
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F9EAE1] shadow-md p-4 m-4 w-2/3"
                  >
                    <p className="m-2 text-lg">
                      <span className="font-bold">Name: </span> {item.name}
                    </p>
                    <p className="m-2 text-lg">
                      <span className="font-bold">Message: </span> {item.body}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="bg-[#F9EAE1] shadow-md p-4 m-4">
                <p className="m-2 text-lg">Name: Placeholder</p>
                <p className="m-2 text-lg">Message: Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
