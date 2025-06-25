import { Image } from "antd";
import logoMedium from "@/assets/denvio-logo.png";
export default function LogoMedium() {
  return (
    <Image
      src={logoMedium}
      alt="Logo Medium"
      preview={false}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
