module.exports = {
  extends: ["codingitwrong"],
  parser: "babel-eslint",
  plugins: ["cypress", "jest", "react"],
  env: {
    browser: true,
    "cypress/globals": true,
    "jest/globals": true
  }
};
