interface Skills{
    skill: string;
    color?: string;
    prof:number;
    info?:SkillInfo;
    totalRate?:number;
    text?:Array<string>
}
interface SkillInfo{
    proficiency: number;
    frequency: number;
    experience: number;
    applicant: number;
    study_duration: number;
}
export const SkillData:Skills[] = [
    {
        skill: 'Javascript',
        color:'#F7DF1E',
        prof:3,
        info:{
            proficiency: 90,
            frequency: 90,
            experience: 90,
            applicant: 80,
            study_duration:90
        },
        totalRate:90,
        text:[
            "JavaScript를 활용한 상호작용적이고 동적인 웹 애플리케이션 개발 경험이 있습니다",
            "각종 라이브러리, 함수 등 사용자와의 원활한 상호작용을 위한 풍부한 기술을 보유하고 있습니다.",
            "프로그래머스 Lv2~3 수준의 문제 해결이 가능합니다"
        ]
    },
    {
        skill: 'HTML',
        color:'#EE6426',
        prof:3
    }
    ,
    {
        skill: 'CSS',
        color:'#2D9FD5',
        prof:3
    }
    ,
    {
        skill: 'React',
        color:'#61DAFB',
        prof:3
    }
    ,
    {
        skill: 'Redux',
        color:'#764ABC',
        prof:3
    }
    ,
    {
        skill: 'Styled-Components',
        color:'#E28386',
        prof:3
    }
    ,
    {
        skill: 'AXIOS',
        color:'#5A2AE2',
        prof:3
    }
    ,
    {
        skill: 'Typescript',
        color:'#3179C7',
        prof:2
    }
    ,
    {
        skill: 'Python',
        color:'#0277BD',
        prof:1
    }
    ,
    {
        skill: 'AWS',
        color:'#F8991B',
        prof:2
    }
    ,
    {
        skill: 'Netlify',
        color:'#3EA9BD',
        prof:2
    }
    ,
    {
        skill: 'Node.js',
        color:'#8BC500',
        prof:3
    }
    ,
    {
        skill: 'Git',
        color:'#F54E27',
        prof:3
    }
    ,
    {
        skill: 'Figma',
        color:'#F24E1F',
        prof:3
    }
    ,
    {
        skill: 'Photoshop',
        color:'#31A8FF',
        prof:3
    }
    ,
    {
        skill: 'Jira',
        color:'#2456DD',
        prof:1
    }
]
