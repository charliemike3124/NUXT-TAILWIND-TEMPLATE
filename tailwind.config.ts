const theme = {
  extend: {
    colors: {
      primary: "#292929",
      "accent-1": "#F44336",
      "accent-2": "#FFC107",
      "accent-3": "#4CAF50",
      "accent-4": "#2196F3",
      "primary-text": "#FFFFFF",
      "secondary-text": "#E0E0E0",
      "disabled-text": "#9E9E9E",
      "background-1": "#212121",
      "background-2": "#303030",
      "background-3": "#424242",
      "button-1": "#F44336",
      "button-2": "#FFC107",
      "button-3": "#4CAF50",
      "button-4": "#2196F3",
    },
  },
};

const cssRootVars = (() => {
  let css = ":root {\n";
  for (const colorKey in theme.extend.colors) {
    const colorValue = theme.extend.colors[colorKey];
    css += `  --${colorKey}: ${colorValue};`;
  }
  css += "}";

  return css;
})();

export default {
  theme,
  cssRootVars,
};
