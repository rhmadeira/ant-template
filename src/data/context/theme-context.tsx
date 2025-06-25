import { ConfigProvider } from "antd";
import ptBR from "antd/es/locale/pt_BR";
import { StyleProvider } from "@ant-design/cssinjs";
import { useThemeStore } from "@/data/stores/theme-store";

interface IThemeContextProps {
  children: React.ReactNode;
}
export default function ThemeContext({ children }: IThemeContextProps) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ConfigProvider locale={ptBR} theme={theme}>
      <StyleProvider layer hashPriority="high">
        {children}
      </StyleProvider>
    </ConfigProvider>
  );
}
