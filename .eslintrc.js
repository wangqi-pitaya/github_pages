module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "google",
        "eslint:recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "no-console": 1,
        "linebreak-style": 0,
        "max-len": [2, 200, 2],
        "guard-for-in": 0,
        "react/react-in-jsx-scope": 0,
        "require-jsdoc": 0,
        "valid-jsdoc": 0,
        "indent": [2, 2],
        "eqeqeq": 2,
    }
}
