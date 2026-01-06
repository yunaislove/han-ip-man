
import React, { useState } from 'react';

export const FormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbwHQHldaKPh5vAoqudjcTrA31l-_8o19uyosoXVBKwgA0R1H8UV2V23blAn78q6DuG5ug/exec";

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      alert("성공적으로 신청되었습니다! \n출시 소식을 가장 먼저 알려드릴게요.");
      form.reset();
    } catch (error: any) {
      console.error('Error!', error.message);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-24 bg-gray-50" id="form-section">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
            EARLY BIRD
          </div>
          <h2 className="text-3xl font-extrabold mb-4">사전 예약 신청</h2>
          <p className="text-gray-600 leading-relaxed">
            지금 신청하고 정식 출시 때<br />
            <span className="text-orange-600 font-bold">배민 1만원 쿠폰</span> 당첨 기회를 잡으세요!
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 space-y-6 border border-gray-100"
        >
          {/* 전화번호 입력칸 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              전화번호
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="010-0000-0000"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* 이메일 입력칸 */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              이메일
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 focus:outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* 개인정보 수집 및 이용 동의 체크박스 */}
          <div className="flex items-center gap-2 px-1 py-1">
            <input
              type="checkbox"
              id="privacy"
              required
              className="w-5 h-5 accent-orange-500 cursor-pointer rounded border-gray-300 focus:ring-orange-500"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer select-none">
              개인정보 수집 및 이용에 동의합니다 <span className="text-orange-500 font-bold">(필수)</span>
            </label>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white py-5 px-6 rounded-2xl font-bold text-lg shadow-lg shadow-orange-200 transition-all active:scale-95 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                신청 중...
              </span>
            ) : '사전 예약하고 쿠폰 받기'}
          </button>
          
          <p className="text-[11px] text-gray-400 text-center leading-tight">
            신청 시 위 안내된 내용에 동의하게 되며,<br />
            출시 알림 외의 목적으로는 사용되지 않습니다.
          </p>
        </form>
      </div>
    </section>
  );
};
