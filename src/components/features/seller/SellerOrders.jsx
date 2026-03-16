import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search, LayoutDashboard, BoxIcon, ListOrdered } from "lucide-react";
import { toast } from "sonner";

export default function SellerOrders() {
  const navigate = useNavigate();
  const [orders] = useState([
    { id: "ORD-2024-001", product: "프리미엄 무선 헤드폰", customer: "서*원", quantity: 2, amount: 178000, status: "배송완료", date: "2026.03.13" },
    { id: "ORD-2024-002", product: "최신형 노트북", customer: "최*우", quantity: 1, amount: 1299000, status: "배송중", date: "2026.03.14" },
    { id: "ORD-2024-003", product: "스마트폰 프로", customer: "전*렬", quantity: 1, amount: 1450000, status: "배송준비", date: "2026.03.14" },
    { id: "ORD-2024-004", product: "뷰티 세트", customer: "서*령", quantity: 3, amount: 135000, status: "결제완료", date: "2026.03.14" },
    { id: "ORD-2024-005", product: "모던 소파", customer: "*민", quantity: 1, amount: 589000, status: "배송중", date: "2026.03.13" },
  ]);

  const getStatusBadge = (status) => {
    const badges = {
      "결제완료": "badge-info",
      "배송준비": "badge-warning",
      "배송중": "badge-primary",
      "배송완료": "badge-success",
    };
    return badges[status] || "badge-ghost";
  };

  return (
    <div className="min-h-screen bg-base-200">
      <header className="py-4 text-white shadow-lg bg-primary">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          <button onClick={() => navigate("/")} className="text-2xl font-bold">606 판매자센터</button>
          <div className="flex items-center gap-4">
            <span>전인렬</span>
            <button onClick={() => navigate("/")} className="btn btn-sm btn-ghost">쇼핑몰</button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 min-h-screen shadow-lg bg-base-100">
          <nav className="p-4 space-y-2">
            <Link to="/seller" className="justify-start w-full gap-2 btn btn-ghost">
              <LayoutDashboard className="w-5 h-5" />
              대시보드
            </Link>
            <Link to="/seller/products" className="justify-start w-full gap-2 btn btn-ghost">
              <BoxIcon className="w-5 h-5" />
              상품관리
            </Link>
            <Link to="/seller/orders" className="justify-start w-full gap-2 btn btn-primary">
              <ListOrdered className="w-5 h-5" />
              주문관리
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <h1 className="mb-8 text-3xl font-bold">주문관리</h1>

          {/* 주문 통계 */}
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-4">
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-title">결제완료</div>
                <div className="stat-value text-info">8</div>
              </div>
            </div>
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-title">배송준비</div>
                <div className="stat-value text-warning">12</div>
              </div>
            </div>
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-title">배송중</div>
                <div className="stat-value text-primary">23</div>
              </div>
            </div>
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-title">배송완료</div>
                <div className="stat-value text-success">156</div>
              </div>
            </div>
          </div>

          {/* 주문 목록 */}
          <div className="shadow-xl card bg-base-100">
            <div className="card-body">
              <div className="flex gap-2 mb-4">
                <div className="flex flex-1 gap-2">
                  <input type="text" placeholder="주문번호 또는 고객명 검색" className="flex-1 input input-bordered" />
                  <button className="gap-2 btn btn-outline">
                    <Search className="w-5 h-5" />
                    검색
                  </button>
                </div>
                <select className="select select-bordered">
                  <option>전체 상태</option>
                  <option>결제완료</option>
                  <option>배송준비</option>
                  <option>배송중</option>
                  <option>배송완료</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" className="checkbox" />
                      </th>
                      <th>주문번호</th>
                      <th>상품명</th>
                      <th>고객명</th>
                      <th>수량</th>
                      <th>금액</th>
                      <th>상태</th>
                      <th>주문일</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" className="checkbox" />
                        </td>
                        <td className="font-mono text-sm">{order.id}</td>
                        <td>{order.product}</td>
                        <td>{order.customer}</td>
                        <td>{order.quantity}개</td>
                        <td className="font-bold">{order.amount.toLocaleString()}원</td>
                        <td>
                          <div className={`badge ${getStatusBadge(order.status)}`}>
                            {order.status}
                          </div>
                        </td>
                        <td>{order.date}</td>
                        <td>
                          <button onClick={() => toast.success("상세보기")} className="btn btn-sm btn-outline">
                            상세
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button onClick={() => toast.success("배송 처리")} className="btn btn-sm btn-outline">선택 배송처리</button>
                  <button className="btn btn-sm btn-outline">엑셀 다운로드</button>
                </div>

                <div className="join">
                  <button className="join-item btn btn-sm">«</button>
                  <button className="join-item btn btn-sm btn-active">1</button>
                  <button className="join-item btn btn-sm">2</button>
                  <button className="join-item btn btn-sm">3</button>
                  <button className="join-item btn btn-sm">»</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}