module.exports = {
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    testMatch: [
        "**/*.(test|spec).(js|jsx)"
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/styledMock.js',
    }
};