import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Plus, Edit, Trash2, LayoutDashboard, BoxIcon, ListOrdered } from "lucide-react";
import { toast } from "sonner";

export default function SellerProducts() {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: "프리미엄 무선 헤드폰", price: 89000, stock: 45, status: "판매중", category: "전자기기" },
    { id: 2, name: "최신형 노트북 15.6인치", price: 1299000, stock: 12, status: "판매중", category: "전자기기" },
    { id: 3, name: "스마트폰 프로 모델", price: 1450000, stock: 8, status: "판매중", category: "전자기기" },
    { id: 4, name: "프리미엄 주방가전", price: 345000, stock: 23, status: "판매중", category: "가전" },
    { id: 5, name: "모던 인테리어 소파", price: 589000, stock: 5, status: "품절임박", category: "가구" },
    { id: 6, name: "뷰티 스킨케어 세트", price: 45000, stock: 156, status: "판매중", category: "뷰티" },
  ]);

  return (
    <div className="min-h-screen bg-base-200">
      <header className="bg-primary text-white py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="text-2xl font-bold">606 판매자센터</button>
          <div className="flex items-center gap-4">
            <span>홍길동 님</span>
            <button onClick={() => navigate("/")} className="btn btn-sm btn-ghost">쇼핑몰로</button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-base-100 min-h-screen shadow-lg">
          <nav className="p-4 space-y-2">
            <Link to="/seller" className="btn btn-ghost w-full justify-start gap-2">
              <LayoutDashboard className="w-5 h-5" />
              대시보드
            </Link>
            <Link to="/seller/products" className="btn btn-primary w-full justify-start gap-2">
              <BoxIcon className="w-5 h-5" />
              상품관리
            </Link>
            <Link to="/seller/orders" className="btn btn-ghost w-full justify-start gap-2">
              <ListOrdered className="w-5 h-5" />
              주문관리
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">상품관리</h1>
            <button onClick={() => toast.success("상품 등록 기능")} className="btn btn-primary gap-2">
              <Plus className="w-5 h-5" />
              상품 등록
            </button>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex gap-2 mb-4">
                <input type="text" placeholder="상품명 검색" className="input input-bordered flex-1" />
                <select className="select select-bordered">
                  <option>전체 카테고리</option>
                  <option>전자기기</option>
                  <option>가전</option>
                  <option>가구</option>
                  <option>뷰티</option>
                </select>
                <button className="btn btn-outline">검색</button>
              </div>

              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" className="checkbox" />
                      </th>
                      <th>상품명</th>
                      <th>카테고리</th>
                      <th>가격</th>
                      <th>재고</th>
                      <th>상태</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <input type="checkbox" className="checkbox" />
                        </td>
                        <td>
                          <div className="font-bold">{product.name}</div>
                        </td>
                        <td>{product.category}</td>
                        <td>{product.price.toLocaleString()}원</td>
                        <td>
                          <span className={product.stock < 10 ? "text-error font-bold" : ""}>
                            {product.stock}개
                          </span>
                        </td>
                        <td>
                          <div className={`badge ${product.status === "판매중" ? "badge-success" : "badge-warning"}`}>
                            {product.status}
                          </div>
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <button onClick={() => toast.success("수정 기능")} className="btn btn-sm btn-ghost">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button onClick={() => toast.error("삭제 기능")} className="btn btn-sm btn-ghost text-error">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline">선택 삭제</button>
                  <button className="btn btn-sm btn-outline">선택 판매중지</button>
                </div>

                <div className="join">
                  <button className="join-item btn btn-sm">«</button>
                  <button className="join-item btn btn-sm btn-active">1</button>
                  <button className="join-item btn btn-sm">2</button>
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