const fs = require('fs');
const path = require('path');

const modules = fs
  .readdirSync(path.resolve(__dirname, './src/module'), { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

const moduleRules = modules.map((module) => ({
  files: [`./src/module/${module}/**/*`],
  rules: {
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: [`@/module/${module}`],
            message: `Use relative imports when inside the @/module/${module}`,
          },
        ],
      },
    ],
  },
}));

const rootModuleRules = ['api', 'util', 'designsystem'].map((module) => ({
  files: [`./src/${module}/**/*`],
  rules: {
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: [`@/${module}`],
            message: `Use relative imports when inside the @/${module}`,
          },
        ],
      },
    ],
  },
}));

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    '.eslintrc-auto-import.json',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['vue', 'import'],
  rules: {
    curly: ['error', 'all'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'warn',
    'no-multiple-empty-lines': ['warn'],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'vue/block-lang': [
      'warn',
      {
        script: { allowNoLang: true },
        style: { allowNoLang: true },
        template: { allowNoLang: true },
      },
    ],
    'vue/attribute-hyphenation': ['warn', 'never'],
    'vue/html-button-has-type': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'vue/v-on-event-hyphenation': ['warn', 'never'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Filter', 'Savedfilters', 'Inbox'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'vue-router',
            importNames: ['useRoute'],
            message: 'Please use `useRoute` from @/route instead.',
          },
          {
            name: '@vueuse/core',
            importNames: ['useBreakpoints', 'useClipboard', 'useWindowSize'],
            message: 'Please use the utility from @/util instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.js'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./src/route/**/*'],
      rules: {
        'vue/valid-template-root': 'off',
      },
    },
    ...rootModuleRules,
    ...moduleRules,
  ],
  reportUnusedDisableDirectives: true,
};
