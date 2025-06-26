import { Image } from "antd";
import logoMedium from "@/assets/denvio-logo.png";

interface ILogoMediumProps {
  width?: string | number;
}

export default function LogoMedium({ width = "100%" }: ILogoMediumProps) {
  return (
    <Image
      src={logoMedium}
      alt="Logo Medium"
      preview={false}
      style={{ width, height: "auto" }}
    />
  );
}
