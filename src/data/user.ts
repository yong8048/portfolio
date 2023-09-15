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
      title: 'KREAM 클론 페이지',
      description: '한정판 거래사이트인 KREAM 페이지의 모든 기능들을 따라 만들었습니다. ',
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
      position: '전체',
      person: '1인',
      period: '2023.01.24 ~ 2023. 02.02',
      skills: 'JavaScript, React, Redux-toolkit, SCSS, HTML, Vercel',
      logo: 'assets/work5.gif',
      git: 'https://github.com/MiniTeam-5/MiniProject-FE',
      link: 'https://github.com/MiniTeam-5/MiniProject-FE'
    },
    {
      title: 'Todo List 어플리케이션',
      description: 'todo list를 작성하고 확인할 수 있는 웹사이트입니다. ',
      position: '전체',
      person: '1인',
      period: '2023.01.16 ~ 2023. 01. 25',
      skills: 'HTML, SCSS, JavaScript, Vercel',
      logo: 'assets/work3.png',
      git: 'https://github.com/yong8048/KDT4-M2/tree/LeeSeungYong',
      link: 'https://sylee-todolist.vercel.app'
    },
    {
      title: '영화검색 어플리케이션',
      description: 'Open API를 활용하여 영화를 검색할 수 있는 웹사이트입니다. ',
      position: '전체',
      person: '1인',
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
    '2014 시온고등학교 졸업 및 호서대학교 입학',
    '2017 숭실대학교 주최 IT전문과정 수료 (C)',
    '2019 KISE 청년취업아카데미 수료 (JAVA)',
    '2020 호서대학교 정보통신공학과 졸업',
    '2020 숭실대학교 주최 IT전문과정 수료 (C++)',
    '2020 모블교육센터 SW개발과정 수료 (JAVA/ANDROID)',
    '2021 MVTech 비전제어팀 재직 (C++)',
    '2023 패스트캠퍼스 프론트엔드과정 수료 (JAVA)'
  ]
};

export default User;
