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
        <div>
          <p className="text-2xl">Welcome</p>
          <div>
            {data ? (
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.body}</p>
                  </div>
                );
              })
            ) : (
              <div>
                <p>Name Placeholder</p>
                <p>Message Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
