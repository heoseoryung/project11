import { useParams, Link } from "react-router";
import { Star, Truck, SlidersHorizontal } from "lucide-react";
import Header from "../product/Header";
import Footer from "../product/Footer";
import ImageWithFallback from "../common/ImageWithFallback";

const categoryNames = {
  fashion: "패션의류",
  beauty: "뷰티",
  food: "식품",
  electronics: "가전디지털",
  furniture: "가구/인테리어",
  baby: "출산/유아동",
  sports: "스포츠",
  books: "도서/음반",
};

const products = [
  { id: 1, name: "프리미엄 후드티", price: 39000, originalPrice: 59000, discount: 33, rating: 4.8, reviews: 523, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", isRocket: true },
  { id: 2, name: "슬림핏 청바지", price: 49000, originalPrice: 79000, discount: 38, rating: 4.7, reviews: 892, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", isRocket: true },
  { id: 3, name: "니트 가디건", price: 45000, rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
  { id: 4, name: "캐주얼 셔츠", price: 29000, originalPrice: 49000, discount: 41, rating: 4.9, reviews: 1234, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400", isRocket: true },
  { id: 5, name: "롱 코트", price: 89000, originalPrice: 159000, discount: 44, rating: 4.8, reviews: 456, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400", isRocket: true },
  { id: 6, name: "스웨터", price: 35000, rating: 4.5, reviews: 678, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" },
  { id: 7, name: "티셔츠 3종 세트", price: 25000, originalPrice: 45000, discount: 44, rating: 4.9, reviews: 2341, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", isRocket: true },
  { id: 8, name: "원피스", price: 59000, originalPrice: 89000, discount: 34, rating: 4.7, reviews: 891, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", isRocket: true },
  { id: 9, name: "블레이저 자켓", price: 79000, rating: 4.6, reviews: 345, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400" },
  { id: 10, name: "치노 팬츠", price: 42000, originalPrice: 65000, discount: 35, rating: 4.8, reviews: 567, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400", isRocket: true },
  { id: 11, name: "데님 자켓", price: 69000, rating: 4.7, reviews: 432, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
  { id: 12, name: "맨투맨", price: 33000, originalPrice: 55000, discount: 40, rating: 4.9, reviews: 1567, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400", isRocket: true },
];

export default function CategoryProducts() {
  const { category } = useParams();
  const categoryName = categoryNames[category] || "전체상품";

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
              <p className="opacity-60">총 {products.length}개 상품</p>
            </div>
            
            <button className="btn btn-outline gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              필터
            </button>
          </div>

          {/* 정렬 옵션 */}
          <div className="flex gap-2 mb-6">
            <button className="btn btn-sm btn-primary">추천순</button>
            <button className="btn btn-sm btn-outline">인기순</button>
            <button className="btn btn-sm btn-outline">낮은가격순</button>
            <button className="btn btn-sm btn-outline">높은가격순</button>
            <button className="btn btn-sm btn-outline">최신순</button>
          </div>

          {/* 상품 목록 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                  <figure className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                    {product.discount > 0 && (
                      <div className="badge badge-error absolute top-2 left-2 text-white">
                        {product.discount}%
                      </div>
                    )}
                  </figure>
                  
                  <div className="card-body p-4">
                    {product.isRocket && (
                      <div className="flex items-center gap-1 text-primary text-sm">
                        <Truck className="w-4 h-4" />
                        <span>빠른배송</span>
                      </div>
                    )}
                    
                    <h3 className="text-sm line-clamp-2 h-10">{product.name}</h3>
                    
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs opacity-60">({product.reviews.toLocaleString()})</span>
                    </div>
                    
                    <div className="flex items-end gap-2">
                      {product.discount > 0 && (
                        <span className="text-error font-bold text-lg">{product.discount}%</span>
                      )}
                      <span className="font-bold text-lg">{product.price.toLocaleString()}원</span>
                    </div>
                    
                    {product.originalPrice && (
                      <span className="text-sm opacity-60 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center mt-8">
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn btn-active">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">4</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
