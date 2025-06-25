import { Image } from "antd";
import logoShort from "@/assets/logo-short.png";

export default function LogoShort() {
  return (
    <Image
      src={logoShort}
      alt="Logo Short"
      preview={false}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
