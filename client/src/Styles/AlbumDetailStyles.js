import styled from 'styled-components'

const AlbumDetailGrid = styled.div`
    margin-top: 50px;
    display: grid;
    width: 900px;
    grid-template-columns: 600px 300px;
    margin-left: auto;
    margin-right: auto;

    img {
        height: 200px;
        width: 200px;
    }

    li {
        list-style: none;
        margin-left: -30px;
    }


    .run-times {
        margin-top: 40px;
        text-align: right;
    }

    button {
        width: 145px;
        margin: 2.5px;
        border-radius: 5px;
    }

    .buy {
        background-color: rgb(46,96,143);
        color: white
    }
    

    .value {
        font-size: .9em;
    }


`


const AlbumDetailContentGrid = styled.div`
    display: grid;
    width: 600px;
    grid-template-columns: 200px 350px;
    grid-gap: 20px;
    grid-template-rows: 200px auto;
`

export {AlbumDetailGrid, AlbumDetailContentGrid}