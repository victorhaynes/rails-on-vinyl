import styled from 'styled-components'

const CartStyle = styled.div`
    margin-top: 50px;
    width: 950px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 780px 150px;
    grid-auto-rows: 150px;
    margin-left: auto;
    margin-right: auto;

    img {
        height: 150px;
        width: 150px;
        
    }

    button.place-order{
        background-color: rgb(10, 138, 78);
        color: white;
        border-radius: 10px;
        height: 50px;
    }

    button.remove{
        background-color: rgb(247, 195, 211);
        color: black;
        border-radius: 5px;
        height: 40px;
    }

`


const CartGrid = styled.div`
    margin-top: -70px;
    grid-column: 1;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 630px;
`

export {CartStyle, CartGrid}