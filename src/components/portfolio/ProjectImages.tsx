'use client';

import { useState, useRef, useEffect } from 'react';

interface ProjectImagesProps {
  mainImage: string;
  images?: string[];
  title: string;
}

const ProjectImages = ({ mainImage, images, title }: ProjectImagesProps) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [imageLoaded, setImageLoaded] = useState<Set<string>>(new Set());
  const imgRefs = useRef<Map<string, HTMLImageElement>>(new Map());

  const handleImageError = (src: string) => {
    setImageErrors((prev) => new Set(prev).add(src));
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => new Set(prev).add(src));
  };

  const setImageRef = (src: string, element: HTMLImageElement | null) => {
    if (element) {
      imgRefs.current.set(src, element);
    }
  };

  // 檢查所有圖片的載入狀態
  useEffect(() => {
    const checkLoadedImages = () => {
      const allImages = [currentMainImage, ...(images || [])];
      allImages.forEach((src) => {
        if (!src) return;
        const img = imgRefs.current.get(src);
        if (img && img.complete && img.naturalHeight !== 0) {
          setImageLoaded((prev) => {
            // 使用函數式更新，檢查是否已經在 Set 中
            if (prev.has(src)) return prev;
            const newSet = new Set(prev);
            newSet.add(src);
            return newSet;
          });
        }
      });
    };
    
    // 使用 setTimeout 確保 DOM 已經渲染
    const timeoutId = setTimeout(checkLoadedImages, 0);
    
    return () => clearTimeout(timeoutId);
  }, [currentMainImage, images]); // 只在圖片列表改變時重新檢查

  return (
    <div className="mb-12">
      {currentMainImage ? (
        <div className="relative rounded-lg h-96 mb-4 overflow-hidden bg-gray-200">
          {!imageErrors.has(currentMainImage) ? (
            <>
              <img
                ref={(el) => setImageRef(currentMainImage, el)}
                src={currentMainImage}
                alt={`${title} - 主要專案圖片`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  imageLoaded.has(currentMainImage) ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onError={() => handleImageError(currentMainImage)}
                onLoad={() => handleImageLoad(currentMainImage)}
              />
              {!imageLoaded.has(currentMainImage) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              圖片載入失敗
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg h-96 mb-4 flex items-center justify-center">
          <span className="text-white">主要專案圖片</span>
        </div>
      )}

      {images && images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentMainImage(image);
                setImageErrors((prev) => {
                  const newSet = new Set(prev);
                  newSet.delete(image);
                  return newSet;
                });
              }}
              className="relative rounded-lg h-40 overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {!imageErrors.has(image) ? (
                <>
                  <img
                    ref={(el) => setImageRef(image, el)}
                    src={image}
                    alt={`${title} - 專案圖片 ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      imageLoaded.has(image) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onError={() => handleImageError(image)}
                    onLoad={() => handleImageLoad(image)}
                  />
                  {!imageLoaded.has(image) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  載入失敗
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImages;

