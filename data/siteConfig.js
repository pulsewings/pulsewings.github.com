module.exports = {
  siteTitle: '펄스윙즈의 일상 이야기',
  siteDescription:
    '개발을 사랑합니다. 자전거를 좋아합니다. 생각을 정리합니다. 코드 없는 개발자 블로그',
  authorName: 'Pulsewings',
  twitterUsername: '',
  authorAvatar: 'avatar.jpg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  개발을 사랑합니다. 디자인을 좋아합니다. 자전거 타는 것을 좋아합니다.
  이번 인생을 어떻게 사는지 전해드립니다. 머리 속에 떠오르는 생각을 정리하는 곳입니다.
  기존에 진행했던 프로젝트를 간단히 소개합니다. 책을 읽고 떠오른 생각을 기록합니다.
  `,
  siteUrl: 'https://pulsewings.com/',
  disqusSiteUrl: 'https://pulsewings.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: 'UA-145652558-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/pulsewings-icon-color.png',
  postsPerPage: 10,
  disqusShortname: 'pulsewings',
  headerTitle: '펄스윙즈의 일상 이야기',
  headerLinksIcon: 'pulsewings-icon.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: '전체',
      url: '/'
    },
    {
      label: '생각',
      url: '/tags/thinking'
    },
    {
      label: '책',
      url: '/tags/book'
    },
    {
      label: '자전거',
      url: '/tags/bike'
    },
    /* {
      label: '프로젝트',
      url: '/portfolio'
    },*/
    {
      label: '태그별',
      url: '/all-tag-posts'
    },
    {
      label: '연도별',
      url: '/all-date-posts'
    },
    {
      label: 'Changelog',
      url: '/changelog'
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com/pulsewings'
  },
  footerLinks: [
    {
      sectionName: '카테고리',
      links: [
        {
          label: '생각',
          url: '/tags/thinking'
        },
        {
          label: '책',
          url: '/tags/book'
        },
        {
          label: '자전거',
          url: '/tags/bike'
        }
      ]
    },
    {
      sectionName: '모아보기',
      links: [
        {
          label: '태그별',
          url: '/all-tag-posts'
        },
        {
          label: '연도별',
          url: '/all-date-posts'
        },
        {
          label: '변경사항',
          url: '/changelog'
        }
      ]
    }
  ],
  siteTags: ['thinking', 'book', 'bike'],
  siteYears: [
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009'
  ]
};
