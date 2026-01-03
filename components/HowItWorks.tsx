
import React from 'react';

const Step: React.FC<{ num: number; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
      {num}
    </div>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-16">한입만, 이렇게 사용해요</h2>
        <div className="space-y-12">
          <Step 
            num={1}
            title="나누고 싶은 항목 올리기"
            desc="같이 시킬 배달 음식이나 함께 사고 싶은 물건을 게시판에 올려보세요."
          />
          <Step 
            num={2}
            title="나눌 이웃 찾기"
            desc="참여하고 싶은 이웃이 나타나면 자동으로 채팅방이 열려요."
          />
          <Step 
            num={3}
            title="집 앞에서 만나기"
            desc="약속한 시간에 집 근처에서 만나 가볍게 나누고 절약을 즐기세요."
          />
        </div>
      </div>
    </section>
  );
};
