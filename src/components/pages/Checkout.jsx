import { useNavigate } from "react-router";
import { CreditCard, Truck } from "lucide-react";
import Header from "../product/Header";
import Footer from "../product/Footer";
import { toast } from "sonner";

export default function Checkout() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    toast.success("주문이 완료되었습니다!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">주문/결제</h1>

          <form onSubmit={handlePayment} className="space-y-6">
            {/* 배송지 정보 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  배송지 정보
                </h2>
                
                <div className="space-y-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text">받는 분</span></label>
                    <input type="text" placeholder="이름" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text">휴대폰</span></label>
                    <input type="tel" placeholder="010-0000-0000" className="input input-bordered" required />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text">주소</span></label>
                    <div className="flex gap-2">
                      <input type="text" placeholder="우편번호" className="input input-bordered flex-1" />
                      <button type="button" className="btn btn-outline">검색</button>
                    </div>
                    <input type="text" placeholder="기본 주소" className="input input-bordered mt-2" required />
                    <input type="text" placeholder="상세 주소" className="input input-bordered mt-2" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label"><span className="label-text">배송 요청사항</span></label>
                    <textarea className="textarea textarea-bordered" placeholder="배송 시 요청사항을 입력하세요"></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* 결제 정보 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  결제 수단
                </h2>
                
                <div className="space-y-2">
                  <label className="label cursor-pointer justify-start gap-3 border rounded-lg p-4 hover:bg-base-200">
                    <input type="radio" name="payment" className="radio" defaultChecked />
                    <span>신용카드</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-3 border rounded-lg p-4 hover:bg-base-200">
                    <input type="radio" name="payment" className="radio" />
                    <span>무통장입금</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-3 border rounded-lg p-4 hover:bg-base-200">
                    <input type="radio" name="payment" className="radio" />
                    <span>네이버페이</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-3 border rounded-lg p-4 hover:bg-base-200">
                    <input type="radio" name="payment" className="radio" />
                    <span>카카오페이</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 주문 요약 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">최종 결제금액</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>상품금액</span>
                    <span>1,388,000원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>배송비</span>
                    <span className="text-success">무료</span>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">총 결제금액</span>
                    <span className="font-bold text-2xl text-primary">1,388,000원</span>
                  </div>
                </div>

                <div className="alert alert-info mt-4">
                  <span className="text-sm">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</span>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full mt-4">
                  1,388,000원 결제하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
