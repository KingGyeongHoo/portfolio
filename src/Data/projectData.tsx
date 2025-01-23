export interface Project {
  projectName: string;
  file: string;
  date: string;
  title: string;
  desc: string;
  background: string;
  type: string;
  github: string;
  deploy: string;
  figma: string;
  info: Info;
}
export interface Info {
  stacks: StacksProps[];
  mainFunction: string[];
  functions: Functions[];
  troubleShooting?: TroubleShooting[];
  feeling: string;
}
export interface StacksProps {
  type: string;
  stack: string[];
}
export interface Functions {
  title: string;
  function: string[];
}
export interface TroubleShooting {
  trouble: string;
  solution: string;
}
export const projectData: Project[] = [
  {
    projectName: "Yogosoda",
    file: "yogosoda.png",
    date: "2024.10 - 2024.11",
    title: "KT 요고 요금제 UI/UX 개선 프로젝트",
    desc: "고용노동부 미래내일 일경험 - KT 요고 요금제 UI/UX 개선 프로젝트",
    background: "#04cbb4",
    type: "Team Project",
    github: "https://github.com/KingGyeongHoo/yogosoda-project",
    deploy: "https://yogosoda-project.vercel.app/",
    figma: "",
    info: {
      stacks: [
        {
          type: "Frontend",
          stack: [
            "Typescript",
            "HTML",
            "CSS",
            "React",
            "Next.js",
            "TailwindCSS",
          ],
        },
        {
          type: "Backend",
          stack: ["Next.js"],
        },
        {
          type: "Deploy",
          stack: ["Vercel"],
        },
        {
          type: "ETC",
          stack: ["Git", "Github", "Slack", "Notion", "Google Generative AI"],
        },
      ],
      mainFunction: [
        "요고 가입 혜택 페이지 구현",
        "요금제 필터 기능 구현",
        "인공지능 챗봇 기능 구현",
      ],
      functions: [
        {
          title: "요고 가입 혜택 페이지 구현",
          function: [
            "기존 이미지 파일로 제공되던 UI를 컴포넌트화",
            "REST API를 활용해 요금제 데이터를 받아와 조건에 맞는 요금제 정보를 내보냄",
            "Scroll 기능을 이용해 혜택 버튼 클릭시 상세 혜택 컴포넌트로 이동",
          ],
        },
        {
          title: "요금제 변경 페이지 필터링 구현",
          function: [
            "'useFilter' Custom Hook을 생성하여 초기값 설정, 범위 설정, 필터링 데이터 반환 등 필터링 기능 구현",
            "필터 슬라이드바 구현 및 슬라이드바 이동에 따른 데이터 범위 설정 로직 적용",
            "필터링 적용, 초기화, 요금-데이터 변환 기능 추가",
            "필터링 컴포넌트 on/off 기능 및 애니메이션 적용",
          ],
        },
        {
          title: "랜딩 페이지 스와이프 구현",
          function: [
            "Web API의 onTouchStart, onTouchMove, onTouchEnd 메서드를 사용하여 스와이프 기능 구현",
            "터치한 요소의 X좌표와 이동한 거리를 계산하여 스와이프 방향으로 움직였다면 랜딩 컴포넌트를 화면 끝으로 이동",
          ],
        },
      ],
      troubleShooting: [
        {
          trouble:
            "UI가 하나의 이미지로 제공되어 리소스 용량이 커지는 현상 발생",
          solution:
            "이미지로 제공되던 UI들을 컴포넌트화하여 리소스 용량 약 12% 감소 효과",
        },
        {
          trouble:
            "다운받을 컨텐츠가 많아 초기 로딩 속도가 약 7~8초 이상 소요되는 현상 발생",
          solution:
            "랜딩 페이지를 추가하여 초기 다운로드 속도를 줄이고, SSR 방식을 통해 페이지 이동시 컨텐츠를 다운받아 최초 렌더링 속도 6s 감소",
        },
        {
          trouble:
            "각 페이지 접속시 컨텐츠 로딩 속도가 약 3초 이상 지연되는 현상 발생",
          solution:
            "HTML의 <img> 태그 대신 Lazy Loading이 지원되는 Next의 <Image> 태그를 사용하여 페이지, 컨텐츠 로딩 속도 약 4s 감소",
        },
        {
          trouble: "SEO 최적화가 이루어지지 않은 문제 발생",
          solution:
            "LightHouse를 이용한 성능 테스트 및 alt 속성 부여를 통한 SEO 최적화",
        },
      ],
      feeling:
        "미래내일 일경험 사업 프로젝트형 코스에 참여하며 진행하게 된 프로젝트입니다.\n" +
        "기존 KT 요고 요금제 페이지를 클론하는 작업과, 기존 UI/UX에서 개선이 필요한 부분을 찾아 변경사항을 적용하는 작업을 동시에 진행했습니다.\n" +
        "프로젝트 팀원은 5명이었는데, 약 3년정도 풀스택 실무를 경험하고 오신 팀원 분이 계셔 프론트엔드 / 백엔드 두 분야 모두 큰 도움을 받을 수 있었습니다.\n" +
        "효율적인 코드 작성, SSR 데이터 관리, Custom Hook 활용 등 다양한 부분에서 배움을 얻었고, 실제 개발 환경에 적용해 보기도 했습니다.\n" +
        "또한, 처음으로 Next.js와 Tailwind CSS를 사용해서 프로젝트를 진행했습니다.\n" +
        "Server Side Rendering과 Client Side Rendering의 차이를 그동안 제대로 체감하지 못했었는데, 이번 프로젝트를 통해 두 방식의 차이를 확실히 알 수 있었습니다.\n" +
        "이를 바탕으로 정적 렌더링이 필요한 페이지와 동적 렌더링이 필요한 페이지를 구분하고, 상황에 따라 렌더링 방식을 선택 할 수 있게 되었습니다.\n" +
        "Generative AI를 이용한 생성형 컨텐츠 경험을 통해 AI 분야와의 협업 및 기술 적용에 대해 식견을 넓힌 것도 큰 소득이 되었습니다.\n" +
        "다만, Next.js의 API Routes를 이용한 서버 구현은 건드려 보지 못했는데, 이 부분에 대해 좀 더 공부하여 DB 연동 및 풀스택 개발도 도전해 보아야겠다고 생각했습니다.\n",
    },
  },
  {
    projectName: "HomePredictor",
    file: "homepredictor.png",
    date: "2024.03 - 2024.04",
    title: "AI 부동산 예측 서비스",
    desc: "HomePredictor는 혼란한 부동산 시장 속, 3개월 후의 집값을 예측해 현명한 소비 및 투자를 도와주는 AI 부동산 예측 서비스입니다.\n",
    background: "#378ce7",
    type: "Team Project",
    github: "https://github.com/KingGyeongHoo/homepredictor",
    deploy: "https://homepredictor.netlify.app/",
    figma:
      "https://www.figma.com/file/vgTUmYcOKal4pA5FaBq7CR/HomePredictor?type=design&node-id=0%3A1&mode=design&t=VOJOhGp1GsNy1FGQ-1",
    info: {
      stacks: [
        {
          type: "Frontend",
          stack: [
            "Typescript",
            "HTML",
            "CSS",
            "React",
            "Styled-Components",
            "Recoil",
          ],
        },
        {
          type: "Backend",
          stack: ["Next.js"],
        },
        {
          type: "Deploy",
          stack: ["Netlify", "Vercel"],
        },
        {
          type: "ETC",
          stack: ["Git", "Github", "Figma", "Photoshop", "Slack", "Notion"],
        },
      ],
      mainFunction: [
        "AI 부동산 가격 예측 데이터 연동",
        "Naver API 및 사이드 서버를 통한 뉴스 데이터 수집",
      ],
      functions: [
        {
          title: "부동산 검색",
          function: [
            "REST API를 이용해 검색 조건에 맞는 데이터를 GET한 뒤 검색 결과 컴포넌트에 렌더링",
            "indexOf 메서드로 검색 결과 중 현재 검색어에 해당되는 부분만 하이라이트 처리",
            "Recoil을 활용한 전역 상태 관리로 클릭한 부동산의 데이터를 결과 페이지로 전송",
          ],
        },
        {
          title: "서비스 소개",
          function: [
            "React-Intersection-Observer 라이브러리를 이용해 화면에 컴포넌트가 감지될시 투명도를 변경하여 시각화",
            "keyframe, animation을 이용해 아래에서부터 나타나는 애니메이션 효과 적용",
            "TOP 버튼 클릭시 scrollTo를 top으로 설정하여 화면 맨 위(검색창)로 이동",
            "미디어 쿼리를 이용한 반응형 웹 제작 및 모바일 버전 최적화",
          ],
        },
        {
          title: "가격 예측",
          function: [
            "Google Generative AI를 도입하여 기존 데이터를 바탕으로 3개월 후의 데이터 예측",
            "Recharts 라이브러리를 이용해 가격 데이터를 그래프로 시각화하여 직관적으로 처리",
          ],
        },
        {
          title: "관련 뉴스 크롤링",
          function: [
            "네이버 검색 API를 이용해 관련 뉴스 크롤링",
            "url query를 조작하여 조건에 맞는 뉴스 데이터 Get",
            "Array 자료구조를 이용해 받아온 뉴스 데이터 페이지네이션",
          ],
        },
        {
          title: "사이드 서버 구축",
          function: [
            "데이터를 서버측에서 관리 및 네이버 API 연동을 위한 사이드 서버를 구축",
            "Next.js의 API Routes를 활용하여 서버 구현",
          ],
        },
      ],
      troubleShooting: [
        {
          trouble:
            "부동산 검색시 타이핑 횟수만큼 서버에 HTTP 요청이 전송되어 트래픽이 비정상적으로 높아지는 현상 발생",
          solution:
            "useSearch Hook에 디바운싱 기능을 도입하여 검색 성능 개선 및 서버 트래픽 약 80% 감소",
        },
        {
          trouble:
            "백엔드 API 삭제로 부동산, 가격 데이터를 클라이언트에 보관해 번들 용량이 커지는 현상 발생",
          solution:
            "사이드 서버를 구축하고 데이터를 서버 측에서 관리함으로써 클라이언트 번들 용량 30% 이상 감소",
        },
        {
          trouble:
            "Naver 검색 API 이용시 클라이언트에서 바로 요청을 보내면 CORS Error 발생 (네이버 정책상)",
          solution:
            "클라이언트 - 사이드 서버 - Naver API - 사이드 서버 - 클라이언트의 과정으로 검색 결과를 중계하여 CORS Error 해결",
        },
        {
          trouble:
            "프로젝트 종료 후 AI 데이터 및 서버 API가 소실되어 가격 예측 정보 미제공",
          solution:
            "Google Generative AI API를 활용해 예측 결과를 JSON으로 받아와 가격 예측 간접 구현",
        },
      ],
      feeling:
        "정말 오랜만에 다른 분들, 특히 AI 개발자 분들과 협업하며 진행한 팀 프로젝트입니다.\n" +
        "백엔드, AI 분들이서 먼저 프로젝트를 진행하시다가 프론트엔드 개발자를 구하셔서 들어온 터라 디자인, 개발, 유지/보수까지 모두 처음부터 진행했습니다.\n" +
        "프론트엔드는 2명이었는데, 다른 분이 저보다 더욱 숙련된 개발자 분이셔서 기술적인 부분에서 정말 도움을 많이 받았습니다.\n" +
        "특히 Styled-Components의 다양한 기능과 활용법에 대해 알 수 있었고, 이를 실제로 사용해 보며 컴포넌트 개발을 훨씬 편리하게 할 수 있었습니다.\n" +
        "그동안은 단순히 컴포넌트를 제작하고 이를 재사용 하는 수준에서 그쳤지만, 전역 스타일 관리나, 테마를 활용한 디자인 시스템에 대해서도 알게 되었습니다.\n" +
        "또한, 요즘 핫한 CSS 전처리기인 SCSS 방식을 이용해 컴포넌트를 디자인하는 방법을 배우며 CSS 스킬을 하나 더 추가 할 수 있었습니다.\n" +
        "그리고 프로젝트를 리팩토링하는 과정에서 Next.js를 활용해 사이드 서버를 직접 구축하고 배포까지 하였습니다.\n" +
        "프로젝트가 오래되어 백엔드 API가 모두 비활성화 되었고, 네이버 API의 정책상 클라이언트에서 API를 직접 호출 할 수 없어 서버를 구축하게 되었습니다.\n" +
        "기존 Express.js가 아닌 Next.js의 API Routes를 활용함으로써 최신 기술에 대한 동향을 익힐 수 있었고, 배포 역시 아주 쉽게 진행 할 수 있었습니다.\n" +
        "비록 이번 프로젝트에서는 생성형 AI를 이용해 간접적인 예측 데이터를 사용했지만, 언젠가는 웹에서 설정한 조건에 따라 실시간으로 학습하고 결과를 보여주는 웹 사이트를 만들어 보고 싶다는 생각을 했습니다.\n",
    },
  },
  {
    projectName: "Portfolio",
    file: "portfolio.png",
    date: "2024.02 - 2024.03",
    title: "All about 송경후",
    desc: "현재 보고 계시는 프론트엔드 개발자 송경후의 웹 포트폴리오로.정보, 기술 스택, 프로젝트 등을 확인 할 수 있는 페이지 입니다.\n",
    background: "#EFEFEF",
    type: "Personal Project",
    github: "https://github.com/KingGyeongHoo/portfolio",
    deploy: "https://ghsong.netlify.app/",
    figma:
      "https://www.figma.com/file/hlUe473MkhgZR6NyhG7Nx8/Portfolio?type=design&node-id=62%3A14&mode=design&t=pkHbpdN6TtxdqW8M-1",
    info: {
      stacks: [
        {
          type: "Frontend",
          stack: [
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "Styled-Components",
            "Redux",
          ],
        },
        {
          type: "Backend",
          stack: ["-"],
        },
        {
          type: "Deploy",
          stack: ["Netlify"],
        },
        {
          type: "ETC",
          stack: ["Git", "Github", "Figma", "Photoshop"],
        },
      ],
      mainFunction: ["Media Query를 통한 반응형 웹 구현"],
      functions: [
        {
          title: "메인 페이지 & Intro",
          function: [
            "Scroll 이벤트를 활용한 반응형 웹 구현",
            "Scroll 양을 전역 상태에 저장하고, props로 전달",
            "전달받은 props에 따라 가시성, position, 크기 등을 업데이트",
          ],
        },
        {
          title: "Education & Skills",
          function: [
            "GlobalStyles를 이용한 전역 컴포넌트 및 스타일 저장",
            "전역 스타일 활용으로 코드 중복 방지 및 가독성 향상 효과.\n",
          ],
        },
        {
          title: "Projects",
          function: [
            `Position 속성을 활용한 Carousel 제작`,
            "전역 상태관리로 Modal 및 프로젝트별 데이터 관리",
            "미디어 쿼리를 이용한 컴포넌트 사이즈 조절",
          ],
        },
      ],
      troubleShooting: [
        {
          trouble:
            "웹 성능이 최적화되지 않아 렌더링, 컨텐츠 표시가 느려지는 오류 발생",
          solution: "LightHouse를 활용해 웹 페이지 성능 검사 후 최적화 진행",
        },
      ],

      feeling:
        "오래 전부터 '내 홈페이지가 있었으면 좋겠다'라는 생각을 갖고 있었는데, 마침 취업을 준비하며.\n" +
        "'포트폴리오를 웹 페이지를 만들어 보는것이 어떻냐'는 조언을 받아 제작하게 된 개인 포트폴리오 사이트입니다.\n" +
        "Javascript로 개발했던 다른 사이트들과 달리 Typescript를 이용해 제작하였습니다.\n" +
        "Type을 맞추고, interface를 만드는 것들이 정말 어려웠지만, 하다보니 조금은 익숙해진 것 같습니다.\n" +
        "또한, 그동안 머릿속으로 생각만 하고 있던 반응형 웹 + 모바일 버전도 본격적으로 만들어 보았습니다.\n" +
        "처음에 무턱대고 시작했다가 크기도 폰트도 이상하게 조절되어 굉장히 힘들었고, 원하는대로 컴포넌트들이 리사이즈되지 않아 굉장히 애를 먹었습니다.\n" +
        "하지만 검색과 오픈소스, 그리고 다른 분들의 페이지를 참고하며 반응형 요소를 계속 공부해 처음보다 훨씬 좋아진 반응형 웹을 만들 수 있었습니다.\n" +
        "비록 Typescript와 반응형 웹을 100% 익혔다고 할 수는 없지만, 새로운 시도를 했고 어느정도 성과를 거둔 것에 굉장히 뿌듯함을 느끼고 있습니다.\n" +
        "다음 프로젝트때는 이번에 익힌 스택들을 더더욱 발전시키고, SCSS나 Tailwind같은 새로운 스택들에도 도전해 볼 계획입니다.\n",
    },
  },
  {
    projectName: "CPM",
    file: "cpm.png",
    date: "2023.12 - 2024.02",
    title: "전기차, 핸드폰보다 빠르게 충전하자",
    desc: "2023 실험실 창업 탐색 프로그램 출품작 - 효율성, 속도 두마리 토끼릅 잡는 전기차 충전기 지도 서비스",
    background: "#CBC3A4",
    type: "Personal Project",
    github: "https://github.com/KingGyeongHoo/cpm",
    deploy: "https://cpm-map.netlify.app",
    figma: "",
    info: {
      stacks: [
        {
          type: "Frontend",
          stack: [
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "Styled-Components",
            "Redux",
            "React-Query",
          ],
        },
        {
          type: "Backend",
          stack: ["AWS-sdk"],
        },
        {
          type: "Deploy",
          stack: ["Netlify"],
        },
        {
          type: "ETC",
          stack: ["Git", "Github", "Figma", "Photoshop"],
        },
      ],
      mainFunction: [
        "KakaoMap API를 사용한 지도 어플리케이션",
        "Recharts 그래프 렌더링",
      ],
      functions: [
        {
          title: "필터",
          function: [
            "시설구분, 충전소 위치, 충전기 타입, 검색결과 등을 바탕으로 원하는 조건 필터링",
            "조건에 일치하는 충전기 대수 표기",
          ],
        },
        {
          title: "지도",
          function: [
            "KakaoMap API를 사용한 지도 어플리케이션 렌더링",
            "aws-sdk 및 S3를 이용한 데이터 통신 및 위치 렌더링",
            "React-Query를 이용한 데이터 통신 상태 관리 및 캐싱",
            "필터링된 조건에 부합하는 충전소들만 지도에 표시",
            "충전소 클릭시 충전기명, 사용 가능 여부 표시",
            "지도 이동 위치에 따라 상단 지역 주소 변경",
          ],
        },
        {
          title: "충전소 정보",
          function: [
            "지도에서 충전기 클릭시 각종 정보 확인",
            "Redux를 이용해 충전기 정보를 전역으로 관라히며 지도에서 선택한 충전소의 이용 정보를 통계 컴포넌트에 표시",
          ],
        },
        {
          title: "이용률 분석",
          function: [
            "Recharts 라이브러리를 이용한 데이터 시각화",
            "각 충전소의 요일별, 일별 이용률을 그래프를 통해 시각화",
            "Recharts 그래프를 커스텀하여 디자인 변경 및 필요한 정보만 표기",
          ],
        },
        {
          title: "통계",
          function: [
            "선택한 충전소와 전체 충전소의 이용률, 가격 등의 데이터 비교",
            `연간 이용량 표기 및 전체 순위 표시`,
          ],
        },
      ],
      troubleShooting: [
        {
          trouble:
            "6만개 이상의 데이터를 클라이언트에서 처리해 로딩 속도 및 번들 용량이 비정상적으로 커지는 현상 발생",
          solution:
            "AWS S3 Bucket에 데이터를 저장한 뒤 SDK를 통해 접근함으로써 클라이언트 번들 용량 13mb감소 및 초기 로딩 속도 7s 이상 개선",
        },
        {
          trouble:
            "KakaoMap 마커에 Hover시 InfoWindow 컨텐츠가 제대로 표기되지 않는 오류 발생",
          solution:
            "템플릿 리터럴을 사용한 동적 HTML 생성 방식을 채택하여 InfoWindow 객체에 직접 HTML 요소를 전달하는 방식으로 문제 해결",
        },
      ],
      feeling:
        "학교 동기의 실험실 창업 탐색교육 출품을 도와주기 위해 시작했지만, 여러 라이브러리와 API를 다뤄보는 과정에서 흥미를 느껴 본격적으로 개발하게 되었습니다.\n" +
        "카카오맵 API와 Recharts 라이브러리를 주력으로 사용했는데, 초기에는 혼란스럽고 헷갈렸지만 시행착오를 거치고, 개발 문서를 읽음으로써 문제를 해결 할 수 있었습니다.\n" +
        "특히, 카카오맵 API의 다양한 기능과 활용법을 이해하는 과정에서 큰 성취감을 느꼈습니다.\n" +
        "처음에는 지도를 구현하는것 조차 어려웠으나 익숙해진 후에는 원하는 대로 맵을 개조하여 프로젝트에 필요한 기능을 추가할 수 있었습니다.\n" +
        "이후 리팩토링 과정에서 React-Query를 학습한 후 직접 사용해 보며 새로운 기술 스택을 적용 해 보고, 데이터 캐싱을 통한 성능 관리를 경험 해보았습니다.\n" +
        "다만, 이 프로젝트를 개발하면서 반응형 웹 디자인에 대한 고려가 부족했다는 점은 아쉽게 생각합니다.\n" +
        "반응형 웹은 만족스러운 UX를 위해 매우 중요한 부분이라고 생각하기 때문에, 앞으로는 이를 고려하여 보다 사용자 친화적이고 다양한 디바이스에서 최적화된 경험을 제공할 수 있도록 노력하겠습니다.\n" +
        "또한 프로젝트는 협업이었지만, 프론트엔드 개발만 담당했기에 데이터를 DB에서 관리하고, 서버를 통해 클라이언트로 불러오는 과정을 추가해 봤으면 어땠을까 하는 아쉬움도 남습니다.\n" +
        "꾸준히 프로젝트를 관리하고, 리팩토링하며 점차 성능을 개선하며 새로운 기술들을 적용하는 것에 대한 즐거움을 느낄 수 있었습니다.\n",
    },
  },
  {
    projectName: "Buyrricade",
    file: "buyrricade.png",
    date: "2023.06 - 2023.07",
    title: "재무관리를 도와주는 똑똑한 가계부",
    desc: "Buyrricade는 가계부 기능과 데이터 분석을 통해.입출금 내역을 쉽게 체크 할 수 있는 어플리케이션입니다",
    background: "#000000",
    type: "Team Project",
    github: "https://github.com/KingGyeongHoo/seb44_main_007",
    deploy: "https://buyrricade.netlify.app",
    figma:
      "https://www.figma.com/file/RV4Egvhqgwsu4mygqZ51mY/Buyrricade?type=design&node-id=0%3A1&mode=design&t=VM6reKxNaSrpTQpn-1",
    info: {
      stacks: [
        {
          type: "Frontend",
          stack: [
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "Styled-Components",
            "Redux",
            "AXIOS",
          ],
        },
        {
          type: "Backend",
          stack: ["Java", "Springboot", "MySQL", "JWT", "AWS-sdk"],
        },
        {
          type: "Deploy",
          stack: ["Netlify"],
        },
        {
          type: "ETC",
          stack: ["Git", "Github", "Figma", "Jira"],
        },
      ],
      mainFunction: ["React-DnD를 이용한 드래그 앤 드롭", "KakaoPay API 결제"],
      functions: [
        {
          title: "메인 페이지",
          function: [
            "스크롤 버튼 클릭시 화면 자동 스크롤",
            "버튼 클릭시 로그인, 회원가입 페이지로 이동",
            "화면 스크롤시 숨겨져 있던 이미지 시각화",
          ],
        },
        {
          title: "로그인/로그아웃",
          function: [
            "REST API를 이용하여 서버로부터 데이터 검색, 등록",
            "로그인 성공시 Local Storage에 회원 정보를 저장해 로그인 유지",
            "로그인/회원가입시 입력 내용과 DB의 데이터를 대조하여 유효성 검사 진행",
          ],
        },
        {
          title: "가계부",
          function: [
            "위시리스트 등록,입출금 내역 확인",
            "달력을 이용한 월별 지출, 수입 내역 확인 및 시각화",
          ],
        },
        {
          title: "데이터 분석",
          function: [
            "Recharts 라이브러리를 이용한 데이터 시각화",
            "Redux를 이용한 전역 상태 관리를 통해 월별 데이터 선택 ",
          ],
        },
        {
          title: "위시리스트",
          function: [
            "위시리스트 등록, 삭제, 수정 및 정렬",
            `React-dnd를 이용한 드래그 앤 드롭`,
            "상한 금액 이하의 상품만 활성화",
          ],
        },
        {
          title: "결제",
          function: [
            "KakaoPay API를 이용한 카카오 결제",
            "결제시 회원 정보를 프리미엄 회원으로 전환 후 서버에 전송",
          ],
        },
        {
          title: "마이페이지",
          function: [
            "회원정보 확인 및 수정",
            "회원 정보 수정 및 프리미엄 해지시 회원 정보를 변경 후 서버에 전송",
          ],
        },
      ],
      feeling:
        "저는 홈, 로그인/회원가입, 위시리스트, 그리고 결제 페이지를 담당했습니다.\n" +
        "첫 팀 프로젝트였고, 백엔드와 협업하는 것 또한 처음이었기 때문에 많이 헤메고 또 많은 어려움을 겪기도 하였습니다.\n" +
        "하지만 그 과정에서 Git이나 배포 툴의 사용, 문제 해결 방법 탐색, 새로운 라이브러리의 적용 등 정말 다양하고 방대한 지식 및 경험을 얻을 수 있었습니다.\n" +
        "그냥 '코딩 좀 했다', '프로젝트 하나 끝냈다'에서 멈추지 않고, 수많은 문제상황을 마주하고 해결하며.\n" +
        "단순 코딩 실력 뿐만 아니라 개발자로써의 역량 역시 많이 키울 수 있던 것 같아 굉장히 뿌듯했습니다.\n" +
        "또한 프로젝트 종료 이후 백엔드 팀원들이 연락이 되지 않아 혼자 AWS 서버를 이용해 데이터 통신을 구현했는데.\n" +
        "'전화위복'이라는 말처럼, AWS라는 새로운 스킬을 배울 수 있는 계기가 되어 한단계 더 성장할 수 있었습니다.\n" +
        "하지만 이미지 업로드나, 로그인시 JWT 이용 같은 부분들은 백엔드 지식이 부족해 제대로 구현할 수 없었던 것이 아쉽습니다.\n" +
        "백엔드 파트도 꾸준히 공부하여 스스로 서버를 구현하고, 더욱 강화된 보안/인증 기능을 구현하는 것이 목표입니다",
    },
  },
];
