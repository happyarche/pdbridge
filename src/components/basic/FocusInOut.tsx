import React, { useState } from "react";

export default function FocusInOutInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder={isFocused ? "" : "글자를 입력하세요"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`p-2 w-4/5 border rounded outline-none transition-colors duration-300 ${
        isFocused ? "border-black" : "border-gray-300"
      }`}
    />
  );
}
