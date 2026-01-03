
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-orange-500 transition-colors"
      >
        <span className="text-lg font-bold">{q}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">자주 묻는 질문</h2>
        <div className="border-t border-gray-100">
          <FAQItem 
            q="Q. 귀찮지 않나요?"
            a="가까운 이웃과 매칭되기 때문에 멀리 나갈 필요가 없어요. 정해진 스팟에서 1분만 시간 내면 수천 원의 배달비와 식비를 아낄 수 있습니다."
          />
          <FAQItem 
            q="Q. 어떤 것들을 나눌 수 있나요?"
            a="치킨, 피자 같은 배달 음식부터 마트 대용량 식재료, OTT 서비스, 묶음 생활용품까지 비용을 나눌 수 있는 모든 것이 가능합니다."
          />
          <FAQItem 
            q="Q. 출시 알림은 어떻게 오나요?"
            a="정식 앱 스토어 출시 1주일 전, 입력해주신 연락처로 개별 안내 문자와 이메일을 보내드릴 예정입니다."
          />
        </div>
      </div>
    </section>
  );
};
