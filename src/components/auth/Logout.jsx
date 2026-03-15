import { useNavigate } from "react-router";
import { LogOut, Home } from "lucide-react";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직 (localStorage 등 클리어)
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCancel = () => {
    navigate(-1); // 이전 페이지로
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md shadow-2xl card bg-base-100">
        <div className="items-center text-center card-body">
          {/* 아이콘 */}
          <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-error/10">
            <LogOut className="w-10 h-10 text-error" />
          </div>

          {/* 제목 */}
          <h2 className="mb-2 text-2xl card-title">로그아웃</h2>
          
          {/* 메시지 */}
          <p className="mb-8 text-base-content/70">
            정말 로그아웃 하시겠습니까?<br />
            장바구니와 찜한 상품은 저장됩니다.
          </p>

          {/* 버튼 그룹 */}
          <div className="flex-col w-full gap-3 card-actions">
            <button 
              onClick={handleLogout}
              className="w-full text-white btn btn-error btn-lg"
            >
              <LogOut className="w-5 h-5" />
              로그아웃
            </button>
            
            <button 
              onClick={handleCancel}
              className="w-full btn btn-outline btn-lg"
            >
              <Home className="w-5 h-5" />
              취소
            </button>
          </div>

          {/* 추가 정보 */}
          <div className="mt-6 text-sm text-base-content/50">
            로그아웃 후에도 언제든지 다시 로그인하실 수 있습니다
          </div>
        </div>
      </div>
    </div>
  );
}
