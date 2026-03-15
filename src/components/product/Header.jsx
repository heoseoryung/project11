import { useState } from "react";
import { Search, ShoppingCart, User, Menu, Clock, ChevronDown, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router";

const categories = [
  { name: "패션의류", path: "fashion", icon: "👗", color: "group-hover:from-pink-500/20" },
  { name: "뷰티", path: "beauty", icon: "💄", color: "group-hover:from-purple-500/20" },
  { name: "식품", path: "food", icon: "🍱", color: "group-hover:from-orange-500/20" },
  { name: "가전디지털", path: "electronics", icon: "📱", color: "group-hover:from-blue-500/20" },
  { name: "가구/인테리어", path: "furniture", icon: "🛋️", color: "group-hover:from-amber-500/20" },
  { name: "출산/유아동", path: "baby", icon: "👶", color: "group-hover:from-green-500/20" },
  { name: "스포츠", path: "sports", icon: "⚽", color: "group-hover:from-indigo-500/20" },
  { name: "도서/음반", path: "books", icon: "📚", color: "group-hover:from-violet-500/20" },
];

export default function Header() {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#0A0A0A] border-b border-[#1A1A1A]">
     {/* 1. 최상단 - 유틸리티 바 */}
<div className="border-b border-[#1A1A1A]/50 bg-[#050505]">
  <div className="max-w-[1400px] mx-auto px-6 py-1 flex items-center justify-end gap-3 text-[13px]">
    <button onClick={() => navigate("/login")} className="font-semibold text-gray-200 transition-all duration-200 hover:text-white hover:scale-110 active:scale-95">로그인</button>
    <span className="text-gray-800 text-[10px] select-none">|</span>
    <button onClick={() => navigate("/register")} className="font-semibold text-gray-200 transition-all duration-200 hover:text-white hover:scale-110 active:scale-95">회원가입</button>
    <span className="text-gray-800 text-[10px] select-none">|</span>
    <button onClick={() => navigate("/seller")} className="font-semibold text-gray-200 transition-all duration-200 hover:text-white hover:scale-110 active:scale-95">판매자센터</button>
    <span className="text-gray-800 text-[10px] select-none">|</span>
    <button className="font-semibold text-gray-200 transition-all duration-200 hover:text-white hover:scale-110 active:scale-95">고객센터</button>
  </div>
</div>

      {/* 2. 메인 헤더 */}
      <div className="border-b border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-6">
          {/* 로고 */}
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent hover:scale-105 transition-transform shrink-0 tracking-tighter">
            606
          </Link>
          
          {/* 카테고리 호버 메뉴 */}
          <div 
            className="relative shrink-0"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${isCategoryOpen ? 'bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white' : 'bg-[#1A1A1A] text-gray-300 border border-[#2A2A2A]'}`}>
              <Menu className="w-5 h-5" />
              <span>카테고리</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* 드롭다운 */}
            <div className={`absolute top-full left-0 mt-3 w-[480px] bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 z-[1001] ${isCategoryOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
              <div className="grid grid-cols-2 gap-3 p-4">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={`/category/${category.path}`}
                    className={`group relative flex items-center gap-4 p-4 bg-[#1A1A1A] hover:bg-gradient-to-r ${category.color} to-transparent border border-[#2A2A2A] hover:border-[#FF4D00]/50 rounded-xl transition-all duration-200 hover:scale-[1.02]`}
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{category.icon}</span>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white">{category.name}</span>
                  </Link>
                ))}
              </div>
              <div className="bg-[#1A1A1A] p-4 border-t border-[#2A2A2A]">
                <Link to="/" className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white rounded-xl font-bold hover:brightness-110 transition-all">
                  <Zap className="w-4 h-4 fill-current" />
                  <span>오늘의 초특가 상품 보기</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 검색창 영역 */}
          <div className="flex-1 min-w-0">
            <div className="relative max-w-2xl group">
              <div className={`
                relative flex items-center w-full bg-[#1A1A1A] border rounded-xl transition-all duration-300
                ${searchTerm || isSearchOpen ? 'border-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.2)]' : 'border-[#2A2A2A] group-hover:border-[#4A4A4A]'}
                focus-within:border-[#FF4D00] focus-within:shadow-[0_0_20px_rgba(255,77,0,0.3)]
              `}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                  placeholder="어떤 상품을 찾으시나요?"
                  className="w-full px-5 py-3 text-sm text-white bg-transparent outline-none placeholder:text-gray-600"
                />
                <button className={`px-4 py-3 transition-colors ${searchTerm ? 'text-[#FF4D00]' : 'text-gray-500'} group-focus-within:text-[#FF4D00]`}>
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* 우측 아이콘 그룹 */}
          <div className="flex items-center gap-2 shrink-0">
            <NavIcon icon={<User className="w-7 h-7" />} label="로그인" onClick={() => navigate("/login")} id="user" hoveredIcon={hoveredIcon} setHoveredIcon={setHoveredIcon} />
            <NavIcon icon={<ShoppingCart className="w-7 h-7" />} label="장바구니" onClick={() => navigate("/cart")} id="cart" hoveredIcon={hoveredIcon} setHoveredIcon={setHoveredIcon} />
            <NavIcon icon={<Clock className="w-7 h-7" />} label="최근본" onClick={() => {}} id="recent" hoveredIcon={hoveredIcon} setHoveredIcon={setHoveredIcon} />
          </div>
        </div>
      </div>

      {/* 3. 하단 네비게이션 */}
      <div className="bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <nav className="flex items-center gap-8 py-3 text-[13px] overflow-x-auto no-scrollbar border-b border-[#1A1A1A]">
            <Link to="/category/fashion" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">패션의류</Link>
            <Link to="/category/beauty" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">뷰티</Link>
            <Link to="/category/food" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">식품</Link>
            <Link to="/category/electronics" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">가전디지털</Link>
            <Link to="/" className="bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent font-extrabold whitespace-nowrap tracking-tight">🔥 HOT 특가</Link>
            <Link to="/" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">베스트</Link>
            <Link to="/" className="font-semibold text-gray-400 transition-colors hover:text-white whitespace-nowrap">신상품</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavIcon({ icon, label, onClick, id, hoveredIcon, setHoveredIcon }) {
  return (
    <div className="relative" onMouseEnter={() => setHoveredIcon(id)} onMouseLeave={() => setHoveredIcon(null)}>
      <button onClick={onClick} className="p-2.5 text-gray-400 hover:text-white transition-all hover:scale-110 active:scale-95">
        {icon}
      </button>
      {hoveredIcon === id && (
        <div className="absolute top-[110%] left-1/2 -translate-x-1/2 bg-white text-black px-2.5 py-1 rounded-md text-[10px] whitespace-nowrap shadow-xl font-bold animate-in fade-in slide-in-from-top-1 z-[1002]">
          {label}
        </div>
      )}
    </div>
  );
}