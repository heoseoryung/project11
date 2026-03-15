import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigate 사용
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import axios from "axios"; // axios 추가

export default function Login() {
  const navigate = useNavigate(); // 리액트 라우터의 페이지 이동 함수를 초기화함
  
  // 1. 상태 관리 (디자인 코드의 변수명 유지 + 로직 연결)
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 숨김/표시 상태 (T/F)
  const [email, setEmail] = useState(""); // Username 대용으로 사용자가 입력한 이메일 저장
  const [password, setPassword] = useState(""); // 사용자가 입력한 비밀번호 저장

  // 2. 실제 로그인 처리 함수 (예제 코드의 로직 이식)
  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작을 막음

    // 유효성 검사: 입력값이 비어있는지 먼저 확인
    if (!email || !password) {
      toast.error("이메일과 비밀번호를 입력해주세요");
      return;
    }

    try {
      // 백엔드 서버(Spring Boot)로 로그인 요청
      // axios를 이용해 비동기 HTTP POST 요청을 보냄
      const response = await axios({
        method: "POST",
        url: `http://localhost:8080/logins`, 
        headers: { "Content-Type": "application/json" }, // 보낼 데이터가 JSON임을 명시
        withCredentials: true, // 서버와 세션/쿠키를 공유하기 위한 필수 옵션
        data: JSON.stringify({ "id": email, "password": password }) // 입력한 정보를 JSON 문자열로 변환
      });

      // 로그인 성공 시 처리
      toast.success("로그인되었습니다");
      // 브라우저의 로컬 스토리지에 유저 ID를 저장하여 다른 페이지에서도 사용 가능하게 함
      localStorage.setItem('userId', email); // 혹은 서버에서 준 ID 저장
      
      // 1초 뒤 메인으로 이동 (사용자가 성공 메시지를 볼 시간을 줌)
      setTimeout(() => navigate("/"), 1000);
      
    } catch (error) {
      // 로그인 실패 시 에러 메시지 (예제의 alert 대신 toast 사용)
      // 서버에서 보낸 에러 메시지가 있으면 그걸 쓰고, 없으면 기본 메시지 출력
      const errorMsg = error.response?.data?.message || "로그인에 실패했습니다";
      toast.error(errorMsg);
    }
  };

  // 3. 소셜 로그인 함수 (예제의 replace 로직)
  // 버튼 클릭 시 Spring Security의 소셜 로그인 엔드포인트로 브라우저 주소를 직접 이동시킴
  const socialLogin = (platform) => {
    window.location.href = `http://localhost:8080/oauth2/authorization/${platform}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      {/* 상단 헤더 영역: 로고 클릭 시 홈으로 이동 */}
      <header className="bg-[#0A0A0A] py-4 border-b border-[#1A1A1A]">
        <div className="px-4 mx-auto max-w-7xl">
          <button onClick={() => navigate("/")} className="text-2xl font-black bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent">
            606
          </button>
        </div>
      </header>

      <main className="flex items-center justify-center flex-1 py-12">
        {/* 로그인 카드 컨테이너 */}
        <div className="w-full max-w-md shadow-xl card bg-base-100">
          <div className="card-body">
            <h1 className="justify-center mb-4 text-2xl card-title">로그인</h1>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* 이메일 입력 섹션 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">이메일</span>
                </label>
                <div className="relative">
                  <Mail className="absolute w-5 h-5 left-3 top-3 opacity-60" /> {/* 메일 아이콘 */}
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="w-full pl-10 input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // 입력할 때마다 email 상태 업데이트
                  />
                </div>
              </div>

              {/* 비밀번호 입력 섹션 */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">비밀번호</span>
                </label>
                <div className="relative">
                  <Lock className="absolute w-5 h-5 left-3 top-3 opacity-60" /> {/* 자물쇠 아이콘 */}
                  <input
                    type={showPassword ? "text" : "password"} // showPassword 상태에 따라 타입 변경
                    placeholder="비밀번호를 입력하세요"
                    className="w-full pl-10 pr-10 input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // 입력할 때마다 password 상태 업데이트
                  />
                  {/* 비밀번호 보이기/숨기기 토글 버튼 */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 opacity-60 hover:opacity-100"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* 로그인 제출 버튼 */}
              <button type="submit" className="w-full btn btn-primary btn-lg">
                로그인
              </button>
            </form>

            <div className="divider">또는</div>

            {/* 예제 코드의 소셜 로그인 버튼들과 연동 */}
            {/* 각 버튼 클릭 시 해당 플랫폼의 OAuth 인증 경로로 리다이렉트 */}
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => socialLogin('naver')} className="p-0 btn btn-outline">네이버</button>
              <button onClick={() => socialLogin('kakao')} className="p-0 btn btn-outline">카카오</button>
              <button onClick={() => socialLogin('google')} className="p-0 btn btn-outline">구글</button>
            </div>

            {/* 하단 회원가입 유도 링크 */}
            <div className="mt-6 text-center">
              <p className="text-sm opacity-60">
                606이 처음이신가요?{" "}
                <button onClick={() => navigate("/register")} className="link link-primary">
                  회원가입
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}