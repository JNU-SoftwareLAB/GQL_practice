
const books = [
    {
        id : 0,
        title : "해리 포터와 마법사의 돌",
        author : "J.K. 롤링",
        description : "《해리포터와 마법사의 돌》은 영국의 작가 조앤 롤링의 《해리포터》 시리즈의 첫 번째 책이다."
    },
    {
        id : 1,
        title : "반지의 제왕",
        author : "J. R. R. 톨킨",
        description : "《반지의 제왕》은 존 로널드 루엘 톨킨이 지은 3부작 판타지 소설이다."
    },
    {
        id : 2,
        title : "동의보감",
        author : "허준",
        description : "《동의보감》은 허준 선생이 선조의 명을 받아 중국과 우리나라의 의학 서적을 하나로 모은백과사전으로서, 1596년부터 편찬하여 1610년에 완성된 의학서이다."
    },
    {
        id : 3,
        title : "해리 포터와 비밀의 방",
        author : "J.K. 롤링",
        description : "《해리포터와 마법사의 돌》은 영국의 작가 조앤 롤링의 《해리포터》 시리즈의 두 번째 책이다."
    }
]

const movies = [
    {
        id : 1,
        title : "해리 포터와 마법사의 돌",
        relased : 2001
    },
    {
        id : 1,
        title : "해리 포터와 비밀의 방",
        relased : 2002
    }
]

const getBookById = (id)=> books[id]

module.exports ={getBookById, books, movies}