
import React from 'react';

const BenefitCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-orange-200 transition-colors">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <BenefitCard 
          icon="🍱"
          title="딱 내 몫만, 딱 이 가격"
          desc="배달비 4,000원? 최소 주문금액 18,000원? 한입만에서는 내가 먹을 만큼의 음식값만 내세요."
        />
        <BenefitCard 
          icon="📦"
          title="대용량 말고, 소분 가격"
          desc="쿠팡 대용량 특가? 이웃과 함께 대용량을 나누고 반값에 가져가세요."
        />
        <BenefitCard 
          icon="🏠"
          title="동네라서 더 간단해요"
          desc="멀리 갈 필요 없어요. 우리 아파트, 우리 골목 이웃과 집 앞에서 가볍게 만나 나누면 끝!"
        />
      </div>
    </section>
  );
};
