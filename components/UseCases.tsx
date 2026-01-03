
import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export const UseCases: React.FC = () => {
  const cases = [
    "혼자서 뿌링클 1마리 다 먹기엔 부담스러울 때",
    "마라탕 최소 주문금액이 너무 높아서 포기할 때",
    "이마트 수박 한 통을 사고 싶은데 반 통만 필요할 때",
    "OTT 구독료 혼자 내기엔 아깝고 지인은 없을 때",
    "배달비 5천원 시대, 배달비라도 아끼고 싶을 때"
  ];

  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-[2rem] border-2 border-dashed border-gray-200">
        <h2 className="text-2xl font-extrabold mb-8 text-center italic">"이런 순간, 한입만이 간절해져요"</h2>
        <ul className="space-y-5">
          {cases.map((c, i) => (
            <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-700">
              <CheckIcon />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
