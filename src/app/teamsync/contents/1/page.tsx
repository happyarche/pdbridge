import Image from "next/image";
import RoundedContainer from "@/app/teamsync/layout/RoundedContainer"; // 레이아웃 불러오기

const WebHowItWorks = () => {
  return (
    <RoundedContainer>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        웹 개발 기본 이해 - 웹의 작동 원리
      </h1>

      {/* 웹 개념 이미지 */}
      <div className="flex justify-center mb-6">
        <Image
          src="https://cdn.pixabay.com/photo/2017/06/13/12/34/internet-2398305_960_720.jpg"
          width={500}
          height={300}
          alt="웹의 작동 원리"
          className="rounded-lg shadow-md"
        />
      </div>

    </RoundedContainer>
  );
};

export default WebHowItWorks;
