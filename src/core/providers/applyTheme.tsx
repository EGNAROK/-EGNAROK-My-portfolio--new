type ThemePalette = Record<string, any>;

export const applyTheme = (theme: ThemePalette) => {
  const root = document.documentElement;

  const flatten = (obj: ThemePalette, prefix = ""): Record<string, string> =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "object" && value !== null) {
        Object.assign(acc, flatten(value, newKey));
      } else {
        acc[newKey] = value;
      }
      return acc;
    }, {} as Record<string, string>);

  const flatTheme = flatten(theme);

  Object.entries(flatTheme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};
