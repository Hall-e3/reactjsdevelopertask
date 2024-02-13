"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
interface LogoProps {
  text?: string;
  logo?: React.ReactNode;
}

// reusable component for the logo, either the logo image or text is allowed, according to the design there is no logo but text

const Logo = ({ text, logo }: LogoProps) => {
  const router = useRouter();
  return (
    <div>
      {logo && <Image onClick={() => router.push("/")} src="/images/logo.png" alt="logo" className="cursor-pointer" height="100" width="100" />}
      {text && <h4>{text}</h4>}
    </div>
  );
};

export default Logo;
