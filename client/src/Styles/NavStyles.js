import styled from 'styled-components'

const NavGrid = styled.div`
    display: grid;
    width: 1200px;
    grid-gap: 30px;
    grid-template-columns: 420px 100px 100px 100px 100px 100px 100px;
    grid-template-rows: 60px;
    /* x-axis */
    justify-items: center;
    /* y-axis */
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

const NavStyle = styled.div`
    color: white;
    font-weight: bolder;
    background-color: #333333;
    height: 60px;
    
    .logo{
        font-size: 25px;
        cursor: pointer;
        transform: translate(-125px, 0px);
    }

    .active {
        color: rgb(244,223,45);
    }

    a {
        text-decoration: none;
        color: white;
    }

    button {
        border-radius: 5px;
        background-color: rgb(244,223,45); 
        border-style: none;
    }

    svg.cart {
        height: 30px;
        width: auto;
    }

    .signup-button {
        border-radius: 5px;
        background-color: rgb(244,223,45); 
        border-style: none;
        color: black;
        font-weight: lighter;
        width: 90px;
        height: 40px;
        padding-left: 15px;
        padding-top: 7px;
    }

    .logout-button {
        cursor: pointer;
    }


`

export {NavGrid, NavStyle}