import Link from "next/link";

export default function Page() {
    return (

        <div className="p-10">
            <div className="bg-white rounded-lg shadow-md p-10" style={{ width: '550px' }}>
            <p className="text-2xl font-normal mt-2 mb-9">회원가입</p>
                <form>
                    <div className="mb-4">
                        <input type="text" id="username" placeholder="아이디를 입력하세요" className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <input type="email" id="email" placeholder="이메일을 입력하세요"  className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" placeholder="비밀번호를 입력하세요" className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <input type="password" id="confirmPassword" placeholder="비밀번호를 다시 입력하세요" className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <div className="mb-2">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-gray-700">
                                <Link href="/terms" className="text-blue-500 hover:underline">이용약관</Link> 및 <Link href="/privacy" className="text-blue-500 hover:underline">개인정보 처리 방침</Link>에 동의합니다
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">회원가입</button>
                    <hr className="my-4" />
                    <div className="flex justify-between mt-4">
                        <button className="w-full bg-white text-blue-500 py-2 rounded-md border border-gray-300 hover:border-blue-500">구글로 회원가입 하기</button>
                    </div>
                    <div>
                        <button className="w-full bg-white text-green-500 py-2 rounded-md border border-gray-300 hover:border-green-500 mt-2">네이버로 회원가입 하기</button>
                    </div>
                    <div>
                        <button className="w-full bg-white text-yellow-500 py-2 rounded-md border border-gray-300 hover:border-yellow-500 mt-2">카카오톡으로 회원가입 하기</button>
                    </div>
                    <p className="text-center mt-8">이미 저희 회원이신가요?  <Link href="/auth/login" className="text-gray-700 hover:text-blue-500 hover:font-bold">로그인</Link></p>

                </form>
            </div>


            <Link href="/" className="text-gray-700 hover:text-black">
                <span className="text-4xl ml-4 mt-2">&larr;</span>
            </Link>
           
        </div>


    )
}