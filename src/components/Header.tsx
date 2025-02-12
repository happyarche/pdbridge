
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
  { name: '강좌', href: '/lecture' },
  { name: '퀴즈', href: '/quiz' },
  { name: '피디브릿지', href: '/aboutus' },
  { name: '로그인', href: '/auth/login' },
  { name: '회원가입', href: '/auth/signup' },
];


export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link href="/">PDbridge</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            {/* <li><Link href="/lecture/function" className="text-gray-700 hover:text-black">Function</Link></li> 
            <li><Link href="/lecture" className="text-gray-700 hover:text-black">Lecture</Link></li>
            <li><a href="/quiz" className="text-gray-700 hover:text-black">Quiz</a></li>
            <li><Link href="/aboutme" className="text-gray-700 hover:text-black">About Me</Link></li>*/}
            {links.map((link) => {
              const isActive = pathname === link.href; // 현재 페이지 확인
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    flex h-[32px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
                    hover:bg-sky-100 hover:text-blue-600
                    ${isActive ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'}
                  `}
                >
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}


          </ul>
        </nav>
      </div>
    </header>
  );
}
