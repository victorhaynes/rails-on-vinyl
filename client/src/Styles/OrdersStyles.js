import styled from 'styled-components'

const OrdersStyles = styled.div`
    /* margin-top: 50px;
    width: 950px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 780px;
    grid-template-rows: 100px;
    margin-left: auto;
    margin-right: auto; */

    img {
        height: 150px;
        width: 150px;
    }


`

const OrderHeaderGrid = styled.div`
    margin-top: 50px;
    display: grid;
    width: 950px;
    grid-gap: 10px;
    grid-template-rows: 25px;
    margin-left: auto;
    margin-right: auto;
    
    .total {
        margin-left: 500px;
        font-weight: bold;
    }

    .order-number {
        font-weight: bold;
        font-size: larger;
    }



`

const OrderContentGrid = styled.div`
    width: 950px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 780px;
    grid-template-rows: 150px;
    margin-left: auto;
    margin-right: auto;
`


export {OrdersStyles, OrderHeaderGrid, OrderContentGrid}