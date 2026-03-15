export default function Footer() {
  return (
    <footer className="mt-auto text-white border-t border-gray-800 bg-neutral">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-white">606 소개</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">회사소개</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">투자정보</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">채용안내</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">공지사항</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">고객센터</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">1:1 문의</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">배송조회</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">반품/교환</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">파트너</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">입점 신청</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">판매자 센터</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">광고 안내</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">이용안내</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">이용약관</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">개인정보처리방침</a></li>
              <li><a href="#" className="text-gray-400 transition-colors hover:text-white">청소년보호정책</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="space-y-2 text-xs text-gray-500">
            <p>상호명: (주)606 | 대표이사:최원우 | 사업자등록번호: 120-88-00606</p>
            <p>통신판매업신고:부산 동성인재개발원-0606호 | 개인정보보호책임자: 최원우</p>
            <p className="mt-4 text-gray-600">© 606 Corp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}