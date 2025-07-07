// App.jsx
import React from 'react';
// front-end curriculum.jsx 파일 이름에 맞춰 경로를 수정합니다.
import FrontEndCurriculum from './components/front-end curriculum.jsx';
import BackEndCurriculum from './components/back-end curriculum.jsx';
import DesignCurriculum from './components/design curriculum.jsx';
import Person from './components/person.jsx';
import TeamIntro from './components/teamintro.jsx';
import Contact from './components/contact.jsx';
import Project from './components/project.jsx';
import ProjectTab from './components/project_tab.jsx';

const App = () => { // 여기에 's'가 불필요하게 있었습니다.
  return (
    // Tailwind CSS가 적용될 수 있도록 전체 화면을 채우는 div로 감쌉니다.
    // 여기서는 Tailwind CSS가 잘 작동하는지 확인하기 위해 기본적인 텍스트를 포함했습니다.
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-inter">
      {/* FrontEndCurriculum 컴포넌트 렌더링 */}
      <FrontEndCurriculum />
      {/* BackEndCurriculum 컴포넌트 렌더링 */}
      <BackEndCurriculum />
      {/* DesignCurriculum 컴포넌트 렌더링 */}
      <DesignCurriculum />
      {/* Person 컴포넌트 렌더링 */}
      <Person />
      {/* TeamIntro  컴포넌트 렌더링 */}
      <TeamIntro />
      {/* Contact  컴포넌트 렌더링 */}
      <Contact />
      {/* Project  컴포넌트 렌더링 */}
      <Project />
      {/* ProjectTab  컴포넌트 렌더링 */}
      <ProjectTab />
    </div>
  );
};

export default App;
