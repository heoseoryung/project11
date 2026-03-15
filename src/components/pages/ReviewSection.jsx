import { useState } from "react";
import { ThumbsUp, Camera, X, Star } from "lucide-react";
import { toast } from "sonner"; // 아까 설치한 sonner 사용

// --- 서브 컴포넌트: 리뷰 아이템 ---
const ReviewItem = ({ review, onLike }) => (
  <div className="card bg-base-200 shadow-sm mb-4">
    <div className="card-body p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="font-bold text-sm">{review.name}</span>
          <span className="text-xs opacity-50">{review.date}</span>
        </div>
        <button 
          onClick={() => onLike(review.id)} 
          className={`btn btn-xs sm:btn-sm gap-2 ${review.liked ? 'btn-primary' : 'btn-outline opacity-70'}`}
        >
          <ThumbsUp size={14} className={review.liked ? 'fill-current' : ''} />
          도움돼요 {review.likes}
        </button>
      </div>
      <p className="text-sm leading-relaxed mb-4">{review.comment}</p>
      {review.images?.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {review.images.map((img, idx) => (
            <img key={idx} src={img} alt="리뷰" className="w-20 h-20 object-cover rounded-lg border border-base-300" />
          ))}
        </div>
      )}
    </div>
  </div>
);

// --- 메인 컴포넌트 ---
export default function ReviewSection() {
  const [reviews, setReviews] = useState([/* 기존 데이터... */]);
  const [isWriting, setIsWriting] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "", images: [] });

  // 좋아요 핸들러
  const handleLike = (id) => {
    setReviews(prev => prev.map(r => 
      r.id === id ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 } : r
    ));
  };

  // 이미지 업로드 (URL 방식)
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (newReview.images.length + files.length > 5) return toast.error("최대 5장까지만 가능해요!");

    const newImages = files.map(file => URL.createObjectURL(file));
    setNewReview(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  const handleRemoveImage = (index) => {
    setNewReview(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  };

  const handleSubmit = () => {
    if (!newReview.comment.trim()) return toast.error("내용을 입력해주세요.");
    
    const reviewData = {
      ...newReview,
      id: Date.now(),
      name: "구매자",
      date: new Date().toLocaleDateString(),
      likes: 0,
      liked: false
    };

    setReviews([reviewData, ...reviews]);
    setIsWriting(false);
    setNewReview({ rating: 5, comment: "", images: [] });
    toast.success("리뷰 등록 완료!");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">상품 리뷰 ({reviews.length})</h3>
        {!isWriting && (
          <button onClick={() => setIsWriting(true)} className="btn btn-primary btn-sm">리뷰 쓰기</button>
        )}
      </div>

      {/* 리뷰 작성 폼 */}
      {isWriting && (
        <div className="bg-base-100 border-2 border-primary rounded-xl p-4 mb-8 shadow-lg">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(s => (
              <Star 
                key={s} 
                className="cursor-pointer transition-transform hover:scale-110" 
                fill={s <= newReview.rating ? "#facc15" : "none"} 
                color="#facc15"
                onClick={() => setNewReview({...newReview, rating: s})}
              />
            ))}
          </div>
          <textarea 
            className="textarea textarea-bordered w-full h-28 mb-3" 
            placeholder="상세한 후기를 남겨주세요!"
            value={newReview.comment}
            onChange={e => setNewReview({...newReview, comment: e.target.value})}
          />
          
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {newReview.images.map((img, i) => (
              <div key={i} className="relative shrink-0">
                <img src={img} className="w-16 h-16 object-cover rounded-md" alt="preview" />
                <button onClick={() => handleRemoveImage(i)} className="absolute -top-1 -right-1 bg-error text-white rounded-full p-0.5"><X size={12}/></button>
              </div>
            ))}
            {newReview.images.length < 5 && (
              <label className="w-16 h-16 border-2 border-dashed border-base-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-base-200">
                <input type="file" hidden multiple accept="image/*" onChange={handleImageUpload} />
                <Camera size={20} className="opacity-40" />
              </label>
            )}
          </div>
          
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsWriting(false)} className="btn btn-ghost btn-sm">취소</button>
            <button onClick={handleSubmit} className="btn btn-primary btn-sm">등록</button>
          </div>
        </div>
      )}

      {/* 리뷰 목록 */}
      <div className="space-y-4">
        {reviews.map(r => <ReviewItem key={r.id} review={r} onLike={handleLike} />)}
      </div>
    </div>
  );
}