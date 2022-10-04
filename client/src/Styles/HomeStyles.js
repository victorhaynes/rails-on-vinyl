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
        margin-left: 75px;
    } 

    div.spotlight-background {
        background-color: white;
    }

    div.trending-header-background{
        background-color: black;
    }

    div.trending-header{
        color: white;
        margin-left: 75px;

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
        margin-left: 75px;

        h1 {
        font-size: 21px;
        font-weight: bold;
        }
    }

    div.most-expensive-container{
        color: black;
        background-color: white;
    }
`

const TrendingCardsGrid = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(5, 225px);
    color: white;
    margin-left: 75px;

`

const MostExpensiveCardsGrid = styled.div`
    margin-left: 75px;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(5, 225px);
`

export {HomeGrid, HomeStyles, TrendingCardsGrid, MostExpensiveCardsGrid}