import Image from "next/image";
import {
  MagnifyingGlassIcon,
  LockOpenIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <AdditionalSection />
    </div>
  );
}

function Header() {
  return (
    <header className="shadow-md fixed top-0 w-full p-2">
      <div className="grid grid-cols-3 items-center">
        <Logo />
        <SearchBar />
        <LoginButton />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative h-16 w-16">
        <Image
          src="/assets/logo2.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span className="hidden md:inline font-bold text-xl pl-3 pr-3 transition-all duration-500 ">
        TEXT
      </span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex justify-center items-center flex-grow-2">
      <div className="border-2 p-2 pl-4 pr-4 rounded-3xl flex justify-between items-center">
        <input className="outline-none w-full" placeholder="Search" />
        <MagnifyingGlassIcon className="w-8 text-logoBlue" />
      </div>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="flex flex-grow-1 justify-end items-center pr-3 w-full cursor-pointer">
      <LockClosedIcon className="w-8 text-logoBlue" />
      <LockOpenIcon className="w-8 text-logoBlue" />
    </div>
  );
}

function MainContent() {
  return <main className="pt-24">MAIN</main>;
}

function AdditionalSection() {
  return <section>SECTION</section>;
}
