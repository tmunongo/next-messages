// components/layout.js

import { ReactElement } from "react";
import Navbar from "./NavBar";
// import Footer from './footer'

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex items-center justify-center m-0 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
