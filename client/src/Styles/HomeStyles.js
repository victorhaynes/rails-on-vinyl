import styled from 'styled-components'

const HomeGrid = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 380px 275px 55px 400px 55px 400px;

`

const HomeStyles = styled.div`
    img.albums {
        height: 200px;
        width: auto;
    }

    div.blog-posts-background {
        background-color: black;
    }

    div.blog-content{
        color: white;
        width: 1200px;
        height: 350px;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    } 

    div.spotlight-background {
        background-color: white;
    }

    div.trending-header-background{
        background-color: black;
    }

    div.trending-header{
        color: white;
        width: 1300px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;

        h1 {
        font-size: 21px;
        font-weight: bold;
        }
    }
    
    div.trending-container-background {
        background-color: black;
    } 

    div.most-expensive-background{
        background-color: white;
    }

    div.most-expensive-header{
        color: black;
        width: 1300px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;

        h1 {
        font-size: 21px;
        font-weight: bold;
        }
    }

    div.most-expensive-container{
        color: black;
        background-color: white;
    }

    img.blog1{
        /* object-fit: cover; object-position: 100% 0; */
        height: 330px;
        width: 745px;
    }

    img.blog-other{
        /* object-fit: cover; object-position: 100% 0; */
        width: 445px;
        height: 103.3px;
    }
`

const TrendingCardsGrid = styled.div`
    width: 1300px;
    height: 310px;
    display: grid;
    grid-gap: 75px;
    grid-template-columns: repeat(5, 200px);
    color: white;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

`

const MostExpensiveCardsGrid = styled.div`
    width: 1300px;
    height: 310px;
    display: grid;
    grid-gap: 75px;
    grid-template-columns: repeat(5, 200px);
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`

const HomeBlogGrid = styled.div`
    display: grid;
    height: 330px;
    grid-gap: 10px;
    grid-template-columns: 745px 445px;
    margin-top: 25px;

    .description1 {
        transform: translate(0, -60px);
        padding-left: 20px;
        font-size: 2.5em;
        background-color: rgba(0, 0, 0, 0.7);
        width: 660px;
    }

    .description2 {
        transform: translate(0, -30px);
        padding-left: 15px;
        font-size: 1.25em;
        background-color: rgba(0, 0, 0, 0.7);
        width: 350px;
    }

    .description3 {
        transform: translate(0, -28px);
        padding-left: 15px;
        font-size: 1.2em;
        background-color: rgba(0, 0, 0, 0.7);
        width: 360px;
    }

    .link {
        text-decoration: none;
        color: white;
    }
`
const HomeBlogGridSecondColumn = styled.div`
    display: grid;
    grid-column: 2;
    grid-gap: 10px;
    grid-template-rows: repeat(3, 103.3px);

    .route-to-sell {
        color: rgb(76,210,255);
        text-decoration: none;
    }

    .description4 {
        transform: translate(0, -60px);
        padding-left: 20px;
        font-size: 1.2em;
        background-color: rgba(0, 0, 0, 0.2);
        width: 285px;
        margin-left: auto;
        margin-right: auto;
    }

`



export {HomeGrid, HomeStyles, TrendingCardsGrid, MostExpensiveCardsGrid, HomeBlogGrid, HomeBlogGridSecondColumn}