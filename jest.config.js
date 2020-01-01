module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/{index,types}.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
