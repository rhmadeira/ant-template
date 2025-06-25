import { dark } from "@/shared/theme/dark";
import { light } from "@/shared/theme/light";

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
