const theme = {
  extend: {
    colors: {
      primary: "#001528",
      "accent-1": "#002B5C",
      "accent-2": "#FFB100",
      "accent-3": "#00A74D",
      "accent-4": "#0077CA",
      "primary-text": "#FFFFFF",
      "secondary-text": "#D3D3D3",
      "disabled-text": "#A0A0A0",
      "background-1": "#001528",
      "background-2": "#303030",
      "background-3": "#424242",
      "button-1": "#FF4747",
      "button-2": "#FFB100",
      "button-3": "#00A74D",
      "button-4": "#0077CA",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

const cssRootVars = (() => {
  let css = ":root {\n";
  for (const colorKey in theme.extend.colors) {
    const colorValue = theme.extend.colors[colorKey];
    css += `  --${colorKey}: ${colorValue};\n`;
  }

  for (const screenKey in theme.screens) {
    const screenValue = theme.screens[screenKey];
    css += `  --${screenKey}: ${screenValue};\n`;
  }

  css += "}";

  return css;
})();


export default {
  theme,
  cssRootVars,
};
