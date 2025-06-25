import { Image } from "antd";
import logoFull from "@/assets/denvio-white.jpg";

interface LogoFullProps {
  width?: string;
}
export default function LogoFullWhite({ width = "100%" }: LogoFullProps) {
  return (
    <Image
      src={logoFull}
      alt="Logo Full"
      preview={false}
      style={{ width: width, height: "auto" }}
    />
  );
}
