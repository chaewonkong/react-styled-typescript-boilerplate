module.exports = {
  projects: ['<rootDir>/'],
  collectCoverageFrom: ['src/**/*.{ts}'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.(p?css)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};
