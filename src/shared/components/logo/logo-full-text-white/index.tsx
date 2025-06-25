import { Image } from "antd";
import logoFull from "@/assets/denvio-text-white.png";

interface LogoFullProps {
  width?: string;
}
export default function LogoFullTextWhite({ width = "100%" }: LogoFullProps) {
  return (
    <Image
      src={logoFull}
      alt="Logo Full"
      preview={false}
      style={{ width: width, height: "auto" }}
    />
  );
}
