// src/components/images.jsx

// public 폴더의 이미지들은 웹 서버의 루트 경로('/')를 기준으로 접근합니다.
// 따라서 각 이미지의 경로를 문자열로 정의합니다.
const images = {
  // images 폴더 직하위 파일들
  arrow: '/images/arrow.png',
  Attach: '/images/Attach.png',
  doubleArrow: '/images/doubleArrow.png',
  download: '/images/download.png',
  logo: '/images/logo.png',
  puzzle: '/images/puzzle.png',
  vite: '/images/vite.svg',

  // project 폴더
  project: {
    글Lover: '/images/project/글Lover.png',
    졸업학점계산기: '/images/project/졸업학점계산기.png',
    파동: '/images/project/파동.png',
    election_all: '/images/project/election_all.png',
    election: '/images/project/election.png',
    hola: '/images/project/hola.png',
    Page: '/images/project/Page.png',
    PoolUs: '/images/project/PoolUs.png',
    Puzzle: '/images/project/Puzzle.png',
    sketchVillage: '/images/project/sketchVillage.png',
  },

  // admin 폴더
  admin: {
    BreadArrow: '/images/admin/AssignmentManagement/BreadArrow.png',
  },

  // footer 폴더
  footer: {
    email: '/images/footer/email.png',
    insta: '/images/footer/insta.png',
    kakao: '/images/footer/kakao.png',
  },

  // main 폴더
  main: {
    arrowB: '/images/main/arrowB.png',
    arrowM: '/images/main/arrowM.png',
    icon1: '/images/main/icon1.png',
    icon2: '/images/main/icon2.png',
    icon3: '/images/main/icon3.png',
    likelion: '/images/main/likelion.png',
    main1: '/images/main/main1.png',
    main2: '/images/main/main2.png',
    main3: '/images/main/main3.png',
    mainP2: '/images/main/mainP2.png',
    mouse: '/images/main/mouse.png',
    schedule: '/images/main/schedule.png',
  },

  // person 폴더 (한글 파일명은 그대로 사용하되, 경로에 포함될 때 인코딩될 수 있습니다)
  person: {
    고창준: '/images/person/고창준.png',
    구혜원: '/images/person/구혜원.png',
    권오현: '/images/person/권오현.png',
    김영현: '/images/person/김영현.png',
    김현준: '/images/person/김현준.png',
    남민지: '/images/person/남민지.png',
    노승희: '/images/person/노승희.png',
    노주희: '/images/person/노주희.png',
    문호주: '/images/person/문호주.png',
    박준범: '/images/person/박준범.png',
    서민주: '/images/person/서민주.png',
    신민서: '/images/person/신민서.png',
    오한솔: '/images/person/오한솔.png',
    이원경: '/images/person/이원경.png',
    이호연: '/images/person/이호연.png',
    정택원: '/images/person/정택원.png',
    주영민: '/images/person/주영민.png',
    천민우: '/images/person/천민우.png',
    최유정: '/images/person/최유정.png',
    한민규: '/images/person/한민규.png',
  },

  // track 폴더
  track: {
    backend_background: '/images/track/backend_background.png',
    backend_curri: '/images/track/backend_curri.png',
    backLine: '/images/track/backLine.png',
    frontend_background: '/images/track/frontend_background.png',
    frontend_curri: '/images/track/frontend_curri.png',
    frontLine: '/images/track/frontLine.png',
    pm_background: '/images/track/pm_background.png',
    pm_curri: '/images/track/pm_curri.png',
    pmLine: '/images/track/pmLine.png',
  },
};

export default images;
