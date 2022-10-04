import styled from 'styled-components'

const LibraryStyles = styled.div`
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
`
const LibraryGrid = styled.div`
    display: grid;
    width: 1200px;
    height: 1025px;
    grid-template-columns: 200px 1000px;
    margin-left: auto;
    margin-right: auto;
`
const LibraryFilterGrid = styled.div`
    display: grid;
    grid-column: 1;
`

const LibraryHeaderAndContentGrid = styled.div`
    display: grid;
    grid-template-rows: 180px 1025px;
`
const LibraryContentGrid = styled.div`
    display: grid;
    grid-gap: 19.5px;
    grid-template-rows: 205px;
    grid-template-columns: 150px 150px 150px 150px 150px 150px;
`

export  { LibraryStyles, LibraryGrid, LibraryHeaderAndContentGrid, LibraryContentGrid }