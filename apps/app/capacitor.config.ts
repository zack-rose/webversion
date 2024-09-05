import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "app",
  webDir: "out",
  plugins: {
    SafeArea: { enabled: true },
  },
};

export default config;
