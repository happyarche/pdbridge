
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link href="/">PDbridge</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/bcomponents" className="text-gray-700 hover:text-black">기획자가 알아야할 기능</Link></li>
            <li><Link href="/teamsync" className="text-gray-700 hover:text-black">강의목차</Link></li>
            <li><Link href="/contents/about" className="text-gray-700 hover:text-black">About</Link></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
