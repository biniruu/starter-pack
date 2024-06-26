# Next.js with TypeScript Starter

Next.js + TypeScript 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요. Create Next App을 사용해 Next.js 프로젝트를 설치한 다음, 필요한 패키지를 추가해서 사용하세요.

<br>

## 🎬Creating Next.js project

이곳에 있는 설정은 기본 옵션으로 create next app을 설치한 경우를 기준으로 작성했어요. (Next.js 버전 13.4 이후)

```bash
yarn create next-app <my-app-name> --typescript
```

이미 만든 폴더에 설치한다면 `yarn create next-app . --typescript`를 입력하면 돼요. 초기 설정과 관련된 사항은 [NEXT.JS 공식 문서](https://nextjs.org/docs/api-reference/create-next-app)를 참고하세요.

<br>

## 📒Setting up Storybook

스토리북은 프로젝트 환경 설정을 모두 마친 후에 설치하면 좋아요.

```bash
npx storybook@latest init
```

설치 중에 ESLint 설치 여부를 파악하여 다음과 같이 eslint-plugin-storybook 플러그인 설치를 물어봐요.

> We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: <https://github.com/storybookjs/eslint-plugin-storybook#readme>

yes를 선택하면 플러그인 설치와 함께 .eslintrc.js > extends에 `plugin:storybook/recommended` 옵션 추가까지 자동으로 해 줘요.

<br>

## ⏱️Setting up TanStack Query (React Query) and SWR

To use global configurations of those libraries, remove comments from `app/layout.tsx`.

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

```bash
# Axios

yarn add axios

# ESLint

yarn add -D @typescript-eslint/eslint-plugin

# ESLint for Jest
#
# 💁🏻‍♀️ eslint-plugin-jest를 설치하지 않는다면 아래 패키지는 별도로 설치해야 해요.
# @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils

yarn add -D eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-testing-library

# ESLint for Next.js

yarn add -D eslint-plugin-react-refresh

# ESLint for Storybook
#
# 💁🏻 Storybook을 설치하는 과정에서 설치 여부를 물어보기 때문에 굳이 먼저 설치할 필요는 없어요.

yarn add -D eslint-plugin-storybook

# ESLint for TanStack Query

yarn add -D @tanstack/eslint-plugin-query

# ESLint for Tailwind CSS

yarn add -D eslint-plugin-tailwindcss

# Immer

yarn add immer use-immer

# Jest
#
# 💁🏻 If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
# 💁🏻‍♂️ I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event @types/jest jest jest-environment-jsdom jest-watch-typeahead jsdom ts-jest

# Jest for CSS module

yarn add -D @types/identity-obj-proxy identity-obj-proxy

# Jest for React.js

yarn add -D @testing-library/react @testing-library/react-hooks @types/react-test-renderer react-test-renderer

# Joi

yarn add joi

# Lodash

yarn add lodash-es
yarn add -D @types/lodash-es

# Mock Service Worker

yarn add -D msw

# NextAuth.js
#
# need to use NextAuth.js under v5, add 'next-auth' instead

yarn add next-auth@beta

# Node.js

yarn add -D @types/node ts-node

# PostCSS
#
# 💁🏻‍♂️ postcss-preset-env를 설치하지 않는다면 아래 링크에 정리된 postcss 플러그인은 별도로 설치해야 해요.
# https://github.com/csstools/postcss-plugins/tree/main/plugins

yarn add -D cssnano postcss-cli postcss-flexbugs-fixes postcss-html postcss-loader postcss-normalize postcss-preset-env postcss-syntax postcss-url

# PostCSS for Styled-Components

yarn add -D postcss-styled-syntax

# PostCSS for Tailwind CSS

yarn add -D @tailwindcss/nesting

# Prettier

yarn add -D prettier

# React.js

yarn add react-refresh

# React Hook Form

yarn add react-hook-form

# React Infinite Scroller

yarn add react-infinite-scroller
yarn add -D @types/react-infinite-scroller

# Recoil

yarn add recoil

# SASS (SCSS)

yarn add -D sass sass-loader

# Styled-components

yarn add styled-components
yarn add -D @types/styled-components

# Stylelint

yarn add -D stylelint stylelint-config-standard stylelint-order

# Stylelint for SCSS

yarn add -D stylelint-config-standard-scss stylelint-scss

# SWR

yarn add swr

# TanStack Query (React Query)

yarn add @tanstack/query-core @tanstack/react-query
yarn add -D @tanstack/react-query-devtools

# TypeScript

yarn add tslib

# Webpack

yarn add -D source-map-loader
```

<br>

💁🏻‍♀️ 아래 패키지는 Create Next App에 포함돼 있어서 별도로 설치하지 않아도 돼요.

- @types/node
- @types/react
- @types/react-dom
- @typescript-eslint/parser
- @typescript-eslint/types
- @typescript-eslint/typescript-estree
- @typescript-eslint/utils
- eslint
- eslint-config-next
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- postcss-import
- postcss-nested
- tailwindcss
- typescript

<br>

💁🏻 아래 패키지는 다른 패키지와 충돌을 일으키기 때문에 사용하지 않아요.

- @swrlab/eslint-plugin-swr : 필수 패키지들이 의존성 패키지로 사용 중인 `eslint-plugin-import`와 충돌을 일으킨다.
- prettier-plugin-tailwindcss : `eslint-plugin-tailwindcss`의 `classnames-order`와 충돌을 일으킨다.
