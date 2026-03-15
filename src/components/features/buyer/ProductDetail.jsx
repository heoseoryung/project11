import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Star, Truck, ShoppingCart, Heart, Share2, ThumbsUp, Camera, X } from "lucide-react";
import Header from "../../product/Header";
import Footer from "../../product/Footer";
import ImageWithFallback from "../../common/ImageWithFallback";
import { toast } from "sonner";

const productData = {
  "1": {
    id: 1,
    name: "프리미엄 무선 헤드폰",
    price: 89000,
    originalPrice: 149000,
    discount: 40,
    rating: 4.8,
    reviews: 1523,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800"],
    isRocket: true,
    delivery: "내일(금) 3/15 도착 예정",
    options: ["블랙", "화이트", "블루"],
    description: "최고급 노이즈 캔슬링 기능을 탑재한 프리미엄 무선 헤드폰입니다.",
  },
  "2": {
    id: 2,
    name: "최신형 노트북 15.6인치",
    price: 1299000,
    originalPrice: 1599000,
    discount: 19,
    rating: 4.9,
    reviews: 2341,
    images: ["https://images.unsplash.com/photo-1760999187614-7a3b22a077d4?w=800"],
    isRocket: true,
    delivery: "내일(금) 3/15 도착 예정",
    options: ["8GB RAM", "16GB RAM", "32GB RAM"],
    description: "고성능 프로세서와 대용량 SSD를 탑재한 최신형 노트북입니다.",
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  
  // 리뷰 상태 관리
  const [reviews, setReviews] = useState([
    { 
      id: 1, 
      name: "최*우", 
      rating: 5, 
      date: "2026.03.10", 
      comment: "정말 만족스러운 제품입니다. 배송도 빠르고 품질도 우수해요!",
      images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"],
      likes: 24,
      liked: false
    },
    { 
      id: 2, 
      name: "성*열", 
      rating: 4, 
      date: "2026.03.09", 
      comment: "가격 대비 성능이 좋네요. 추천합니다!",
      images: [],
      likes: 12,
      liked: false
    },
    { 
      id: 3, 
      name: "강*종", 
      rating: 5, 
      date: "2026.03.08", 
      comment: "기대 이상입니다. 재구매 의향 있어요!",
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"],
      likes: 8,
      liked: false
    },
  ]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "", images: [] });
  const [isWritingReview, setIsWritingReview] = useState(false);

  const product = productData[id] || productData["1"];

  const handleLikeReview = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, liked: !review.liked, likes: review.liked ? review.likes - 1 : review.likes + 1 }
        : review
    ));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + newReview.images.length > 5) {
      toast.error("사진은 최대 5장까지 업로드 가능합니다!");
      return;
    }
    
    // 실제로는 파일을 서버에 업로드하지만, 여기서는 미리보기 URL 생성
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewReview(prev => ({
          ...prev,
          images: [...prev.images, e.target.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    setNewReview(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitReview = () => {
    if (!newReview.comment.trim()) {
      toast.error("리뷰 내용을 입력해주세요!");
      return;
    }
    
    const review = {
      id: reviews.length + 1,
      name: "구매*자",
      rating: newReview.rating,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace('.', ''),
      comment: newReview.comment,
      images: newReview.images,
      likes: 0,
      liked: false
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: "", images: [] });
    setIsWritingReview(false);
    toast.success("리뷰가 등록되었습니다!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Header />
      
      <main className="flex-1">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
            {/* 이미지 */}
            <div>
              <div className="relative overflow-hidden rounded-lg aspect-square bg-base-100">
                <ImageWithFallback src={product.images[0]} alt={product.name} className="object-cover w-full h-full" />
                {product.discount > 0 && (
                  <div className="absolute text-lg badge badge-error top-4 left-4">{product.discount}% 할인</div>
                )}
              </div>
            </div>

            {/* 정보 */}
            <div>
              {product.isRocket && (
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">빠른배송</span>
                  <div className="badge badge-outline">무료배송</div>
                </div>
              )}

              <h1 className="mb-4 text-2xl font-bold">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{product.rating}</span>
                <span className="opacity-60">| 리뷰 {product.reviews.toLocaleString()}개</span>
              </div>

              <div className="divider"></div>

              <div className="flex items-end gap-3 mb-2">
                {product.discount > 0 && (
                  <span className="text-3xl font-bold text-error">{product.discount}%</span>
                )}
                <span className="text-3xl font-bold">{product.price.toLocaleString()}원</span>
              </div>
              {product.originalPrice && (
                <div className="mb-6 line-through opacity-60">{product.originalPrice.toLocaleString()}원</div>
              )}

              <div className="divider"></div>

              {/* 배송 정보 */}
              <div className="mb-6 alert alert-info">
                <Truck className="w-5 h-5" />
                <span>{product.delivery}</span>
              </div>

              {/* 옵션 */}
              <div className="mb-6 form-control">
                <label className="label"><span className="font-bold label-text">옵션 선택</span></label>
                <div className="w-full join join-vertical lg:join-horizontal">
                  {product.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      className={`btn join-item ${selectedOption === idx ? "btn-primary" : "btn-outline"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* 수량 */}
              <div className="mb-6 form-control">
                <label className="label"><span className="font-bold label-text">수량</span></label>
                <div className="flex items-center gap-3">
                  <div className="join">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="btn join-item">-</button>
                    <button className="btn join-item">{quantity}</button>
                    <button onClick={() => setQuantity(quantity + 1)} className="btn join-item">+</button>
                  </div>
                  <span className="opacity-60">총 {(product.price * quantity).toLocaleString()}원</span>
                </div>
              </div>

              {/* 구매 버튼 */}
              <div className="flex gap-3">
                <button onClick={() => toast.success("장바구니에 담았습니다")} className="flex-1 gap-2 btn btn-outline">
                  <ShoppingCart className="w-5 h-5" />
                  장바구니
                </button>
                <button onClick={() => navigate("/checkout")} className="flex-1 btn btn-primary">
                  바로구매
                </button>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="btn btn-ghost btn-circle"><Heart className="w-5 h-5" /></button>
                <button className="btn btn-ghost btn-circle"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* 상세 정보 */}
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="상품설명" defaultChecked />
            <div role="tabpanel" className="p-6 tab-content bg-base-100 border-base-300 rounded-box">
              <h3 className="mb-4 text-xl font-bold">상품 상세 설명</h3>
              <p className="leading-relaxed opacity-70">{product.description}</p>
            </div>

            <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="리뷰" />
            <div role="tabpanel" className="p-6 tab-content bg-base-100 border-base-300 rounded-box">
              <h3 className="mb-4 text-xl font-bold">상품 리뷰</h3>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="card bg-base-200">
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="rating rating-sm">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <input key={star} type="radio" className="bg-yellow-400 mask mask-star-2" defaultChecked={star === review.rating} disabled />
                            ))}
                          </div>
                          <span className="font-medium">{review.name}</span>
                          <span className="text-sm opacity-60">{review.date}</span>
                        </div>
                        <button 
                          onClick={() => handleLikeReview(review.id)} 
                          className={`btn btn-sm gap-2 ${review.liked ? 'btn-primary' : 'btn-ghost'}`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${review.liked ? 'fill-current' : ''}`} />
                          <span>도움돼요 {review.likes}</span>
                        </button>
                      </div>
                      <p className="mb-3 opacity-70">{review.comment}</p>
                      {review.images.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                          {review.images.map((image, idx) => (
                            <div key={idx} className="overflow-hidden transition rounded-lg cursor-pointer aspect-square bg-base-300 hover:opacity-80">
                              <ImageWithFallback src={image} alt={`리뷰 이미지 ${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                {isWritingReview ? (
                  <div className="border-2 card bg-base-100 border-primary rounded-box">
                    <div className="card-body">
                      <h4 className="mb-2 font-bold">리뷰 작성</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium">별점:</span>
                        <div className="rating">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <input 
                              key={star} 
                              type="radio" 
                              name="rating-new"
                              className="bg-yellow-400 mask mask-star-2" 
                              checked={star === newReview.rating} 
                              onChange={() => setNewReview({ ...newReview, rating: star })} 
                            />
                          ))}
                        </div>
                      </div>
                      <textarea
                        className="w-full h-24 textarea textarea-bordered"
                        placeholder="이 상품에 대한 솔직한 리뷰를 작성해주세요"
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      ></textarea>
                      
                      {/* 사진 업로드 */}
                      <div className="mt-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="w-4 h-4" />
                          <span className="text-sm font-medium">사진 첨부 (최대 5장)</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                          {newReview.images.map((image, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-lg aspect-square bg-base-300">
                              <img src={image} alt={`업로드 ${idx + 1}`} className="object-cover w-full h-full" />
                              <button 
                                onClick={() => handleRemoveImage(idx)}
                                className="absolute top-1 right-1 btn btn-xs btn-circle btn-error"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          {newReview.images.length < 5 && (
                            <label className="flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer aspect-square bg-base-200 hover:bg-base-300">
                              <input 
                                type="file" 
                                accept="image/*" 
                                multiple 
                                className="hidden" 
                                onChange={handleImageUpload}
                              />
                              <Camera className="w-6 h-6 opacity-50" />
                            </label>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 mt-4">
                        <button onClick={() => {
                          setIsWritingReview(false);
                          setNewReview({ rating: 5, comment: "", images: [] });
                        }} className="btn btn-ghost">취소</button>
                        <button onClick={handleSubmitReview} className="btn btn-primary">등록</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setIsWritingReview(true)} className="gap-2 btn btn-primary btn-wide">
                    <Camera className="w-5 h-5" />
                    리뷰 작성하기
                  </button>
                )}
              </div>
            </div>

            <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="문의" />
            <div role="tabpanel" className="p-6 tab-content bg-base-100 border-base-300 rounded-box">
              <div className="py-12 text-center opacity-60">등록된 상품문의가 없습니다.</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
