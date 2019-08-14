module.exports = {
  siteTitle: '펄스윙즈의 일상 이야기',
  siteDescription:
    '개발을 사랑합니다. 자전거를 좋아합니다. 생각을 정리합니다. 코드 없는 개발자 블로그',
  authorName: 'Pulsewings',
  twitterUsername: '',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  개발을 사랑합니다. 디자인을 좋아합니다. 자전거 타는 것을 좋아합니다.
  이번 인생을 어떻게 사는지 전해드립니다. 머리 속에 떠오르는 생각을 정리하는 곳입니다.

  `,
  siteUrl: 'https://pulsewings.github.io/',
  disqusSiteUrl: 'https://pulsewings.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  googleAnalyticsId: 'UA-145652558-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'pulsewings',
  headerTitle: '펄스윙즈의 이야기',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: '일상',
      url: '/'
    },
    {
      label: '마음의 양식',
      url: '/tags/book'
    },
    {
      label: '자전거',
      url: '/tags/bike'
    },
    {
      label: '포트폴리오',
      url: '/portfolio'
    },
    {
      label: '전체보기',
      url: '/all-tag-posts'
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com'
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/'
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew'
        },
        {
          label: 'Installation',
          url: '/how-to-install'
        }
      ]
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew'
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr'
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou'
        }
      ]
    }
  ],
  siteTags: ['programming', 'life', 'bike', 'thinking', 'challenge']
};
