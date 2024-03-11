import Pallete from "../Pallete"
export const projectData: any[] = [
  {
    projectName: 'Buyrricade',
    file: 'buyrricade.png',
    percentage: 100,
    title: '재무관리를 도와주는 똑똑한 가계부',
    desc: 'Buyrricade는 가계부 기능과 데이터 분석을 통해.입출금 내역을 쉽게 체크 할 수 있는 어플리케이션입니다',
    background: '#000000',
    github: 'https://github.com/KingGyeongHoo/seb44_main_007',
    deploy: 'https://buyrricade.netlify.app',
    figma: 'https://www.figma.com/file/RV4Egvhqgwsu4mygqZ51mY/Buyrricade?type=design&node-id=0%3A1&mode=design&t=VM6reKxNaSrpTQpn-1',
    info: {
      stacks: [
        {
          type: 'Frontend',
          stack: ['Javascript,', 'React,', 'Styled-Components,', 'Redux,', 'AXIOS']
        },
        {
          type: 'Backend',
          stack: ['Java,', 'Springboot,', 'MySQL,', 'JWT,', 'AWS']
        },
        {
          type: 'Deploy',
          stack: ['Netlify']
        },
        {
          type: 'ETC',
          stack: ['Git,', 'Github,', 'Figma,', 'Jira']
        },
      ],
      functions: [{
        title: '메인 페이지',
        function: ['스크롤 버튼 클릭시 화면 자동 스크롤',
          '버튼 클릭시 로그인, 회원가입 페이지로 이동',
          '화면 스크롤시 숨겨져 있던 이미지 시각화']
      }, {
        title: '로그인/로그아웃',
        function: ['REST API를 이용하여 서버로부터 데이터 검색, 등록',
          '로그인 성공시 Local Storage에 회원 정보를 저장해 로그인 유지',
          '로그인/회원가입시 입력 내용과 DB의 데이터를 대조하여 유효성 검사 진행']
      }, {
        title: '가계부',
        function: ['위시리스트 등록,입출금 내역 확인',
          '달력을 이용한 월별 지출, 수입 내역 확인 및 시각화']
      }, {
        title: '데이터 분석',
        function: ['Recharts 라이브러리를 이용한 데이터 시각화',
          'Redux를 이용한 전역 상태 관리를 통해 월별 데이터 선택 ']
      }, {
        title: '위시리스트',
        function: ['위시리스트 등록, 삭제, 수정 및 정렬',
          `React-dnd를 이용한 드래그 앤 드롭`,
          '상한 금액 이하의 상품만 활성화']
      }, {
        title: '결제',
        function: ['KakaoPay API를 이용한 카카오 결제',
          '결제시 회원 정보를 프리미엄 회원으로 전환 후 서버에 전송']
      }
      ],
      feeling: '첫 팀 프로젝트였고, 백엔드와 협업하는 것 또한 처음이었기 때문에 많이 헤메고 또 많은 어려움을 겪기도 하였습니다.'
      + '하지만 그 과정에서 Git이나 배포 툴의 사용, 문제 해결 방법 탐색, 새로운 라이브러리의 적용 등 정말 다양하고 방대한 지식 및 경험을 얻을 수 있었습니다.'
      + '그냥 \'코딩 좀 했다\', \'프로젝트 하나 끝냈다\'에서 멈추지 않고, 수많은 문제상황을 마주하고 해결하며.'
      + '단순 코딩 실력 뿐만 아니라 개발자로써의 역량 역시 많이 키울 수 있던 것 같아 굉장히 뿌듯했습니다.'
      + '또한 프로젝트 종료 이후 백엔드 팀원들이 연락이 되지 않아 혼자 AWS 서버를 이용해 데이터 통신을 구현했는데.'
      + '\'전화위복\'이라는 말처럼, AWS라는 새로운 스킬을 배울 수 있는 계기가 되어 한단계 더 성장할 수 있었습니다. '
    }
  },
  {
    projectName: 'CPM',
    file: 'cpm.png',
    percentage: 100,
    title: '전기차, 핸드폰보다 빠르게 충전하자',
    desc: 'CPM은 사용 가능한 전기차 지도를 한눈에 보여주고.충전기 이용 데이터를 제공하여 보다 효율적이고.빠른 전기차 충전을 제공하는 서비스입니다',
    background: '#CBC3A4',
    github: 'https://github.com/KingGyeongHoo/cpm',
    deploy: 'https://cpm-map.netlify.app',
    figma: '',
    info: {
      stacks: [
        {
          type: 'Frontend',
          stack: ['Javascript,', 'React,', 'Styled-Components,', 'Redux,', 'AXIOS']
        },
        {
          type: 'Backend',
          stack: ['AWS']
        },
        {
          type: 'Deploy',
          stack: ['Netlify']
        },
        {
          type: 'ETC',
          stack: ['Git,', 'Github,', 'Figma']
        },
      ],
      functions: [{
        title: '필터',
        function: ['시설구분, 충전소 위치, 충전기 타입 등을 바탕으로 원하는 조건 필터링',
          '충전소명 검색 ',
          '조건에 일치하는 충전기 대수 표기']
      }, {
        title: '지도',
        function: ['KakaoMap API를 사용한 지도 어플리케이션 렌더링',
          'aws-sdk 및 S3를 이용한 데이터 통신 및 위치 렌더링',
          '필터링된 조건에 부합하는 충전소들만 지도에 표시',
          '충전소 클릭시 충전기명, 사용 가능 여부 표시',
          '지도 이동 위치에 따라 상단 지역 주소 변경']
      }, {
        title: '충전소 정보',
        function: ['지도에서 충전기 클릭시 각종 정보 확인',
          'Redux를 이용한 전역 상태 관리를 통해 충전기 선택시 정보 변경']
      }, {
        title: '이용률 분석',
        function: ['Recharts 라이브러리를 이용한 데이터 시각화',
          '각 충전소의 요일별, 일별 이용률을 그래프를 통해 시각화',
          'Custom Graph를 통해 필요한 정보만 표기',
          'Redux를 이용한 전역 상태 관리를 통해 필터별, 충전소별 그래프 데이터 변경']
      }, {
        title: '통계',
        function: ['선택한 충전소와 전체 충전소의 데이터 비교',
          `연간 이용량 표기 및 전체 순위 표시`]
      }
      ],
      feeling: '첫 팀 프로젝트였고, 백엔드와 협업하는 것 또한 처음이었기 때문에 많이 헤메고 또 많은 어려움을 겪기도 하였습니다.'
      + '하지만 그 과정에서 Git이나 배포 툴의 사용, 문제 해결 방법 탐색, 새로운 라이브러리의 적용 등 정말 다양하고 방대한 지식 및 경험을 얻을 수 있었습니다.'
      + '그냥 \'코딩 좀 했다\', \'프로젝트 하나 끝냈다\'에서 멈추지 않고, 수많은 문제상황을 마주하고 해결하며.'
      + '단순 코딩 실력 뿐만 아니라 개발자로써의 역량 역시 많이 키울 수 있던 것 같아 굉장히 뿌듯했습니다.'
      + '또한 프로젝트 종료 이후 백엔드 팀원들이 연락이 되지 않아 혼자 AWS 서버를 이용해 데이터 통신을 구현했는데.'
      + '\'전화위복\'이라는 말처럼, AWS라는 새로운 스킬을 배울 수 있는 계기가 되어 한단계 더 성장할 수 있었습니다. '
    }
  },
  {
    projectName: 'Portfolio',
    file: 'portfolio.png',
    percentage: 40,
    title: 'All about 송경후',
    desc: '현재 보고 계시는 프론트엔드 개발자 송경후의 웹 포트폴리오로.정보, 기술 스택, 프로젝트 등을 확인 할 수 있는 페이지 입니다.',
    background: `url(${process.env.PUBLIC_URL}/img/content_bg_main.png)`,
    github: 'https://github.com/KingGyeongHoo/portfolio',
    deploy: '',
    figma: 'https://www.figma.com/file/hlUe473MkhgZR6NyhG7Nx8/Portfolio?type=design&node-id=62%3A14&mode=design&t=pkHbpdN6TtxdqW8M-1',
    info: {
      stacks: [
        {
          type: 'Frontend',
          stack: ['Javascript,', 'React,', 'Styled-Components,', 'Redux,', 'AXIOS']
        },
        {
          type: 'Backend',
          stack: ['Java,', 'Springboot,', 'MySQL,', 'JWT,', 'AWS']
        },
        {
          type: 'Deploy',
          stack: ['Netlify']
        },
        {
          type: 'ETC',
          stack: ['Git,', 'Github,', 'Figma,', 'Jira']
        },
      ],
      functions: [{
        title: '메인 페이지',
        function: ['스크롤 버튼 클릭시 화면 자동 스크롤',
          '버튼 클릭시 로그인, 회원가입 페이지로 이동',
          '화면 스크롤시 숨겨져 있던 이미지 시각화']
      }, {
        title: '로그인/로그아웃',
        function: ['REST API를 이용하여 서버로부터 데이터 검색, 등록',
          '로그인 성공시 Local Storage에 회원 정보를 저장해 로그인 유지',
          '로그인/회원가입시 입력 내용과 DB의 데이터를 대조하여 유효성 검사 진행']
      }, {
        title: '가계부',
        function: ['위시리스트 등록,입출금 내역 확인',
          '달력을 이용한 월별 지출, 수입 내역 확인 및 시각화']
      }, {
        title: '데이터 분석',
        function: ['Recharts 라이브러리를 이용한 데이터 시각화',
          'Redux를 이용한 전역 상태 관리를 통해 월별 데이터 선택 ']
      }, {
        title: '위시리스트',
        function: ['위시리스트 등록, 삭제, 수정 및 정렬',
          `React-dnd를 이용한 드래그 앤 드롭`,
          '상한 금액 이하의 상품만 활성화']
      }, {
        title: '결제',
        function: ['KakaoPay API를 이용한 카카오 결제',
          '결제시 회원 정보를 프리미엄 회원으로 전환 후 서버에 전송']
      }
      ],
      feeling: '첫 팀 프로젝트였고, 백엔드와 협업하는 것 또한 처음이었기 때문에 많이 헤메고 또 많은 어려움을 겪기도 하였습니다.'
      + '하지만 그 과정에서 Git이나 배포 툴의 사용, 문제 해결 방법 탐색, 새로운 라이브러리의 적용 등 정말 다양하고 방대한 지식 및 경험을 얻을 수 있었습니다.'
      + '그냥 \'코딩 좀 했다\', \'프로젝트 하나 끝냈다\'에서 멈추지 않고, 수많은 문제상황을 마주하고 해결하며.'
      + '단순 코딩 실력 뿐만 아니라 개발자로써의 역량 역시 많이 키울 수 있던 것 같아 굉장히 뿌듯했습니다.'
      + '또한 프로젝트 종료 이후 백엔드 팀원들이 연락이 되지 않아 혼자 AWS 서버를 이용해 데이터 통신을 구현했는데.'
      + '\'전화위복\'이라는 말처럼, AWS라는 새로운 스킬을 배울 수 있는 계기가 되어 한단계 더 성장할 수 있었습니다. '
    }
  }
]