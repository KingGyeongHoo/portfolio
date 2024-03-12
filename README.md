# GH's Portfolio
![MainImg](https://github.com/KingGyeongHoo/portfolio/assets/117385050/d67ad491-7e95-41b2-ba37-eff567a247ad)

## 📃프로젝트 소개

프론트엔드 개발자 송경후의 웹 포트폴리오입니다.
각종 정보, 기술 스택, 프로젝트 등을 확인 하실 수 있습니다.

### 📆개발 기간
**2024.02~2024.03**

## ✏목차
1. **기술 스택**
2. **주요 기능**
3. **링크**
4. **폴더 구조**

## 🛠기술 스택
- **Frontend**: <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- **Deployment**: <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
- **Other Tools**: <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"><img src="https://img.shields.io/badge/photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white">

## 💻주요 기능

### 메인 페이지
 - **Keyframe과 애니메이션을 이용한 타이핑 효과**
   - 페이지의 특정 텍스트를 타이핑하는 효과를 구현하기 위해 CSS의 Keyframe과 애니메이션을 활용했습니다.
   - 텍스트가 자연스럽게 나타나고 사라지는 느낌을 주기 위해 디자인 및 타이밍을 조정했습니다.
 - **버튼 클릭시 아래 페이지로 이동**
   - JavaScript의 스크롤링 기능을 사용하여 원하는 위치로 스크롤되도록 설정했습니다.
   - 페이지 간의 부드러운 전환을 위해 애니메이션 효과를 추가했습니다.
###  내비게이션 바
 - **현재 페이지에 해당하는 박스에 하이라이트**
   - 네비게이션 바에 있는 각 항목 중 현재 화면에 보이는 페이지와 관련된 항목에 하이라이트를 적용하여 사용자가 현재 위치를 쉽게 파악할 수 있도록 했습니다.
 - **클릭시 해당 박스가 가리키는 페이지로 이동**
   - 네비게이션 바의 각 항목을 클릭하면 해당 항목이 가리키는 페이지로 자동으로 스크롤되도록 구현했습니다.
   - section 태그를 사용해 이동 위치를 지정하고, querySelector를 이용해 해당 섹션으로 이동하도록 하였습니다.
###  About
 - **가상 요소를 이용한 테두리 설정 및 Flexbox를 이용한 반응형 페이지 설계**
   - Flexbox를 사용하여 반응형 디자인을 구현하고, before, after 요소를 통해 테두리를 설정하여 페이지의 레이아웃을 보다 유연하고 세련되게 디자인했습니다.
 - **Redux를 이용한 전역 상태 관리를 통해 현재 페이지 전달**
   - Redux를 사용하여 전역 상태를 관리하고, 현재 페이지 정보를 저장하고 전달함으로써 페이지 간의 상태를 효과적으로 관리했습니다.
   - 이를 통해 각 컴포넌트 간의 데이터 공유와 페이지 상태 관리를 향상시켰습니다.
 - **useInView Hook을 통해 페이지가 화면에 보일시 Redux에 현재 페이지 저장**
   - useInView Hook을 사용하여 페이지의 가시성 여부를 감지하고, 가시성 여부가 감지되면 Redux에 현재 페이지 정보를 저장했습니다.
   - 사용자가 스크롤하여 다른 페이지로 이동할 때마다 Redux 상태가 업데이트되어 현재 위치한 페이지를 정확히 파악할 수 있게 했습니다.
###  Skills
 - **전역 상태관리로 Modal 및 스킬별 데이터 관리**
   - Redux를 활용하여 전역 상태로 모달 창을 관리하고, 각 스킬의 데이터를 효율적으로 관리했습니다.
   - 여러 컴포넌트 간에 데이터를 공유하고 관리함으로써 모달 창의 상태를 일관되게 유지하고 스킬 데이터를 효과적으로 관리했습니다.
 - **Recharts를 이용한 숙련도, 사용빈도, 경험, 응용력, 공부기간 시각화**
   - Recharts 라이브러리를 활용하여 각 스킬의 숙련도, 사용 빈도, 경험, 응용력, 공부 기간 등을 시각적으로 표현하여 사용자가 각 스킬의 정보를 직관적으로 파악할 수 있게 했습니다.
### Projects
 - **전역 상태관리로 Modal 및 프로젝트별 데이터 관리**
 - **미디어 쿼리를 이용해 창 크기에 따라 Modal 크기와 글씨 크기 조절**
   - CSS의 미디어 쿼리를 활용하여 창의 크기에 따라 모달 창의 크기와 텍스트 크기를 동적으로 조절했습니다.
   - 다양한 디바이스와 화면 크기에 대응하여 모달 창이 적절하게 표시되고 텍스트가 가독성 있게 표시되도록 했습니다.

## 📎링크
### [배포](https://ghsong.netlify.app/)
### [Figma](https://www.figma.com/file/hlUe473MkhgZR6NyhG7Nx8/Portfolio?type=design&node-id=62%3A14&mode=design&t=pkHbpdN6TtxdqW8M-1)

## 📁폴더 구조
```
📦src
 ┣ 📂Data
 ┃ ┣ 📜InfoData.tsx
 ┃ ┣ 📜SkillData.tsx
 ┃ ┗ 📜projectData.tsx
 ┣ 📂Pages
 ┃ ┣ 📂About
 ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┣ 📜Information.tsx
 ┃ ┃ ┃ ┣ 📜Text.tsx
 ┃ ┃ ┃ ┗ 📜Title.tsx
 ┃ ┃ ┗ 📜About.tsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┣ 📜MainLeft.tsx
 ┃ ┃ ┃ ┗ 📜MainRight.tsx
 ┃ ┃ ┗ 📜Main.tsx
 ┃ ┣ 📂Navbar
 ┃ ┃ ┗ 📜Navbar.tsx
 ┃ ┣ 📂Project
 ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┃ ┗ 📜ProjectsModal.tsx
 ┃ ┃ ┗ 📜Project.tsx
 ┃ ┗ 📂Skills
 ┃ ┃ ┣ 📂Components
 ┃ ┃ ┃ ┣ 📜Graph.tsx
 ┃ ┃ ┃ ┣ 📜GraphModal.tsx
 ┃ ┃ ┃ ┗ 📜SkillBox.tsx
 ┃ ┃ ┗ 📜Skills.tsx
 ┣ 📂Redux
 ┃ ┣ 📂Reducers
 ┃ ┃ ┣ 📜modalOpenReducer.tsx
 ┃ ┃ ┣ 📜pageReducer.tsx
 ┃ ┃ ┣ 📜projectsInfoReducer.tsx
 ┃ ┃ ┣ 📜projectsModalOpenReducer.tsx
 ┃ ┃ ┗ 📜skillsInfoReducer.tsx
 ┃ ┗ 📜Store.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜Pallete.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
  ```
