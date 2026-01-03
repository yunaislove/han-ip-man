
import React from 'react';

export const StickyCTA: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('form-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 px-6 z-50 animate-bounce-in flex justify-center pointer-events-none">
      <button 
        onClick={scrollToForm}
        className="pointer-events-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl shadow-orange-400/50 flex items-center gap-2 active:scale-95 transition-all text-lg"
      >
        <span>지금 바로 출시 알림 받기</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
      <style>{`
        @keyframes bounce-in {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};
