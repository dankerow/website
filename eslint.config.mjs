import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    "rules": {
      "vue/no-v-html": "off",
      "vue/require-prop-types": "off",
      "vue/require-default-prop": "off",
      "vue/multi-word-component-names": "off",
      "vue/prefer-import-from-vue": "off",

      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/component-options-name-casing": ["error", "PascalCase"],
      "vue/custom-event-name-casing": ["error", "camelCase"],
      "vue/define-macros-order": ["error", {
        "order": ["defineProps", "defineEmits"]
      }],
      "vue/html-comment-content-spacing": ["error", "always", {
        "exceptions": ["-"]
      }],
      "vue/no-restricted-v-bind": ["error", "/^v-/"],
      "vue/no-useless-v-bind": "error",
      "vue/no-v-text-v-html-on-component": "error",
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/prefer-separate-static-class": "error",

      // extensions
      "vue/array-bracket-spacing": ["error", "never"],
      "vue/arrow-spacing": ["error", { "before": true, "after": true }],
      "vue/block-spacing": ["error", "always"],
      "vue/brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
      "vue/comma-dangle": ["error"],
      "vue/comma-spacing": ["error", { "before": false, "after": true }],
      "vue/comma-style": ["error", "last"],
      "vue/dot-location": ["error", "property"],
      "vue/dot-notation": ["error", { "allowKeywords": true }],
      "vue/eqeqeq": ["error", "smart"],
      // "vue/func-call-spacing": ["off", "never"],
      "vue/key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "vue/keyword-spacing": ["error", { "before": true, "after": true }],
      "vue/no-constant-condition": "warn",
      "vue/no-empty-pattern": "error",
      "vue/no-extra-parens": ["error", "functions"],
      "vue/no-irregular-whitespace": "error",
      "vue/no-loss-of-precision": "error",
      "vue/no-restricted-syntax": [
        "error",
        "DebuggerStatement",
        "LabeledStatement",
        "WithStatement"
      ],
      "vue/no-sparse-arrays": "error",
      "vue/object-curly-newline": ["error", { "multiline": true, "consistent": true }],
      "vue/object-curly-spacing": ["error", "always"],
      "vue/object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
      "vue/object-shorthand": [
        "error",
        "always",
        {
          "ignoreConstructors": false,
          "avoidQuotes": true
        }
      ],
      "vue/operator-linebreak": ["error", "before"],
      "vue/prefer-template": "error",
      "vue/quote-props": ["error", "consistent-as-needed"],
      "vue/space-in-parens": ["error", "never"],
      "vue/space-infix-ops": "error",
      "vue/space-unary-ops": ["error", { "words": true, "nonwords": false }],
      "vue/template-curly-spacing": "error"
    }
  }
)
