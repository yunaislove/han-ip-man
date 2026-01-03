
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-16 px-6 text-center text-sm">
      <div className="max-w-4xl mx-auto">
        <p className="font-bold text-white mb-4 text-lg">한입만 (Han-ip-man)</p>
        <p className="mb-2 leading-relaxed">
          한입만 팀 | 서울특별시 강남구 테헤란로 (가상의 주소)<br />
          비즈니스 문의: contact@hanipman.app
        </p>
        <div className="flex justify-center gap-6 mt-8 mb-8">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors font-bold">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">서비스 소개</a>
        </div>
        <p>© 2024 Hanipman Team. All rights reserved.</p>
      </div>
    </footer>
  );
};
