import { useState } from "react";
import { useNavigate } from "react-router";
import { Trash2, Truck, ShoppingBag, Zap, Package } from "lucide-react";
import Header from "../product/Header";
import Footer from "../product/Footer";
import ImageWithFallback  from "../common/ImageWithFallback";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "프리미엄 무선 헤드폰",
      price: 89000,
      originalPrice: 149000,
      discount: 40,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200",
      option: "블랙",
      isRocket: true,
    },
    {
      id: 2,
      name: "최신형 노트북 15.6인치",
      price: 1299000,
      originalPrice: 1599000,
      discount: 19,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1760999187614-7a3b22a077d4?w=200",
      option: "16GB RAM",
      isRocket: true,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0);
  const totalDiscount = originalTotal - total;
  const deliveryFee = total >= 19800 ? 0 : 3000;
  const finalTotal = total + deliveryFee;

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Header />
      
      <main className="flex-1">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          {/* 헤더 */}
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-8 h-8 text-[#FF4D00]" />
            <h1 className="text-3xl font-bold text-white">장바구니</h1>
            <span className="text-lg text-gray-400">({cartItems.length})</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="mb-6 text-lg text-gray-400">장바구니가 비어있습니다</p>
              <button onClick={() => navigate("/")} className="bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                쇼핑 시작하기
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* 왼쪽: 상품 리스트 */}
              <div className="space-y-4 lg:col-span-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 transition-all bg-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/20">
                    <div className="flex gap-6">
                      <div className="relative flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-32 h-32 rounded-xl"
                        />
                        {item.discount > 0 && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                            {item.discount}%
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {item.isRocket && (
                          <div className="flex items-center gap-1 text-[#22C55E] text-sm font-bold mb-2">
                            <Truck className="w-4 h-4" />
                            <span>빠른배송</span>
                          </div>
                        )}
                        <h3 className="mb-1 text-lg font-bold text-black line-clamp-2">{item.name}</h3>
                        <p className="mb-3 text-sm text-gray-500">옵션: {item.option}</p>
                        
                        <div className="flex items-center gap-2 mb-4">
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">{item.originalPrice.toLocaleString()}원</span>
                          )}
                          <span className="text-[#FF1E00] font-bold text-xl">{item.price.toLocaleString()}원</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
                            <button onClick={() => updateQuantity(item.id, -1)} className="flex items-center justify-center w-8 h-8 font-bold text-black transition-colors rounded hover:bg-gray-200">
                              -
                            </button>
                            <span className="w-12 font-bold text-center text-black">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="flex items-center justify-center w-8 h-8 font-bold text-black transition-colors rounded hover:bg-gray-200">
                              +
                            </button>
                          </div>

                          <div className="text-2xl font-bold text-black">
                            {(item.price * item.quantity).toLocaleString()}원
                          </div>
                        </div>
                      </div>

                      <button onClick={() => removeItem(item.id)} className="flex-shrink-0 p-2 transition-colors rounded-lg hover:bg-gray-100 h-fit">
                        <Trash2 className="w-5 h-5 text-gray-400 transition-colors hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 오른쪽: 주문 요약 */}
              <div className="lg:col-span-1">
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 sticky top-[160px]">
                  <h2 className="mb-6 text-xl font-bold text-white">결제 예상 금액</h2>

                  <div className="mb-6 space-y-4">
                    <div className="flex justify-between text-gray-400">
                      <span>상품금액</span>
                      <span className="font-medium text-white">{originalTotal.toLocaleString()}원</span>
                    </div>
                    
                    {totalDiscount > 0 && (
                      <div className="flex justify-between text-[#FF1E00]">
                        <span>할인금액</span>
                        <span className="font-bold">-{totalDiscount.toLocaleString()}원</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-400">
                      <span>배송비</span>
                      <span className={deliveryFee === 0 ? "text-[#22C55E] font-bold" : "text-white font-medium"}>
                        {deliveryFee === 0 ? "무료" : `${deliveryFee.toLocaleString()}원`}
                      </span>
                    </div>
                    
                    {total < 19800 && deliveryFee > 0 && (
                      <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-3">
                        <p className="text-sm text-gray-400">
                          <span className="text-[#FF4D00] font-bold">{(19800 - total).toLocaleString()}원</span> 더 담으면 무료배송! 🚚
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-[#2A2A2A] pt-6 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">최종 결제금액</span>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-black bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] bg-clip-text text-transparent">
                        {finalTotal.toLocaleString()}
                      </span>
                      <span className="text-2xl font-bold text-white">원</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate("/checkout")} 
                    className="w-full bg-gradient-to-r from-[#FF4D00] to-[#FF1E00] text-white py-4 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 mb-3 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    지금 바로 주문하기
                  </button>
                  
                  <button 
                    onClick={() => navigate("/")} 
                    className="w-full bg-[#2A2A2A] border border-[#3A3A3A] text-white py-3 rounded-xl font-bold hover:bg-[#3A3A3A] transition-all"
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}