"use client";
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormCard } from '@/components/auth/FormCard';
import InputField from '@/components/auth/InputField';

const loginSchema = z.object({
  email: z.string().email('이메일 주소를 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력하세요.'),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <FormCard title="로그인">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField<LoginSchema>
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          register={register}
          error={errors.email}
          trigger={trigger}
        />
        <InputField<LoginSchema>
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          register={register}
          error={errors.password}
          trigger={trigger}
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
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
      </form>
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
      <p className="text-center mt-8">아직 저희 회원이 아니신가요? <Link href="/auth/signup" className="text-gray-700 hover:text-blue-500 hover:font-bold">회원가입</Link></p>
    </FormCard>
  );
}