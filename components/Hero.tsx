
import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById('form-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    const el = document.getElementById('how-it-works');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full max-w-4xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
        🎉 사전이벤트 배민 쿠폰 뿌리는 중
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
        "혼자 먹기엔<br />
        <span className="text-orange-500">비싸잖아요"</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        배달 최소금액 채우려 꾸역꾸역 시키고,<br className="hidden md:block" />
        쿠팡 대용량 특가는 늘 남아서 버리셨나요?<br />
        <strong className="text-gray-900 font-bold block mt-4">한입만은 동네에서 모든 비용을 1/N로 나누는 앱입니다.</strong>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={scrollTo}
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-orange-200 active:scale-95"
        >
          출시 알림 받기
        </button>
        <button 
          onClick={scrollToHow}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg font-bold px-8 py-4 rounded-2xl transition-all active:scale-95"
        >
          어떻게 작동해요?
        </button>
      </div>
      
      {/* 고해상도 유지를 위해 CSS로 재현한 '슬픈 배달음식 증후군' 섹션 */}
      <div className="mt-16 relative group">
        <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white aspect-[1.4/1] md:aspect-[2/1] flex flex-col items-center justify-center p-8 md:p-12 text-left">
          <div className="max-w-xl w-full">
            <div className="mb-6">
              <span className="text-2xl md:text-4xl font-extrabold text-blue-900 border-b-8 border-blue-100 pb-1">슬픈 배달음식 증후군</span>
              <p className="text-blue-800 font-bold mt-2 md:text-xl">(Sad Delivery Food Syndrome)</p>
            </div>
            
            <div className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              <p>배달 시키기 전에는 메뉴 고르며 설렘이 폭발하고</p>
              <p>먹을 생각에 세상 다 가진 듯 행복하지만</p>
              <p>막상 포장을 뜯는 순간부터 귀찮으며</p>
              <p>남은 음식, 기름 묻은 종이, 비닐, 빨간 양념 묻은 통을 씻고</p>
              <p>분리배출하는 과정에서 우울감은 절정에 달한다.</p>
              <p>치우는 동안 결제 금액이 떠올라 '돈이 증발했다'는 기분과 동시에</p>
              <p>과식으로 인한 속 더부룩함과 함께 현타를 맞이하는 것이 특징</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
