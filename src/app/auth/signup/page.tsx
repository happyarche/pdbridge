"use client";
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormCard } from '@/components/auth/FormCard';
import InputField from '@/components/auth/InputField';

const signupSchema = z.object({
  username: z.string().min(3, '아이디는 최소 3자 이상이어야 합니다.'),
  email: z.string().email('유효한 이메일 주소를 입력하세요.'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
  confirmPassword: z.string().min(6, '비밀번호 확인은 최소 6자 이상이어야 합니다.'),
  terms: z.boolean().refine(val => val === true, '이용약관에 동의해야 합니다.'),
}).refine(data => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data);
  };

  return (
    <FormCard title="회원가입">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="username"
          type="text"
          placeholder="아이디를 입력하세요"
          register={register}
          error={errors.username}
          trigger={trigger}
        />
        <InputField
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          register={register}
          error={errors.email}
          trigger={trigger}
        />
        <InputField
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
        <InputField
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 한번 더  입력하세요"
          register={register}
          error={errors.confirmPassword}
          trigger={trigger}
          showPasswordToggle={true}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />
        <div className="flex flex-col mb-4">
          <div className="mb-2 relative">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              {...register('terms', {
                onChange: () => trigger('terms'),
                onBlur: () => trigger('terms'),
              })}
            />
            <label htmlFor="terms" className="text-gray-700">
              <Link href="/terms" className="text-blue-500 hover:underline">이용약관</Link> 및 <Link href="/privacy" className="text-blue-500 hover:underline">개인정보 처리 방침</Link>에 동의합니다
            </label>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{String(errors.terms.message)}</p>}
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">회원가입</button>
      </form>
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
      <p className="text-center mt-8">이미 저희 회원이신가요? <Link href="/auth/login" className="text-gray-700 hover:text-blue-500 hover:font-bold">로그인</Link></p>
    </FormCard>
  );
}