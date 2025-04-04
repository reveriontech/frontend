// Add this test configuration
test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ['./tests/setup.js'],
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
  }