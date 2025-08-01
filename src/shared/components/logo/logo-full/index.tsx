import { Image } from "antd";
import logoFull from "@/assets/denvio-logo-icon.png";

interface LogoFullProps {
  width?: string;
}
export default function LogoFull({ width = "100%" }: LogoFullProps) {
  return (
    <Image
      src={logoFull}
      alt="Logo Full"
      preview={false}
      style={{ width: width, height: "auto" }}
    />
  );
}
