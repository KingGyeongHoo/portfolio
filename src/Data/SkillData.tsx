interface Skills{
    skill: string;
    color?: string;
    prof:number;
    info?:Array<SkillInfo>;
    text?:string;
}
interface SkillInfo{
    index: string;
    rate: number;
    max:number;
}
export const SkillData:Skills[] = [
    {
        skill: 'Javascript',
        color:'#F7DF1E',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 90,
                max:100

            },
            {
                index: '사용 빈도',
                rate: 90,
                max:100
            },
            {
                index: '경험',
                rate: 90,
                max:100
            },
            {
                index: '응용력',
                rate: 80,
                max:100
            },
            {
                index: '공부 기간',
                rate:90,
                max:100
            }
        ],
        text:
            "JavaScript를 활용한 상호작용적이고 동적인 웹 애플리케이션 개발 경험이 있습니다.각종 라이브러리, 함수 등 사용자와의 원활한 상호작용을 위한 풍부한 기술을 보유하고 있습니다.프로그래머스 Lv2~3 수준의 문제 해결이 가능합니다"
    },
    {
        skill: 'HTML',
        color:'#EE6426',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 80,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 80,
                max:100
            },
            {
                index: '경험',
                rate: 90,
                max:100
            },
            {
                index: '응용력',
                rate: 70,
                max:100
            },
            {
                index: '공부 기간',
                rate:80,
                max:100
            }
        ],
        text:'시맨틱 태그, 미디어 요소, 그리고 로컬 스토리지와 같은 기능들을 활용하여.웹 애플리케이션을 개발하는 경험을 통해 HTML5을 깊이 있게 이해하고 있습니다'
    }
    ,
    {
        skill: 'CSS',
        color:'#2D9FD5',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 80,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 70,
                max:100
            },
            {
                index: '경험',
                rate: 80,
                max:100
            },
            {
                index: '응용력',
                rate: 70,
                max:100
            },
            {
                index: '공부 기간',
                rate:80,
                max:100
            }
        ],
        text:'다양한 선택자와 속성을 활용하여 웹 페이지의 디자인과 레이아웃을 세밀하게 제어합니다.Flexbox 및 Grid와 같은 레이아웃 기술을 활용한 반응형 디자인을 구현 경험이 있습니다'
    }
    ,
    {
        skill: 'React',
        color:'#61DAFB',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 90,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 90,
                max:100
            },
            {
                index: '경험',
                rate: 70,
                max:100
            },
            {
                index: '응용력',
                rate: 80,
                max:100
            },
            {
                index: '공부 기간',
                rate:70,
                max:100
            }
        ],
        text:'JSX 문법을 활용하여 컴포넌트 기반의 UI를 구성하고, 상태와 속성을 관리하여 구조적이고 재사용 가능한 UI를 설계합니다.또한 React의 생명주기 메서드와 다양한 Hook을 활용하여 높은 성능의 웹 애플리케이션을 개발합니다'
    }
    ,
    {
        skill: 'Redux',
        color:'#764ABC',
        prof:2,
        info:[
            {
                index: '숙련도',
                rate: 70,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 80,
                max:100
            },
            {
                index: '경험',
                rate: 70,
                max:100
            },
            {
                index: '응용력',
                rate: 70,
                max:100
            },
            {
                index: '공부 기간',
                rate:70,
                max:100
            }
        ],
        text:'Redux를 활용하여 Props Drilling을 방지하고, 전역 상태를 효율적으로 관리합니다.이를 통해 복잡한 상태 관리를 용이하게 처리하고, 확장 가능한 웹 애플리케이션을 개발합니다'
    }
    ,
    {
        skill: 'Styled-Components',
        color:'#E28386',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 80,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 90,
                max:100
            },
            {
                index: '경험',
                rate: 90,
                max:100
            },
            {
                index: '응용력',
                rate: 80,
                max:100
            },
            {
                index: '공부 기간',
                rate:90,
                max:100
            }
        ],
        text:'Styled-Components를 활용하여 CSS-in-JS 방식으로 웹 애플리케이션의 스타일을 구성합니다.컴포넌트 단위로 스타일을 관리하여 유지보수성과 재사용성을 높인 컴포넌트를 제작 할 수 있습니다. Keyframe을 이용한 애니메이션 적용 경험이 있습니다.'
    }
    ,
    {
        skill: 'AXIOS',
        color:'#5A2AE2',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 80,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 70,
                max:100
            },
            {
                index: '경험',
                rate: 70,
                max:100
            },
            {
                index: '응용력',
                rate: 80,
                max:100
            },
            {
                index: '공부 기간',
                rate:70,
                max:100
            }
        ],
        text:'Axios를 사용하여 HTTP 클라이언트를 구축하고, 비동기적인 네트워크 요청을 보내고 응답을 처리 할 수 있습니다.RESTful API를 이용한 외부 API 호출 및 사용 경험이 있습니다'
    }
    ,
    {
        skill: 'Typescript',
        color:'#3179C7',
        prof:2,
        info:[
            {
                index: '숙련도',
                rate: 60,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 70,
                max:100
            },
            {
                index: '경험',
                rate: 60,
                max:100
            },
            {
                index: '응용력',
                rate: 60,
                max:100
            },
            {
                index: '공부 기간',
                rate:50,
                max:100
            }
        ],
        text:'TypeScript를 공부 중이며, 정적 타입 시스템을 통해 코드의 안정성을 높이고.자바스크립트 프로젝트에서 타입 관련 이슈를 해결하는 데에 초점을 맞추고 있습니다'
    }
    ,
    {
        skill: 'Python',
        color:'#0277BD',
        prof:1,
        info:[
            {
                index: '숙련도',
                rate: 40,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 30,
                max:100
            },
            {
                index: '경험',
                rate: 50,
                max:100
            },
            {
                index: '응용력',
                rate: 50,
                max:100
            },
            {
                index: '공부 기간',
                rate:40,
                max:100
            }
        ],
        text:'학부 수업에서 Python을 다뤄본 경험이 있습니다 지속적인 학습으로 데이터 분석 및 인공지능 관련 기술과의 연계를 통한.발전된 웹 애플리케이션을 만드는 것이 목표입니다'
    }
    ,
    {
        skill: 'AWS',
        color:'#F8991B',
        prof:2,
        info:[
            {
                index: '숙련도',
                rate: 50,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 50,
                max:100
            },
            {
                index: '경험',
                rate: 40,
                max:100
            },
            {
                index: '응용력',
                rate: 50,
                max:100
            },
            {
                index: '공부 기간',
                rate:50,
                max:100
            }
        ],
        text:'AWS 클라우드 서비스에 대한 학습 중이며, 다양한 서비스를 탐구하고 클라우드 기술을 활용하여.서버리스 아키텍처 및 배포 프로세스를 습득하는 데 집중하고 있습니다.aws-sdk와 S3를 이용해 서버와의 데이터 통신 경험이 있습니다'
    }
    ,
    {
        skill: 'Netlify',
        color:'#3EA9BD',
        prof:2,
        info:[
            {
                index: '숙련도',
                rate: 70,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 60,
                max:100
            },
            {
                index: '경험',
                rate: 70,
                max:100
            },
            {
                index: '응용력',
                rate: 60,
                max:100
            },
            {
                index: '공부 기간',
                rate:60,
                max:100
            }
        ],
        text:'정적 웹 사이트 호스팅 및 환경변수를 이용한 웹 API를 호출 할 수 있는.프로젝트 배포와 관련된 기술을 익히고 있습니다. 현재 페이지 또한 Netlify를 통해 배포하였습니다'
    }
    ,
    {
        skill: 'Node.js',
        color:'#8BC500',
        prof:1,
        info:[
            {
                index: '숙련도',
                rate: 40,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 30,
                max:100
            },
            {
                index: '경험',
                rate: 30,
                max:100
            },
            {
                index: '응용력',
                rate: 20,
                max:100
            },
            {
                index: '공부 기간',
                rate:30,
                max:100
            }
        ],
        text:'Nodejs를 활용하여 서버 사이드 및 백엔드 개발 공부를 하였으며.Expressjs와 함께 라우팅 및 데이터 처리를 구현하는 등의 경험이 있습니다'
    }
    ,
    {
        skill: 'Git',
        color:'#F54E27',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 70,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 90,
                max:100
            },
            {
                index: '경험',
                rate: 80,
                max:100
            },
            {
                index: '응용력',
                rate: 70,
                max:100
            },
            {
                index: '공부 기간',
                rate:80,
                max:100
            }
        ],
        text:'Git을 사용하여 버전 관리를 수행하고, 협업 프로젝트에서 코드의.효율적인 관리와 버전 이력 추적, 다양한 오류 상황 해결이 가능합니다'
    }
    ,
    {
        skill: 'Figma',
        color:'#F24E1F',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 70,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 70,
                max:100
            },
            {
                index: '경험',
                rate: 70,
                max:100
            },
            {
                index: '응용력',
                rate: 80,
                max:100
            },
            {
                index: '공부 기간',
                rate:70,
                max:100
            }
        ],
        text:'Figma의 다양한 기능과 플러그인들을 활용하여.사용자 인터페이스(UI) 및 사용자 경험(UX) 디자인을 설계합니다'
    }
    ,
    {
        skill: 'Photoshop',
        color:'#31A8FF',
        prof:3,
        info:[
            {
                index: '숙련도',
                rate: 90,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 90,
                max:100
            },
            {
                index: '경험',
                rate: 90,
                max:100
            },
            {
                index: '응용력',
                rate: 90,
                max:100
            },
            {
                index: '공부 기간',
                rate:90,
                max:100
            }
        ],
        text:'Photoshop을 활용하여 이미지 편집 및 그래픽 디자인 작업을 수행하며.웹 디자인 및 그래픽 요소 제작에 활용한 경험이 있습니다.GTQ 1급 자격증을 보유중입니다'
    }
    ,
    {
        skill: 'Jira',
        color:'#2456DD',
        prof:1,
        info:[
            {
                index: '숙련도',
                rate: 30,
                max:100
            },
            {
                index: '사용 빈도',
                rate: 20,
                max:100
            },
            {
                index: '경험',
                rate: 20,
                max:100
            },
            {
                index: '응용력',
                rate: 20,
                max:100
            },
            {
                index: '공부 기간',
                rate:20,
                max:100
            }
        ],
        text:'프로젝트 관리 및 이슈 트래킹 경험이 있습니다.보다 나은 프로젝트 관리 및 협업 프로세스를 위해 더욱 공부 할 생각입니다'
    }
]
