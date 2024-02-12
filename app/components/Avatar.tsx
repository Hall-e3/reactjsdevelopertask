"use client";

import Image from "next/image";

interface AvatarProps {
  src: string;
  styles?: string;
  height?: number;
  width?: number;
  alt: string;
}

const Avatar = ({ src, styles, height, width, alt }: AvatarProps) => {
  return <Image src={src} className={styles} height={height} width={width} alt={alt} />;
};

export default Avatar;
