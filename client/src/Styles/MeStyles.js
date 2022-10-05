import styled from 'styled-components'

const MeStyles = styled.div`
    background-color: white;

    .bg1{
        height: 150px;
        background-color: rgb(34,34,34);
    }

    .bg2{
        height: 50px;
        background-color: black;
        color: white;
    }
`

const MeGrid = styled.div`
    display: grid;
    width: 1000px;
    height: 1025px;
    grid-template-columns: 200px 800px;
    grid-template-rows: 75px 950px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -40px;

    h5 {
        color: white
    }

    h6 {
        font-size: small;
        font-weight: bold;
    }

    h6.profile-actions {
        font-size: 100%
    }

    img.avatar {
        height: 150px;
        width: 150px;
        transform: translate(0,-120px);
        outline-style: groove;
        outline-width: 8px;
    }

    h4 {
        margin-bottom: 20px;
    }
`



export { MeStyles, MeGrid }