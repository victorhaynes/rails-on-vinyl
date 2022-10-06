import styled from 'styled-components'

const ProductsStyles = styled.div`
    img {
        height: 200px;
        width: 200px;
    }

    h4 {
        margin-top: 20px;
    }

    li {
        list-style: none;
        margin-left: -30px;
    }

    button.add-to-cart {
        border-radius: 5px;
        transform: translate(605px, -25px);
        color: white;
        background-color: rgb(10, 128, 0);
    }

    button.in-cart {
        border-radius: 5px;
        transform: translate(605px, -25px);
        color: white;
        background-color: lightgray;
        width: 100px;
        cursor: not-allowed;
    }

    button.edit-product {
        border-radius: 5px;
        transform: translate(620px, -25px);
    }

    button.release {
        border-radius: 5px;
        background-color: rgb(46,96,143);
        color: white;
        font-size: .9em;
    }

    p {
        margin-bottom: -40px;
        margin-left: -30px;
    }

    .price {
        transform: translate(470px, -6px);
    }


`

const ProductsGrid = styled.div`
    margin-top: 50px;
    display: grid;
    width: 900px;
    grid-template-rows: 200px 60px auto;
    margin-left: auto;
    margin-right: auto;

`

const ProductsPageHeader = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px 350px 150px;
    width: 950px;
`

const ProductDetailGrid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 200px 120px 155px 160px;
    grid-gap: 20px;
    width: 665px;
    margin-left: auto;
    margin-right: auto;

    img {
        height: 200px;
        width: 200px;
    }

    h5.album-cover {
        margin-left: 37px;
    }
`

export {ProductsStyles, ProductsGrid, ProductsPageHeader, ProductDetailGrid}