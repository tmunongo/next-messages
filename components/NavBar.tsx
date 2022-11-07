import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="h-[80px] w-full flex items-center justify-around p-4 bg-[#A7C4B5]">
      <div className="h-full w-1/2 flex items-center justify-center">
        <Link href="/">
          <h1 className="font-bold">Next Messages</h1>
        </Link>
      </div>
      <div className=" h-full w-1/2 flex items-center justify-around">
        <ul className="flex justify-around items-center w-full">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
