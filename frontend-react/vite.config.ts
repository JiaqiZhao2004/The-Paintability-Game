import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // This allows Vite to accept connections from outside when using Docker
		port: 5173,
	},
});
