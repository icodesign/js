module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['lib'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: ['**/*.{ts, tsx, js}', '!**/node_modules/**', '!**/lib/**'],
  coverageReporters: ['json', 'html', 'text-summary', 'lcov'],
};
