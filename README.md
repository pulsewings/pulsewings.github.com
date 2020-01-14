# 펄스윙즈의 이야기

Gatsby로 블로르글 옴기고 있다.

# graphql

http://localhost:8000/___graphql

## excerpt가 제대로 안나올 때

graphql에 excerpt(truncate: true) 를 붙여준다.

# 추가 설치

gatsby-plugin-sitemap
gatsby-plugin-feed

gatsby develop -H 0.0.0.0
여기에 접근하고,
나의 IP로 접속하면 모바일에서도 확인 가능하다.
http://172.30.1.19:8000/

react-anchor-link-smooth-scroll

## 모바일에서

@media (max-width: 780px) {

}

## Delpoy

https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
npm run deploy

fatal: A branch named 'gh-pages' already exists. 문제 발생할 때
rm -rf node_modules/gh-pages/.cache
rm -r .cache

# source and transform nodes 뜨면서 진행이 안될 때

GATSBY_CONCURRENT_DOWNLOAD=50

npm run develop
npm run deploy
