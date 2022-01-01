module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    // 'next/core-web-vitals', // next.js 프로젝트 시 필요
    'eslint:recommended',
    'eslint-config-prettier',
    // 'eslint-config-sinon',
    // 'plugin:chai-friendly/recommended',
    // 'plugin:mocha/recommended',
    'plugin:import/recommended',
    // 'plugin:jest/recommended',
    // 'plugin:jsx-a11y/recommended', // react.js 프로젝트 시 필요
    // 'plugin:nuxt/recommended',
    'plugin:prettier/recommended', // eslint의 포매팅 기능을 prettier로 사용. 항상 마지막에 세팅 되어야? (eslint-plugin-prettier)
    // 'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, you should enable this
    // 'plugin:react/recommended',
    // 'plugin:vue/strongly-recommended',
    // 'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'prettier/@typescript-eslint', // eslint의 typescript 포매팅 기능을 제거 (eslint-config-prettier)
    // 'tsconfig.json', // project: 'tsconfig.json'을 활성화 하기 위해 꼭 필요
  ],
  // globals: { $nuxt: true },
  // ignorePatterns: ['.eslintrc.js'], // The file does not match your project config: eslintrc.js 에러 해결을 위해 필요
  // parser: '@typescript-eslint/parser',
  // parser: 'vue-eslint-parser',
  parser: '@babel/eslint-parser',
  parserOptions: {
    // babelOptions: { presets: ['@babel/preset-react'] }, // "This experimental syntax requires enabling one of the following parser plugin(s): 'jsx, flow, typescript'" 에러 해결을 위해 필요
    // ecmaFeatures: { jsx: true }, // JSX 파싱을 위해 필요
    ecmaVersion: 'latest',
    // project: 'tsconfig.json', // parser: @typescript-eslint/parsergst를 활성화 하기 위해 꼭 필요
    requireConfigFile: false, // "no babel config file detected for ..." 에러 해결을 위해 필요
    sourceType: 'module', // 모듈 시스템 사용 시
  },
  plugins: [
    // 'chai-friendly',
    'import',
    // 'jest',
    // 'jsx-a11y',
    // 'mocha',
    // 'nuxt',
    'prettier',
    // 'react',
    // 'react-hooks',
    // 'vue',
    // '@typescript-eslint',
  ],
  root: true,
  rules: {
    // '@typescript-eslint/no-var-requires': 'error', // typescript에서 var 변수 사용 시 에러 발생
    'array-bracket-spacing': ['warn', 'never'], // 대괄호 안에 간격 삽입. always로 설정할 경우 prettier와 충돌 발생
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    'generator-star-spacing': 'off', // allow async-await
    'import/no-unresolved': ['error', { commonjs: true, amd: true }], // 프론트엔드 라이브러리를 사용할 때는 'off'로 둘 것을 권장
    // 'jsx-a11y/no-noninteractive-element-interactions': [
    //   'warn',
    //   {
    //     handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    //   },
    // ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    // 'jsx-a11y/no-noninteractive-element-to-interactive-role': [
    //   'warn',
    //   {
    //     ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    //     ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    //     li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
    //     table: ['grid'],
    //     td: ['gridcell'],
    //   },
    // ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-new-object': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문.
    'object-curly-spacing': ['warn', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    // 'react/react-in-jsx-scope': 'off', // If you are not using JSX, or if you are setting React as a global variable
    // 'react/prop-types': [
    //   'warn',
    //   {
    //     // ignore: [], // optional array of props name to ignore during validation
    //     // customValidators: [], // optional array of validators used for propTypes validation
    //     skipUndeclared: true, // optional boolean to only error on components that have a propTypes block declared
    //   },
    // ],
    // 'react/self-closing-comp': ['warn', { component: true, html: false }], // true로 설정하면 태그 안에 아무런 내용이 없을 때 닫는 태그를 없애고 self closing 태그로 바꿈
    'space-before-function-paren': 'off', // allow debugger during development
    // 'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'never' } }],
    // 'vue/max-attributes-per-line': ['error', { singleline: { max: 10 }, multiline: { max: 1, allowFirstLine: false } }],
    // 'vue/no-unused-components': 'warn',
    // 'vue/require-v-for-key': 'warn',
    // 'vue/singleline-html-element-content-newline': 'off',
    // 'vue/v-bind-style': ['warn', 'shorthand'],
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx'], // react 사용 시 활성화 필요. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
  //     },
  //   },
  //   react: {
  //     version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
  //   },
  // },
}
