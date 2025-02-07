import React, { useState } from "react";

export default function SelectBoxExample() {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // 값이 있을 때만 메시지 업데이트
    if (value) {
      setMessage(`선택한 ${value}로 내용이 변경되었습니다.`);
    } else {
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <select
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
      >
        <option value="">옵션을 선택하세요</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </select>
      {message && (
        <p className="mt-4 text-blue-600 font-medium">{message}</p>
      )}
    </div>
  );
}
