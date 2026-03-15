import { Star, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import Header from "../product/Header";
import Footer from "../product/Footer";
import ImageWithFallback from "../common/ImageWithFallback";

const banners = [
  {
    id: 1,
    title: "봄 신상 특가전",
    subtitle: "최대 70% 할인",
    image: "https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?w=1200",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 2,
    title: "가전제품 대축제",
    subtitle: "쿠폰 최대 10만원",
    image: "https://images.unsplash.com/photo-1707485122968-56916bd2c464?w=1200",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "슈퍼 세일",
    subtitle: "전 품목 특가",
    image: "https://images.unsplash.com/photo-1768839721483-c4501b5d6eb3?w=1200",
    color: "from-purple-600 to-pink-500",
  },
];

const products = [
  {
    id: 1,
    name: "프리미엄 무선 헤드폰",
    price: 89000,
    originalPrice: 149000,
    discount: 40,
    rating: 4.8,
    reviews: 1523,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
    isRocket: true,
    isBest: true,
  },
  {
    id: 2,
    name: "최신형 노트북 15.6인치",
    price: 1299000,
    originalPrice: 1599000,
    discount: 19,
    rating: 4.9,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1760999187614-7a3b22a077d4?w=400",
    isRocket: true,
    isBest: true,
  },
  {
    id: 3,
    name: "스마트폰 프로 모델",
    price: 1450000,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1741061961703-0739f3454314?w=400",
    isRocket: true,
  },
  {
    id: 4,
    name: "프리미엄 주방가전 세트",
    price: 345000,
    originalPrice: 499000,
    discount: 31,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?w=400",
  },
  {
    id: 5,
    name: "모던 인테리어 소파",
    price: 589000,
    originalPrice: 890000,
    discount: 34,
    rating: 4.8,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1702865071803-cb154cd45f48?w=400",
    isRocket: true,
  },
  {
    id: 6,
    name: "뷰티 스킨케어 세트",
    price: 45000,
    originalPrice: 78000,
    discount: 42,
    rating: 4.9,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1630331811881-58a6f87bf7f2?w=400",
    isRocket: true,
    isBest: true,
  },
  {
    id: 7,
    name: "게이밍 키보드",
    price: 129000,
    originalPrice: 189000,
    discount: 32,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
    isRocket: true,
  },
  {
    id: 8,
    name: "블루투스 스피커",
    price: 89000,
    rating: 4.5,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
  },
  {
    id: 9,
    name: "캠핑 의자 세트",
    price: 79000,
    originalPrice: 129000,
    discount: 39,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    isRocket: true,
  },
  {
    id: 10,
    name: "디지털 카메라",
    price: 890000,
    originalPrice: 1190000,
    discount: 25,
    rating: 4.9,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1606933248010-ef1bea5e7f3f?w=400",
    isRocket: true,
  },
  {
    id: 11,
    name: "요가 매트",
    price: 35000,
    rating: 4.4,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
  },
  {
    id: 12,
    name: "텀블러",
    price: 25000,
    originalPrice: 45000,
    discount: 44,
    rating: 4.8,
    reviews: 2145,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    isRocket: true,
  },
  {
    id: 13,
    name: "백팩",
    price: 89000,
    originalPrice: 139000,
    discount: 36,
    rating: 4.7,
    reviews: 891,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    isRocket: true,
  },
  {
    id: 14,
    name: "스마트워치",
    price: 349000,
    rating: 4.6,
    reviews: 1523,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
  },
  {
    id: 15,
    name: "무선 마우스",
    price: 45000,
    originalPrice: 69000,
    discount: 35,
    rating: 4.8,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    isRocket: true,
  },
  {
    id: 16,
    name: "LED 스탠드",
    price: 59000,
    originalPrice: 89000,
    discount: 34,
    rating: 4.5,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  },
  {
    id: 17,
    name: "러닝화",
    price: 129000,
    originalPrice: 189000,
    discount: 32,
    rating: 4.9,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    isRocket: true,
    isBest: true,
  },
  {
    id: 18,
    name: "선글라스",
    price: 79000,
    rating: 4.3,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
  },
  {
    id: 19,
    name: "전기면도기",
    price: 149000,
    originalPrice: 229000,
    discount: 35,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1499689496495-5f2be90b50c5?w=400",
    isRocket: true,
  },
  {
    id: 20,
    name: "공기청정기",
    price: 289000,
    originalPrice: 399000,
    discount: 28,
    rating: 4.8,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
    isRocket: true,
  },
];

const circleDeals = [
  {
    id: 1,
    title: "맨투맨 3종",
    discount: 76,
    price: 14530,
    originalPrice: 60000,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300",
    badge: "26",
  },
  {
    id: 2,
    title: "다이어리 세트",
    discount: 30,
    price: 19600,
    originalPrice: 28000,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300",
    badge: "27",
  },
  {
    id: 3,
    title: "최나구 과자 세트",
    discount: 69,
    price: 16900,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=300",
    badge: "28",
  },
  {
    id: 4,
    title: "겨울 패딩",
    discount: 25,
    price: 8250,
    originalPrice: 11000,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300",
    badge: "29",
  },
  {
    id: 5,
    title: "학습교재 세트",
    discount: 30,
    price: 54600,
    originalPrice: 78000,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300",
    badge: "30",
  },
  {
    id: 6,
    title: "무선 이어폰",
    discount: 45,
    price: 89000,
    originalPrice: 162000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300",
    badge: "31",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      
      {/* 3단 헤더 높이만큼 정확하게 패딩 추가 (프레임 겹침 해결) */}
      <main className="flex-1 pt-[160px]">
        {/* 메인 배너 슬라이드 */}
        <section className="py-8 bg-neutral">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="relative w-full overflow-hidden carousel rounded-2xl h-80">
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`carousel-item w-full absolute transition-all duration-700 ${
                    currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className={`bg-gradient-to-r ${banner.color} w-full p-12 flex items-center justify-between relative overflow-hidden`}>
                    <div className="z-10">
                      <h2 className="mb-3 text-5xl font-bold text-white">{banner.title}</h2>
                      <p className="mb-6 text-2xl text-white/90">{banner.subtitle}</p>
                      <button className="px-6 py-3 font-bold transition-transform bg-white shadow-lg text-neutral rounded-xl hover:scale-105">
                        지금 쇼핑하기
                      </button>
                    </div>
                    <ImageWithFallback
                      src={banner.image}
                      alt={banner.title}
                      className="absolute top-0 right-0 object-cover w-1/2 h-full opacity-30"
                    />
                  </div>
                </div>
              ))}
              
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
                className="absolute z-20 p-2 text-white transition-all -translate-y-1/2 border rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm left-4 top-1/2 border-white/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
                className="absolute z-20 p-2 text-white transition-all -translate-y-1/2 border rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm right-4 top-1/2 border-white/30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute z-20 flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === index ? "bg-white w-8" : "bg-white/50 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 지금 제일 잘 나가는 상품 - 원형 슬라이드 */}
        <section className="py-12 bg-neutral border-t border-[#1A1A1A]">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">지금 제일 잘 나가는 상품</h2>
              <button className="text-sm bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent font-bold hover:opacity-80 transition-opacity">전체보기 →</button>
            </div>

            <div className="relative">
              <div className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide">
                {circleDeals.map((deal) => (
                  <Link 
                    key={deal.id} 
                    to={`/product/${deal.id}`}
                    className="flex-shrink-0 w-36 group"
                  >
                    <div className="relative">
                      <div className="relative overflow-hidden transition-all duration-300 rounded-full shadow-lg w-36 h-36 group-hover:shadow-2xl group-hover:shadow-orange-500/50 group-hover:scale-110">
                        <ImageWithFallback
                          src={deal.image}
                          alt={deal.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full shadow-lg top-2 left-2 bg-trust">
                          {deal.badge}
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="mb-1 text-xs font-medium text-white line-clamp-2">{deal.title}</p>
                        <p className="mb-1 text-xs text-gray-500 line-through">{deal.originalPrice.toLocaleString()}원</p>
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-[#FF1E00] font-bold text-sm">{deal.discount}%</span>
                          <span className="text-sm font-bold text-white">{deal.price.toLocaleString()}원</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-400">무료배송</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 추천 상품 */}
        <section className="py-12 bg-neutral border-t border-[#1A1A1A]">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">🔥 오늘의 추천</h2>
              <button className="text-sm bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent font-bold hover:opacity-80 transition-opacity">더보기 →</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="overflow-hidden transition-all duration-300 bg-white rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 hover:-translate-y-2">
                    <figure className="relative overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full transition-transform duration-500 aspect-square group-hover:scale-110"
                      />
                      {product.discount > 0 && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                          {product.discount}%
                        </div>
                      )}
                      {product.isBest && (
                        <div className="absolute px-2 py-1 text-xs font-bold text-white rounded shadow-lg top-2 right-2 bg-warning">
                          베스트
                        </div>
                      )}
                    </figure>
                    
                    <div className="p-4">
                      {product.isRocket && (
                        <div className="flex items-center gap-1 mb-2 text-xs font-bold text-trust">
                          <Truck className="w-3 h-3" />
                          <span>빠른배송</span>
                        </div>
                      )}
                      
                      <h3 className="h-10 mb-2 text-sm font-medium line-clamp-2 text-neutral">{product.name}</h3>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 fill-warning text-warning" />
                        <span className="text-xs font-medium text-neutral">{product.rating}</span>
                        <span className="text-xs text-gray-400">({product.reviews.toLocaleString()})</span>
                      </div>
                      
                      <div className="flex items-baseline gap-2">
                        {product.discount > 0 && (
                          <span className="text-[#FF1E00] font-bold text-base">{product.discount}%</span>
                        )}
                        <span className="text-base font-bold text-neutral">{product.price.toLocaleString()}원</span>
                      </div>
                      
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.originalPrice.toLocaleString()}원
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 카테고리별 추천 */}
        <section className="py-12 bg-neutral border-t border-[#1A1A1A]">
          <div className="px-6 mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-bold text-white">카테고리별 추천</h2>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {[
                { name: "패션의류", path: "fashion", emoji: "👗" },
                { name: "뷰티", path: "beauty", emoji: "💄" },
                { name: "식품", path: "food", emoji: "🍱" },
                { name: "가전디지털", path: "electronics", emoji: "📱" },
                { name: "가구/인테리어", path: "furniture", emoji: "🛋️" },
                { name: "출산/유아동", path: "baby", emoji: "👶" },
              ].map((category) => (
                <Link
                  key={category.path}
                  to={`/category/${category.path}`}
                  className="bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#2A2A2A] rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 group"
                >
                  <div className="mb-3 text-4xl transition-transform group-hover:scale-110">{category.emoji}</div>
                  <span className="text-sm font-medium text-white">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}