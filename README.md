# GH's Portfolio
![image](https://github.com/KingGyeongHoo/portfolio/assets/117385050/b1970a13-7c4e-4375-9438-5633c6fd0758)

## 📃프로젝트 소개

프론트엔드 개발자 송경후의 웹 포트폴리오입니다.
각종 정보, 기술 스택, 프로젝트 등을 확인 하실 수 있습니다.

### 📆개발 기간
**2024.02~2024.03**

**(2024.04 Renewal)**

**Last Update** : 2024.11.13

## ✏목차
1. **기술 스택**
2. **주요 기능**
3. **링크**
4. **폴더 구조**

## 🛠기술 스택
- **Frontend**: <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- **Deployment**: <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
- **Other Tools**: <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"><img src="https://img.shields.io/badge/photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white">

## 💻주요 기능

### 메인 페이지 / Intro
 - **Scroll Event와 전역 상태 활용한 반응형 효과**
   - 전역 상태에 스크롤 양을 저장한 뒤, Javascript의 scroll 이벤트가 발생하면 상태를 업데이트 하는 방식을 사용했습니다.
   - 스크롤 양을 props로 전달하여 컴포넌트의 크기 및 가시성(투명도)을 조절했습니다.
   - 상황에 따라 Position 및 display를 유동적으로 전환하고, 스크롤 양에 따라 위치를 변경했습니다.
###  Education & Skills
 - **GlobalStyles를 이용한 전역 스타일 지정**
   - GlobalStyles에 컴포넌트 및 스타일을 저장한 뒤 필요에 따라 꺼내 씀으로써 코드의 중복을 방지하고 가독성을 높였습니다.
### Projects
 - **Position 속성을 활용한 Carousel 제작**
   - Position 속성을 absolute로 설정하고, left 속성을 조절함으로써 캐러셀이 움직이는 효과를 구현했습니다.
   - index 속성을 통해 현재 선택된 프로젝트와 아닌 프로젝트를 구분하고, 크기 및 기능을 차별화했습니다.
 - **전역 상태관리로 Modal 및 프로젝트별 데이터 관리**
   - Modal의 가시성 여부를 전역 상태에 저장하여 컴포넌트 위치에 상관 없이 on/off 할 수 있게 만들었습니다.
   - 프로젝트 정보 역시 전역 상태로 관리함으로써 Props-Drilling을 방지하고 다른 위치에 있는 컴포넌트에 쉽게 렌더링 할 수 있습니다.
 - **미디어 쿼리를 이용해 창 크기에 따라 컴포넌트 글씨 크기 조절**
   - CSS의 미디어 쿼리를 활용하여 윈도우 창의 크기에 따라 캐러셀 및 모달의 크기와 텍스트 크기를 동적으로 조절했습니다.
   - 다양한 디바이스와 화면 크기에 대응하여 컴포넌트들이 적절하게 표시되고 텍스트가 가독성 있게 표시되도록 했습니다.

## 📎링크
### [배포](https://ghsong.netlify.app/)
### [Figma](https://www.figma.com/file/hlUe473MkhgZR6NyhG7Nx8/Portfolio?type=design&node-id=62%3A14&mode=design&t=pkHbpdN6TtxdqW8M-1)

## 📁폴더 구조
```
📂src
 ┃ ┣ 📂Data
 ┃ ┃ ┣ 📜EducationData.tsx
 ┃ ┃ ┣ 📜SkillData.tsx
 ┃ ┃ ┗ 📜projectData.tsx
 ┃ ┣ 📂Pages
 ┃ ┃ ┣ 📂Competency
 ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┣ 📜Education.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Skill.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Skillcard.tsx
 ┃ ┃ ┃ ┗ 📜Competency.tsx
 ┃ ┃ ┣ 📂Intro
 ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┗ 📜IntroCard.tsx
 ┃ ┃ ┃ ┗ 📜Intro.tsx
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┣ 📜IntroTitle.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Linkbar.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MainFont.tsx
 ┃ ┃ ┃ ┗ 📜Main.tsx
 ┃ ┃ ┗ 📂Project
 ┃ ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┃ ┣ 📜Carousel.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ProjectCard.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProjectModal.tsx
 ┃ ┃ ┃ ┗ 📜Project.tsx
 ┃ ┣ 📂Redux
 ┃ ┃ ┣ 📂Reducers
 ┃ ┃ ┃ ┣ 📜modalOpenReducer.tsx
 ┃ ┃ ┃ ┣ 📜projectsInfoReducer.tsx
 ┃ ┃ ┃ ┣ 📜scrollReducer.tsx
 ┃ ┃ ┃ ┗ 📜selectedProjectIdx.tsx
 ┃ ┃ ┗ 📜Store.tsx
 ┃ ┣ 📂Styles
 ┃ ┃ ┣ 📜GlobalStyle.ts
 ┃ ┃ ┗ 📜Theme.ts
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
  ```
