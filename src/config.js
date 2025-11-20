// src/config.js

// App configuration and environment variables
const config = {
  appName: import.meta.env.VITE_APP_NAME || "Medicare Inventory Manager",
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  drugCheckApiUrl: import.meta.env.VITE_DRUG_CHECK_API_URL || "",
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === "true",
  defaultTheme: "light",
};

export default config;
