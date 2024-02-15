const User = {
  main: {
    name: '이승용',
    phone: '010-3176-8048',
    email: 'sylee8048@gmail.com',
    link: 'https://github.com/yong8048'
  },

  homepage: {
    title: 'FRONT END DEVELOPER',
    subtitle: '안녕하세요. 신입 프론트엔드 개발자 이승용입니다.',
    description: '실패할 때 좌절하기 보다 배울 점을 찾는 프론트엔드 개발자 \n "한번에" 보다 "꾸준히" 를 좋아합니다.'
  },

  project: [
    {
      title: 'moanda-ve - 카페 사이트',
      description: '수원에 있는 moanda-ve 비건카페의 사이트입니다. ',
      position: '프로젝트 진행 중',
      person: 'FE - 2인',
      period: '2023.12.18 ~ 진행 중',
      skills: 'TypeScript, React, Styled-Components, Vercel',
      logo: './assets/moanda-ve.png',
      git: 'https://github.com/yong8048/moanda-ve',
      link: 'https://moanda-ve.vercel.app/'
    },
    {
      title: 'Disearch - 디스코드 사이트',
      description:
        'Disearch는 디스코드 사용자들의 만남의 장을 제공하는 웹 사이트입니다. \n이곳에서 사용자들은 자신이 운영하는 디스코드 서버를 홍보하고, 다양한 주제의 디스코드 서버를 쉽게 찾아볼 수 있습니다.',
      position: 'Discord API를 이용한 로그인, 마이페이지, Discord 서버 등록',
      person: 'FE - 2인, BE - 1인',
      period: '2023.12.25 ~ 2024.02.15',
      skills: 'TypeScript, React, TailwindCSS, Vercel',
      logo: './assets/disearch.png',
      git: 'https://github.com/yong8048/DISEARCH-FRONT-END',
      link: 'https://disearch.vercel.app/'
    },
    {
      title: '새벽감성 - 24시카페 검색사이트',
      description:
        '새벽감성은 올빼미족들을 위한 24시간 운영하는 카페를 검색할 수 있는 웹 사이트입니다. \n이 사이트를 통해 사용자들은 언제든지 열려 있는 카페를 쉽게 찾아낼 수 있어, 새벽 시간대에도 편안히 카페에서 시간을 보낼 수 있습니다.',
      position: '로그인, 네이버 맵, 헤더, 카페정보, 백오피스 대시보드, 백오피스 정보수정',
      person: 'FE - 2인',
      period: '2023.11.18 ~ 2024. 01. 04',
      skills: 'TypeScript, Next.js, TailwindCSS, Firebase, Vercel',
      logo: './assets/cafe.png',
      git: 'https://github.com/yong8048/cafe-24',
      link: 'https://www.saebyeok-gamseong.com/'
    },
    {
      title: 'LUPIN 일정관리 프로그램',
      description: '회사에서 직원들의 연차, 당직을 관리하는 프로그램입니다. ',
      position: '로그인 페이지, 회원가입 페이지, 404페이지',
      person: 'FE - 5인, BE - 5인',
      period: '2023.04.27 ~ 2023. 05. 16',
      skills: 'TypeScript, React, Styled-Components, Netlify',
      logo: './assets/work1.gif',
      git: 'https://github.com/yong8048/MiniProject-FE/tree/develop',
      link: 'https://lupintech.netlify.app/'
    },
    {
      title: 'KREAM 웹 사이트',
      description: '한정판 거래사이트인 KREAM 페이지의 모든 기능들을 동일하게 만들었습니다. ',
      position: '마이페이지, 숏컷 컴포넌트, 관심품목, 프로필 및 수정, 구매 목록 조회',
      person: 'FE - 5인',
      period: '2023.2.2 ~ 2023.2.25',
      skills: 'JavaScript, SCSS, HTML , Netlify',
      logo: 'assets/work2.gif',
      git: 'https://github.com/yong8048/KDT4-M4public/tree/KDT4_Team7',
      link: 'https://kdt4-team7--hilarious-kleicha-d49179.netlify.app/'
    },
    {
      title: '미세먼지 알리미',
      description: '미세먼지를 검색할 수 있는 프로그램입니다. ',
      position: '',
      person: '개인',
      period: '2023.01.24 ~ 2023. 02.02',
      skills: 'JavaScript, React, Redux-toolkit, SCSS, HTML, Vercel',
      logo: 'assets/work5.gif',
      git: 'https://github.com/yong8048/air-pollution',
      link: 'https://sylee-air-pollution.vercel.app/'
    },
    {
      title: 'Todo List 웹 사이트',
      description: 'todo list를 작성하고 확인할 수 있는 웹사이트입니다. ',
      position: '',
      person: '개인',
      period: '2023.01.16 ~ 2023. 01. 25',
      skills: 'HTML, SCSS, JavaScript, Vercel',
      logo: 'assets/work3.png',
      git: 'https://github.com/yong8048/KDT4-M2/tree/LeeSeungYong',
      link: 'https://sylee-todolist.vercel.app'
    },
    {
      title: '영화검색 웹 사이트',
      description: 'omdb API를 활용하여 영화를 검색할 수 있는 웹사이트입니다. ',
      position: '',
      person: '개인',
      period: '2023.01.02 ~ 2023. 01. 13',
      skills: 'HTML, CSS, JavaScript, Netlify',
      logo: 'assets/work4.png',
      git: 'https://github.com/yong8048/KDT4-M2/tree/LeeSeungYong',
      link: 'https://slyee-movie.netlify.app/'
    }
  ],

  skillImg: [
    '/assets/skill_icon_01.png',
    '/assets/skill_icon_02.png',
    '/assets/skill_icon_03.png',
    '/assets/skill_icon_04.png',
    '/assets/skill_icon_05.png',
    '/assets/skill_icon_06.png',
    '/assets/skill_icon_07.png'
  ],

  historyList: [
    '2023 패스트캠퍼스 프론트엔드과정 수료 (JavaScript)',
    '2021 MVTech 영상처리제어개발팀 재직 (C++)',
    '2020 모블교육센터 SW개발과정 수료 (JAVA/ANDROID)',
    '2020 숭실대학교 주최 IT전문과정 수료 (C++)',
    '2020 호서대학교 정보통신공학과 졸업',
    '2019 KISE 청년취업아카데미 수료 (C#/JAVA)',
    '2017 숭실대학교 주최 IT전문과정 수료 (C)',
    '2014 시온고등학교 졸업 및 호서대학교 입학'
  ]
};

export default User;
