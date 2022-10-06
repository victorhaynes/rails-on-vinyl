import styled from 'styled-components'

const LibraryStyles = styled.div`

    margin-top: 50px;

   img.lib-album {
    width: 150px;
    height: 150px
   }

   h5 {
    font-size: small;
    font-weight: bold;
   }

   h6 {
    margin-top: -10px;
    font-size: smaller;
   }


   p {
    color: rgb(39,83,217);
    margin: 5px;
    margin-left: 0px;
    cursor: pointer;
   }

   .clear {
        margin-top: 10px;
        border-radius: 5px;
        background-color: rgb(230,234,237); 
        border-style: none;
        color: black;
        width: 60px;
        height: 30px;
    }

    input {
        width: 400px;
        height: 35px;
        border-color: darkgray;
        border-width: 1px;
        border-radius: 5px;
    }

    svg{
        transform: translate(370px, 28px);
    }    


`
const LibraryGrid = styled.div`
    display: grid;
    width: 1200px;
    height: 1025px;
    grid-template-columns: 200px 1000px;
    margin-left: auto;
    margin-right: auto;
`

const LibraryHeaderAndContentGrid = styled.div`
    display: grid;
    height: 650px;
    grid-template-rows: 130px auto;
`
const LibraryContentGrid = styled.div`
    display: grid;
    grid-gap: 19.5px;
    grid-template-rows: auto;
    grid-template-columns: 150px 150px 150px 150px 150px 150px;
`

export  { LibraryStyles, LibraryGrid, LibraryHeaderAndContentGrid, LibraryContentGrid }