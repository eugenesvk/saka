module.exports = {
  moduleNameMapper: {
    '@/(.*)$':                    '<rootDir>/src/$1',
    '^src/(.*)$':                 '<rootDir>/src/$1',
    '^suggestion_utils/(.*)$':    '<rootDir>/src/suggestion_utils/$1',
    '^suggestion_engine/(.*)$':   '<rootDir>/src/suggestion_engine/$1',
    '^lib/(.*)$':                 '<rootDir>/src/lib/$1',
    '^msg/(.*)$':                 '<rootDir>/src/msg/$1',
    '^.*\\.(css|less|sass|scss)$':'<rootDir>/test/__mocks__/styleMock.scss',
    '^react-dom/server$':         'preact-render-to-string',
    '^react$'                   : 'preact/compat',
    '^react-dom/test-utils$'    : 'preact/test-utils',
    '^react-dom$'               : 'preact/compat',
    '^react/jsx-runtime$'       : 'preact/jsx-runtime',
    '^react-addons-test-utils$' : 'preact/test-utils'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: { '^.+\\.(js|jsx)?$': '<rootDir>/jest.transform.js' },
  transformIgnorePatterns: ["node_modules/(?!preact)", "\\.pnp\\.[^\\\/]+$"], // Default: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"]
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageThreshold: {
    global: {
      branches:  59,
      functions: 65,
      lines:     62
    }
  },
  coverageReporters: ['json', 'lcov', 'html'],
  setupFiles: ['<rootDir>/test/__mocks__/browser-mocks.js']
};
