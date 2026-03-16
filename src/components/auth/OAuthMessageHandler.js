import qs from "qs";

/**
 * OAuthMessageHandler 컴포넌트
 * 역할: 소셜 로그인 완료 후 서버에서 리다이렉트된 URL의 메시지를 처리함
 * 확장자: .js (JSX 태그를 제거하여 순수 JS 파일로 유지)
 */
const OAuthMessageHandler = () => {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  if (query.message) {
    // 1. 메시지 내용에 "성공"이나 "완료"가 포함되어 있는지 확인
    const isSuccess = query.message.includes("성공") || query.message.includes("완료");

    alert(query.message);

    if (isSuccess) {
      // 2. [중요] 성공했으면 로그인 징표를 남기고 홈으로!
      localStorage.setItem("isLoggedIn", "true"); 
      window.location.replace("/"); 
      return null; // 여기서 코드 종료
    }
  }

  // 3. 실패했거나 메시지가 없으면 로그인으로
  window.location.replace("/login");
  return null;
};
export default OAuthMessageHandler;