import { useState } from "react";
import { Package, ImageOff } from "lucide-react";

const CUTE_FALLBACKS = {
  cat: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0ZGQjNDNiIvPjxjaXJjbGUgY3g9IjM1IiBjeT0iNDUiIHI9IjUiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI2NSIgY3k9IjQ1IiByPSI1IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTQwIDYwIFE1MCA2NSA2MCA2MCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMzAgTDEwIDEwIiBzdHJva2U9IiNGRkIzQzYiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTgwIDMwIEw5MCAxMCIgc3Ryb2tlPSIjRkZCM0M2IiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
  box: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIyMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI0ZGRDdCMyIgcng9IjUiLz48cmVjdCB4PSIyMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNSIgZmlsbD0iI0ZGQzA4QiIgcng9IjUiLz48cmVjdCB4PSI0NSIgeT0iMjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyNSIgZmlsbD0iI0ZGNjk2OSIvPjxyZWN0IHg9IjIwIiB5PSIzNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUiIGZpbGw9IiNGRjY5NjkiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjU1IiByPSIzIiBmaWxsPSIjRkY2OTY5Ii8+PGNpcmNsZSBjeD0iNjUyIDU1IiByPSIzIiBmaWxsPSIjRkY2OTY5Ii8+PC9zdmc+',
};

export default function ImageWithFallback({ 
  src, 
  alt, 
  type = "cat", 
  showIcon = true, 
  className, 
  style, 
  ...rest 
}) {
  const [didError, setDidError] = useState(false);

  const handleError = () => setDidError(true);

  // 이미지가 없거나 에러 났을 때 보여줄 UI
  if (didError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-base-200 animate-in fade-in duration-500 ${className ?? ''}`}
        style={{ ...style, minHeight: '120px' }}
      >
        {/* 배경에 깔리는 귀여운 일러스트 */}
        <img 
          src={CUTE_FALLBACKS[type] || CUTE_FALLBACKS.cat} 
          alt="fallback" 
          className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity ${showIcon ? 'opacity-20 grayscale' : 'opacity-60'}`} 
        />

        {/* 앞에 강조될 아이콘과 텍스트 */}
        {showIcon && (
          <div className="z-10 flex flex-col items-center gap-1">
            <Package className="w-10 h-10 text-primary/50" strokeWidth={1.2} />
            <span className="text-[10px] font-black text-primary/60 tracking-tighter uppercase">No Image</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      onError={handleError}
      {...rest} 
    />
  );
}