module.exports = {
	collectCoverage: false,
	coverageProvider: 'v8',
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!<rootDir>/out/**',
		'!<rootDir>/.next/**',
		'!<rootDir>/*.config.js',
		'!<rootDir>/coverage/**'
	],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	globalSetup: '<rootDir>setupEnv.js',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets:  ['next/babel'] }],
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
	],
	verbose: true,
	testTimeout: 50000
}
