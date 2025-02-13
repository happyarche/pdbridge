"use client";
import Link from "next/link";
import Eye from "@/components/icons/eye";
import EyeOff from "@/components/icons/eye-off"
import React, { useState } from "react"
import { FormCard } from "@/components/auth/FormCard";

export default function Page() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showconfirmPassword, setshowconfirmPassword] = React.useState(false);
    return (

        <FormCard 
            title="회원가입">
            <div className="mb-4">
                <input type="text" id="username" placeholder="아이디를 입력하세요" className="w-full px-3 py-4 border rounded-md" />
            </div>
            <div className="mb-4">
                <input type="email" id="email" placeholder="이메일을 입력하세요" className="w-full px-3 py-4 border rounded-md" />
            </div>
            <div className="mb-4 relative">
                <input
                    id="password"
                    type={showPassword ? "text" : "password"} // 상태에 따라 type 변경
                    placeholder="비밀번호 입력"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // 상태 토글
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                    {showPassword ? <Eye /> : <EyeOff />}
                </button>
            </div>

            <div className="mb-4 relative">
                <input
                    id="confirmPassword"
                    type={showconfirmPassword ? "text" : "password"} // 상태에 따라 type 변경
                    placeholder="비밀번호 확인"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="button"
                    onClick={() => setshowconfirmPassword(!showconfirmPassword)} // 상태 토글
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                    {showconfirmPassword ? <Eye /> : <EyeOff />}
                </button>
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

        </FormCard>


    )
}