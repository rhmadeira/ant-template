import { dark } from "@/shared/styles/theme/dark";
import { light } from "@/shared/styles/theme/light";

export const config = {
  themes: {
    light: {
      name: "light",
      // logoUrl: image,
      // logoCollapsedUrl: imageCollapsed,
      antd: light,
    },
    dark: {
      name: "dark",
      isDark: true,
      // logoUrl: imageDark,
      // logoCollapsedUrl: imageCollapsedDark,
      antd: dark,
    },
  },
};
