# Next.js를 이용한 포트폴리오 사이트 만들기

 Next.js는 React 기반의 웹 프레임워크로, React 애플리케이션을 빌드하고 배포하는 프로세스를 간소화하고 향상시키기 위해 만들어진 도구입니다. 여기에는 여러 기능과 장점이 있습니다.

1. 서버 사이드 렌더링 (SSR): Next.js는 서버 사이드 렌더링을 기본으로 지원합니다. 기존 브라우저에서 로딩하는 CSR(클라이언트 사이드 렌더링)????**과 달리 이것은 서버에서 초기 렌더링을 수행하여 브라우저에 보내는 방식으로 웹 페이지의 성능을 향상시킵니다. 검색 엔진 최적화(SEO)에도 도움이 됩니다. 보통 규모가 큰 사이트에서 쓰기에 적합합니다.

2. 클라이언트 사이드 라우팅: 페이지 간 전환이 빠르고 부드럽게 이뤄지도록 클라이언트 사이드 라우팅을 지원합니다. 이것은 페이지 간 전환 시에 전체 페이지를 다시 로드하지 않고 필요한 부분만 업데이트할 수 있도록 해줍니다.

3. 자동 코드 스플리팅: Next.js는 자동으로 코드를 분할하여 필요한 코드만 로드하게끔 해줍니다. 이것은 초기 로딩 속도를 향상시키고 사용자 경험을 개선하는 데 도움이 됩니다.

4. 개발 환경 및 빌드 도구: Next.js는 개발 환경에서의 빠른 개발을 지원하며, 빌드 및 배포를 쉽게 할 수 있도록 도와줍니다. Hot Module Replacement (HMR)를 지원하여 코드 변경 사항을 실시간으로 반영할 수 있습니다.

5. API Routes: 서버리스 함수를 통해 API를 만들고 관리할 수 있는 API Routes를 제공합니다. 이를 통해 서버 사이드 로직을 구현하고 데이터를 가져오는 데 용이합니다.

6. 플러그인 시스템: 다양한 플러그인을 활용하여 프로젝트에 필요한 기능을 손쉽게 추가할 수 있습니다.

Next.js는 React 애플리케이션을 더 효율적으로 관리하고 성능을 최적화하는데 도움이 되는 강력한 도구이며, React 생태계와의 통합을 강화하여 개발자에게 편의성을 제공합니다.

[Next.js 공식 사이트 바로가기](https://nextjs.org/)  


## 셋팅

`mkdir next-project` - 폴더 생성   
   
`npx create-next-app@latest` - Next.js 설치(최근 만들어진 폴더)   
Ok to proceed? (y) `y`   
√ What is your project named? ... `.`   
√ Would you like to use TypeScript? ... `No` / Yes   
√ Would you like to use ESLint? ... No / `Yes`   
√ Would you like to use Tailwind CSS? ... `No` / Yes   
√ Would you like to use `src/` directory? ... No / `Yes`   
√ Would you like to use App Router? (recommended) ... No / `Yes`   
√ Would you like to customize the default import alias (@/*)? ... No / `Yes`   
√ What import alias would you like configured? ... `@`/*   


## 개발 시작하기

먼저, 개발 서버를 실행하세요.

```bash
`npm run dev`
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인할 수 있습니다.

`app/page.js`를 수정하여 페이지를 편집할 수 있습니다. 파일을 편집하는 동안 페이지는 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)를 사용하여 Inter, 커스텀 구글 폰트를 자동으로 최적화하고 로드합니다.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



