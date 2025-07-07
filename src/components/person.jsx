// src/components/person.jsx

import React from 'react';
import images from './images.jsx'; // images.jsx 파일 임포트

// 각 기수별 이미지에 맞춰 personData를 업데이트합니다.
// id는 TeamIntro.jsx의 idList와 일치하도록 유지합니다.
const personData = [
  // 13기 멤버들 (idList: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28])
  { id: 19, name: '한민규', image: images.person.한민규, logo: images.logo, major: '컴퓨터공학과 21', role: '대표', position: '백엔드' },
  { id: 20, name: '신민서', image: images.person.신민서, logo: images.logo, major: '미디어소프트웨어학과 22', role: '부대표', position: '프론트엔드' },
  { id: 21, name: '최유정', image: images.person.최유정, logo: images.logo, major: '미디어소프트웨어학과 21', role: 'FE 파트장', position: '프론트엔드' },
  { id: 22, name: '박준범', image: images.person.박준범, logo: images.logo, major: '컴퓨터공학과 20', role: 'BE 파트장', position: '백엔드' },
  { id: 23, name: '서민주', image: images.person.서민주, logo: images.logo, major: '관광경영학과 22', role: '디자인 파트장', position: '디자인' },
  { id: 24, name: '권오현', image: images.person.권오현, logo: images.logo, major: '컴퓨터공학과 23', role: '운영진', position: '백엔드' },
  { id: 25, name: '이호연', image: images.person.이호연, logo: images.logo, major: '미디어소프트웨어학과 21', role: '운영진', position: '프론트엔드' },
  { id: 26, name: '오한솔', image: images.person.오한솔, logo: images.logo, major: '관광경영학과 22', role: '운영진', position: '디자인' },
  { id: 27, name: '노주희', image: images.person.노주희, logo: images.logo, major: '미디어소프트웨어학과 22', role: '운영진', position: '백엔드' },
  { id: 28, name: '구혜원', image: images.person.구혜원, logo: images.logo, major: '미디어소프트웨어학과 22', role: '운영진', position: '프론트엔드' },

  // 12기 멤버들 (idList: [2, 6, 4, 5, 11, 7, 3, 8, 1, 9, 10])
  { id: 2, name: '노승희', image: images.person.노승희, logo: images.logo, major: '미디어소프트웨어학과 20', role: '대표', position: '프론트엔드' },
  { id: 6, name: '정택원', image: images.person.정택원, logo: images.logo, major: '컴퓨터공학과 19', role: '부대표', position: '백엔드' },
  { id: 4, name: '고창준', image: images.person.고창준, logo: images.logo, major: '컴퓨터공학과 19', role: 'FE 파트장', position: '프론트엔드' },
  { id: 5, name: '남민지', image: images.person.남민지, logo: images.logo, major: '컴퓨터공학과 21', role: 'BE 파트장', position: '백엔드' },
  { id: 11, name: '이원경', image: images.person.이원경, logo: images.logo, major: '국어국문학과 22', role: '디자인 파트장', position: '기획' },
  { id: 7, name: '문호주', image: images.person.문호주, logo: images.logo, major: '컴퓨터공학과 19', role: '운영진', position: '백엔드' },
  { id: 3, name: '김영현', image: images.person.김영현, logo: images.logo, major: '컴퓨터공학과 19', role: '운영진', position: '프론트엔드' },
  { id: 8, name: '한민규', image: images.person.한민규, logo: images.logo, major: '컴퓨터공학과 21', role: '운영진', position: '백엔드' },
  { id: 1, name: '신민서', image: images.person.신민서, logo: images.logo, major: '미디어소프트웨어학과 22', role: '운영진', position: '프론트엔드' },
  { id: 9, name: '서민주', image: images.person.서민주, logo: images.logo, major: '관광경영개발학과 22', role: '운영진', position: 'UX/UI 디자인' },
  { id: 10, name: '오한솔', image: images.person.오한솔, logo: images.logo, major: '관광경영개발학과 22', role: '운영진', position: '운영' },

  // 11기 멤버들 (idList: [12, 13, 14, 16, 17, 15, 18])
  { id: 12, name: '김현준', image: images.person.김현준, logo: images.logo, major: '산업경영공학과 17', role: '대표', position: '프론트엔드' },
  { id: 13, name: '주영민', image: images.person.주영민, logo: images.logo, major: '미디어소프트웨어학과 17', role: '부대표', position: '백엔드' },
  { id: 14, name: '천민우', image: images.person.천민우, logo: images.logo, major: '컴퓨터공학과 19', role: '운영진', position: '백엔드' },
  { id: 16, name: '정택원', image: images.person.정택원, logo: images.logo, major: '컴퓨터공학과 19', role: '운영진', position: '백엔드' },
  { id: 17, name: '남민지', image: images.person.남민지, logo: images.logo, major: '컴퓨터공학과 21', role: '운영진', position: '백엔드' },
  { id: 15, name: '노승희', image: images.person.노승희, logo: images.logo, major: '미디어소프트웨어학과 20', role: '운영진', position: '프론트엔드' },
  { id: 18, name: '이원경', image: images.person.이원경, logo: images.logo, major: '국어국문학과 22', role: '운영진', position: '기획' },
];


const Person = ({ idList, gapX = 'gap-x-8' }) => {
  // idList가 유효한 배열인지 확인하는 방어적인 코드 추가
  if (!Array.isArray(idList)) {
    console.error("Person 컴포넌트: idList prop이 유효한 배열이 아닙니다.", idList);
    return null; // 유효하지 않으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="flex justify-center px-4 mt-5 sm:px-0">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${gapX} gap-y-12`}
      >
        {idList.map((id) => {
          const member = personData.find((member) => member.id === id);
          if (!member) return null;

          return (
            <div
              key={member.id}
              className="flex flex-col items-center justify-center w-full max-w-xs p-4 sm:w-48 bg-neutral-50 rounded-2xl sm:h-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-contain rounded w-24 h-24 mx-auto sm:w-30 sm:h-24"
              />
              <div className="flex items-center justify-center mt-4 whitespace-nowrap">
                <img src={member.logo} alt="logo" className="w-6 h-6 mr-2" />
                <span className="text-base text-black font-extrabold"> {/* fontEB -> font-extrabold */}
                  {member.name}
                </span>
              </div>
              <div className="text-center whitespace-nowrap">
                <p className="pt-3 text-sm text-black font-bold"> {/* fontBold -> font-bold */}
                  {member.major}
                </p>
                <p className="text-sm text-black font-bold">{member.role}</p> {/* fontBold -> font-bold */}
                <div className="w-20 h-[1.5px] bg-blue-500 mt-2 mx-auto sm:w-32" />
                <p className="mt-2 text-sm text-blue-500 font-bold"> {/* fontBold -> font-bold */}
                  {member.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Person;
