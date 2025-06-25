import { Image } from "antd";
import logoFull from "@/assets/denvio-logo-icon.png";
export default function LogoFull() {
  return (
    <Image
      src={logoFull}
      alt="Logo Full"
      preview={false}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
