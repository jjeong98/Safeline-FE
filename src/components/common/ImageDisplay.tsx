import React from "react";

interface ImageDisplayProps {
  src: string; // 이미지 파일명 (예: '화재.png')
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt = "",
  style,
  className,
}) => {
  // public/image 폴더 기준 경로 생성
  const imagePath = `/image/${src}`;
  return <img src={imagePath} alt={alt} style={style} className={className} />;
};

export default ImageDisplay;
