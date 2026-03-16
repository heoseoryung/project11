import { Link, useNavigate } from "react-router";
import { Package, ShoppingCart, DollarSign, TrendingUp, LayoutDashboard, BoxIcon, ListOrdered } from "lucide-react";

export default function SellerDashboard() {
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen bg-base-200">
      {/* 헤더 */}
      <header className="py-4 text-white shadow-lg bg-primary">
        <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
          <button onClick={() => navigate("/")} className="text-2xl font-bold">606 판매자센터</button>
          <div className="flex items-center gap-4">
            <span>전인렬님</span>
            <button onClick={() => navigate("/")} className="btn btn-sm btn-ghost">쇼핑몰</button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 사이드바 */}
        <aside className="w-64 min-h-screen shadow-lg bg-base-100">
          <nav className="p-4 space-y-2">
            <Link to="/seller" className="justify-start w-full gap-2 btn btn-primary">
              <LayoutDashboard className="w-5 h-5" />
              대시보드
            </Link>
            <Link to="/seller/products" className="justify-start w-full gap-2 btn btn-ghost">
              <BoxIcon className="w-5 h-5" />
              상품관리
            </Link>
            <Link to="/seller/orders" className="justify-start w-full gap-2 btn btn-ghost">
              <ListOrdered className="w-5 h-5" />
              주문관리
            </Link>
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 p-8">
          <h1 className="mb-8 text-3xl font-bold">대시보드</h1>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="shadow stats">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div className="stat-title">오늘 매출</div>
                <div className="stat-value text-primary">2,345,000</div>
                <div className="stat-desc">원</div>
              </div>
            </div>

            <div className="shadow stats">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <div className="stat-title">오늘 주문</div>
                <div className="stat-value text-secondary">48</div>
                <div className="stat-desc">건</div>
              </div>
            </div>

            <div className="shadow stats">
              <div className="stat">
                <div className="stat-figure text-accent">
                  <Package className="w-8 h-8" />
                </div>
                <div className="stat-title">등록 상품</div>
                <div className="stat-value text-accent">156</div>
                <div className="stat-desc">개</div>
              </div>
            </div>

            <div className="shadow stats">
              <div className="stat">
                <div className="stat-figure text-success">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="stat-title">이번 달 매출</div>
                <div className="stat-value text-success">67.2M</div>
                <div className="stat-desc">↗︎ 12% 증가</div>
              </div>
            </div>
          </div>

          {/* 최근 주문 */}
          <div className="mb-8 shadow-xl card bg-base-100">
            <div className="card-body">
              <h2 className="card-title">최근 주문</h2>
              
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>주문번호</th>
                      <th>상품명</th>
                      <th>수량</th>
                      <th>금액</th>
                      <th>상태</th>
                      <th>주문일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ORD-2024-001</td>
                      <td>프리미엄 무선 헤드폰</td>
                      <td>2</td>
                      <td>178,000원</td>
                      <td><div className="badge badge-success">배송완료</div></td>
                      <td>2026.03.13</td>
                    </tr>
                    <tr>
                      <td>ORD-2024-002</td>
                      <td>최신형 노트북</td>
                      <td>1</td>
                      <td>1,299,000원</td>
                      <td><div className="badge badge-warning">배송중</div></td>
                      <td>2026.03.14</td>
                    </tr>
                    <tr>
                      <td>ORD-2024-003</td>
                      <td>스마트폰 프로</td>
                      <td>1</td>
                      <td>1,450,000원</td>
                      <td><div className="badge badge-info">배송준비</div></td>
                      <td>2026.03.14</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 인기 상품 */}
          <div className="shadow-xl card bg-base-100">
            <div className="card-body">
              <h2 className="card-title">인기 상품 TOP 5</h2>
              
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>상품명</th>
                      <th>판매량</th>
                      <th>매출</th>
                      <th>재고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>프리미엄 무선 헤드폰</td>
                      <td>234개</td>
                      <td>20,826,000원</td>
                      <td className="text-success">충분</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>최신형 노트북</td>
                      <td>156개</td>
                      <td>202,644,000원</td>
                      <td className="text-warning">부족</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>스마트폰 프로</td>
                      <td>189개</td>
                      <td>274,050,000원</td>
                      <td className="text-success">충분</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>뷰티 스킨케어 세트</td>
                      <td>567개</td>
                      <td>25,515,000원</td>
                      <td className="text-success">충분</td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>모던 인테리어 소파</td>
                      <td>78개</td>
                      <td>45,942,000원</td>
                      <td className="text-error">품절임박</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}