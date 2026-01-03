
import React, { useState } from 'react';

// 요청하신 새로운 Web App URL입니다.
const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbylli03GM9aoanJxJrO-4XOQNqWvgjvDHou1Lmo8na_kKidfiJrORSor84l3FtskUfu/exec";

export const FormSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    // 8. 폼 submit으로 페이지가 새로고침 되지 않게 막음
    e.preventDefault();
    
    // 1. 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!phone.trim() || phone.length < 10) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    // 2. 전송 중 상태 처리 (버튼 disabled 및 텍스트 변경)
    setIsSubmitting(true);

    try {
      // POST 전송을 위한 데이터 구성 (Simple Request 형식을 유지하여 CORS 이슈 최소화)
      const params = new URLSearchParams();
      params.append('phone', phone);
      params.append('email', email);

      // 3 & 4. 전송 및 결과 처리
      // redirect: 'follow'는 GAS의 302 리다이렉션을 처리하기 위해 기본값으로 작동합니다.
      const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      // 신청 완료 메시지 띄우기
      alert('신청이 완료되었습니다! 출시 시점에 가장 먼저 연락드릴게요.');
      
      // 입력값 초기화 및 성공 화면 전환
      setPhone('');
      setEmail('');
      setSubmitted(true);
      
    } catch (error) {
      console.error('Submission error:', error);
      // 실패 시 메시지
      alert('다시 시도해주세요. 전송 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="form-section" className="w-full py-24 px-6 bg-orange-50 text-center">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-[2rem] shadow-xl border border-orange-100">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="text-2xl font-extrabold mb-4">신청 완료</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            한입만의 사전 예약 멤버가 되셨습니다.<br />
            입력하신 정보로 <strong>배민 1만원 쿠폰</strong>과<br />
            <strong>우선 테스터 권한</strong>을 보내드릴게요.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-all"
          >
            확인
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="form-section" className="w-full py-24 px-6 bg-orange-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">귀찮음은 조금,<br />절약은 확실하게.</h2>
        <p className="text-gray-600 mb-10 text-lg">사전 대기자 등록 시 출시 기념 <strong>배민 1만원 쿠폰</strong>을 드립니다.</p>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl text-left border border-orange-100">
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">휴대폰 번호</label>
            <input 
              id="phone"
              type="text" 
              required
              disabled={isSubmitting}
              placeholder="010-0000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9-]/g, ''))}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium transition-all disabled:opacity-50"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">이메일 주소</label>
            <input 
              id="email"
              type="email" 
              required
              disabled={isSubmitting}
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium transition-all disabled:opacity-50"
            />
          </div>
          <button 
            id="waitlistBtn"
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white text-lg font-bold py-5 rounded-xl transition-all shadow-lg active:scale-[0.98] ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-200'
            }`}
          >
            {isSubmitting ? '신청 중...' : '사전 대기자 신청 (1분)'}
          </button>
          <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed">
            * 입력한 연락처는 출시 알림 및 베타 안내 목적으로만 사용되며,<br />
            정식 출시 후 안전하게 파기됩니다.
          </p>
        </form>
      </div>
    </section>
  );
};
