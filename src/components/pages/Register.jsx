import { useState } from "react";
import { useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, User as UserIcon, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("필수 정보를 입력해주세요");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다");
      return;
    }
    toast.success("회원가입이 완료되었습니다!");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <header className="bg-base-100 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => navigate("/")} className="text-2xl font-bold text-primary">
            606
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-2xl justify-center mb-4">회원가입</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">이름</span></label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-3 w-5 h-5 opacity-60" />
                  <input name="name" type="text" placeholder="이름" className="input input-bordered w-full pl-10" value={formData.name} onChange={handleChange} />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">이메일</span></label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 opacity-60" />
                  <input name="email" type="email" placeholder="이메일" className="input input-bordered w-full pl-10" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">휴대폰</span></label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 opacity-60" />
                  <input name="phone" type="tel" placeholder="010-0000-0000" className="input input-bordered w-full pl-10" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">비밀번호</span></label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 opacity-60" />
                  <input name="password" type={showPassword ? "text" : "password"} placeholder="비밀번호" className="input input-bordered w-full pl-10 pr-10" value={formData.password} onChange={handleChange} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 opacity-60">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">비밀번호 확인</span></label>
                <input name="confirmPassword" type="password" placeholder="비밀번호 확인" className="input input-bordered w-full" value={formData.confirmPassword} onChange={handleChange} />
              </div>

              <div className="space-y-2 pt-4">
                <label className="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" required />
                  <span className="label-text">[필수] 이용약관 동의</span>
                </label>
                <label className="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" required />
                  <span className="label-text">[필수] 개인정보 수집 및 이용 동의</span>
                </label>
                <label className="label cursor-pointer justify-start gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">[선택] 마케팅 정보 수신 동의</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg mt-6">회원가입</button>
            </form>

            <div className="text-center mt-4">
              <p className="text-sm opacity-60">
                이미 계정이 있으신가요?{" "}
                <button onClick={() => navigate("/login")} className="link link-primary">로그인</button>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-base-100 border-t py-6">
        <div className="text-center text-sm opacity-60">
          <p>© 606 Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
