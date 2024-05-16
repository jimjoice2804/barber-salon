import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainPage:
          "url('https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D')",
        aboutPageImage:
          "url('https://images.unsplash.com/photo-1536520002442-39764a41e987?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyYmVyfGVufDB8MXwwfHx8MA%3D%3D')",
        serviceImage: "url('https://images.unsplash.com/photo-1590509028942-0ac2b8412dbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9yYW5nZXxlbnwwfDF8MHx8fDA%3D')"
      },
      animation: {
        "slide-up": "slide-up 2s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" , opacity: '0' },
          "100%": { transform: "translateY(0)",  opacity: '1' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
