const theme = {
    extend: {
        colors: {
            primary: {
                50: "#eff6ff",
                100: "#dbeafe",
                200: "#bfdbfe",
                300: "#93c5fd",
                400: "#60a5fa",
                500: "#3b82f6",
                600: "#2563eb",
                700: "#1d4ed8",
                800: "#1e40af",
                900: "#1e3a8a",
            },
            secondary: {
                50: "#f8fafc",
                100: "#f1f5f9",
                200: "#e2e8f0",
                300: "#cbd5e1",
                400: "#94a3b8",
                500: "#64748b",
                600: "#475569",
                700: "#334155",
                800: "#1e293b",
                900: "#0f172a",
            },
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
        if (typeof colorValue === "object") {
            for (const shadeKey in colorValue) {
                const shadeValue = colorValue[shadeKey];
                css += `  --${colorKey}-${shadeKey}: ${shadeValue};\n`;
            }
        } else {
            css += `  --${colorKey}: ${colorValue};\n`;
        }
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
