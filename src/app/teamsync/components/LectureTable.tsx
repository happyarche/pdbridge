import React from "react";
import Link from "next/link";

const LectureList = () => {
  const lectures = [
    {
      title: "웹 개발 기본 이해",
      subtopics: [
        { name: "웹의 작동 원리", link: "/teamsync/contents/1" },
        { name: "서버와 클라이언트의 역할", link: "#" },
        { name: "HTML, CSS, JavaScript의 기본 개념", link: "#" },
      ],
    },
    {
      title: "개발자와의 커뮤니케이션 이해",
      subtopics: [
        { name: "개발자의 업무와 기획자의 역할", link: "#" },
        { name: "용어 정리 (예: 프론트엔드, 백엔드, API 등)", link: "#" },
        { name: "일정을 잡을 때 고려해야 할 개발 측면", link: "#" },
      ],
    },
    {
      title: "효율적인 요구 사항 전달 방법",
      subtopics: [
        { name: "요구사항 명세서 작성법", link: "#" },
        { name: "기능 명세서와 기술 명세서 차이점", link: "#" },
        { name: "유저스토리와 스토리보드 활용법", link: "#" },
      ],
    },
    {
      title: "개발 흐름과 기획 문서",
      subtopics: [
        { name: "버전 관리 시스템 (예: Git) 이해", link: "#" },
        { name: "개발 일정과 기획 일정 조율", link: "#" },
        { name: "테스트와 피드백 과정", link: "#" },
      ],
    },
    {
      title: "기획자와 개발자 간의 문제 해결",
      subtopics: [
        { name: "소통에서 발생할 수 있는 문제와 해결법", link: "#" },
        { name: "협업 도구 사용법 (예: Jira, Trello)", link: "#" },
        { name: "실시간 소통 및 피드백 주고받기", link: "#" },
      ],
    },
  ];

  return (
    <div className="p-6">
      <ul className="space-y-6">
        {lectures.map((lecture, index) => (
          <li key={index}>
            {/* 대제목 (강의 주제) */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {index + 1}. {lecture.title}
            </h2>
            {/* 소제목 (강의 항목) */}
            <ul className="ml-6 space-y-1">
              {lecture.subtopics.map((subtopic, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subtopic.link}
                    className="text-blue-500 hover:underline"
                >
                    {index + 1}.{subIndex + 1} {subtopic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureList;
