import Link from "next/link";

export default function Page() {
    return (

        <div className="p-10">
            <div className="bg-white rounded-lg shadow-md p-10" style={{ width: '550px' }}>
            <p className="text-2xl font-normal mt-2 mb-9">로그인</p>
                <form>
                    <div className="mb-4">
                        <input type="email" id="email" placeholder="이메일을 입력하세요"  className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" placeholder="비밀번호를 입력하세요" className="w-full px-3 py-4 border rounded-md" />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="text-gray-700">로그인 유지하기</label>
                        </div>
                        <div>
                            <Link href="/auth/forgot-password" className="text-blue-500 hover:underline">비밀번호 찾기</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">로그인</button>
                    <hr className="my-4" />
                    <div className="flex justify-between mt-4">
                        <button className="w-full bg-white text-blue-500 py-2 rounded-md border border-gray-300 hover:border-blue-500">구글로 로그인 하기</button>
                    </div>
                    <div>
                        <button className="w-full bg-white text-green-500 py-2 rounded-md border border-gray-300 hover:border-green-500 mt-2">네이버로 로그인 하기</button>
                    </div>
                    <div>
                        <button className="w-full bg-white text-yellow-500 py-2 rounded-md border border-gray-300 hover:border-yellow-500 mt-2">카카오톡으로 로그인 하기</button>
                    </div>
                    <p className="text-center mt-8">아직 저희 회원이 아니신가요?  <Link href="/auth/signup" className="text-gray-700  hover:text-blue-500 hover:font-bold">회원가입</Link></p>

                </form>
            </div>


            <Link href="/" className="text-gray-700 hover:text-black">
                <span className="text-4xl ml-4 mt-2">&larr;</span>
            </Link>
           
        </div>


    )
}