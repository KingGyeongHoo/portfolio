interface Info{
    index: string;
    content: string;
    instead?: string;
}

export const InfoData:Info[] = [
    {
        index: 'NAME',
        content: '송경후'
    },
    {
        index: 'BIRTH',
        content: '1997.12.18'
    },
    {
        index: 'EMAIL',
        content: 'fmaxgo@naver.com'
    },
    {
        index: 'ADDRESS',
        content: '인천광역시 부평구'
    },
    {
        index: 'UNIV',
        content: '동국대학교 서울캠퍼스',
        instead: '전자전기공학부 / 멀티미디어공학과'
    },
]

interface Link{
    redirect: string;
    file: string;
    link:string;
}

export const LinkData:Link[] = [
    {
        redirect: 'Github',
        file: 'github.png',
        link:'https://github.com/KingGyeongHoo'
    },
    {
        redirect: 'Blog',
        file: 'tistory.png',
        link: 'https://kinggh.tistory.com/'
    },
    {
        redirect: 'Instagram',
        file: 'instagram.png',
        link: 'https://www.instagram.com/king_gyeonghoo/'
    }
]