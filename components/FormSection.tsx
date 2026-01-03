import React, { useState } from 'react';

// 보내주신 최신 URL입니다!
const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfxJfWcf0WOdyZElh9Xy0RWsjH29raHucblaD-nw6uzR9KgV2t0g7vV-nzi6ekd_pkqA/exec";

export const FormSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!phone.trim() || phone.length < 10) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 주소 뒤에 데이터를 붙여서 보내는 가장 확실한 방식 (doGet 방식 연결)
      const finalURL = `${GOOGLE_APP_SCRIPT_URL}?phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`;
      
      // 구글 서버에 데이터 전송
      await fetch(finalURL, {
        method: 'GET',
        mode: 'no-cors' // 브라우저 차단을 막기 위해 필수
      });

      // 데이터가 전송되는 시간을 고려해 0.5초 뒤 성공 화면으로 전환
      setTimeout(() => {
        alert('신청이 성공적으로 완료되었습니다! 구글 시트를 확인해보세요.');
        setSubmitted(true);
        setIsSubmitting(false);
      }, 500);
      
    } catch (error) {
      console.error('전송 에러:', error);
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="form-section" className="w-full py-24 px-6 bg-orange-50 text-center">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-[2rem] shadow-xl border border-orange-100">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="text-2xl font-extrabold mb-4">대기자 등록 완료!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            한입만의 사전 예약 멤버가 되셨습니다.<br />
            구글 시트에 정보가 안전하게 기록되었습니다.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl">확인</button>
        </div>
      </section>
    );
  }

  return (
    <section id="form-section" className="w-full py-24 px-6 bg-orange-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-10">사전 예약 신청하기</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl text-left border border-orange-100">
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">휴대폰 번호</label>
            <input 
              type="text" 
              required
              placeholder="010-0000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">이메일 주소</label>
            <input 
              type="email" 
              required
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white text-lg font-bold py-5 rounded-xl transition-all ${isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}
          >
            {isSubmitting ? '전송 중...' : '사전 대기자 신청 (1분)'}
          </button>
        </form>
      </div>
    </section>
  );
};