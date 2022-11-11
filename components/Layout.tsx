// components/layout.js

import { ReactElement } from "react";
import Navbar from "./NavBar";

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex items-center justify-center m-0 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <Navbar />
          <main className=" w-full h-screen">{children}</main>
        </div>
      </div>
    </>
  );
}
