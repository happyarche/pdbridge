
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
  { name: '강좌의 사이드 메뉴 ', href: '/lecture' },
  { name: '퀴즈의 사이드 메뉴', href: '/quiz' },
  { name: '피디브릿지의 사이드 메뉴', href: '/aboutus' },
  { name: '로그인의 사이드 메뉴', href: '/auth/login' },
  { name: '회원가입의 사이드 메뉴', href: '/auth/signup' },
];

export const AdBanner = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="h-[150px] bg-blue-500 text-white rounded-md flex items-center justify-center mb-10">
        AdBanner 광고 영역
      </div>
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
    </>
  )
}






