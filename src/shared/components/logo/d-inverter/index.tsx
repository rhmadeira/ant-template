import { Image } from "antd";
import logoDInverter from "@/assets/d-inverter.png";

interface DInverterProps {
  width?: string;
}
export default function DInverter({ width = "100%" }: DInverterProps) {
  return (
    <Image
      src={logoDInverter}
      alt="D Inverter Logo"
      preview={false}
      style={{ width: width, height: "auto" }}
    />
  );
}
