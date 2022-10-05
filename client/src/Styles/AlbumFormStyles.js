import styled from 'styled-components'


const AlbumUploadFormStyles = styled.div`
    margin-top: 15px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;

    input {
        width: 595px;
        height: 35px;
        border-color: darkgray;
        border-width: 1px;
        border-radius: 5px;
    }

    /* input:focus {
        box-shadow: 0 0 0 2px aliceblue; 
    } */

    button {
        margin-top: 15px;
        border-radius: 5px;
        background-color: rgb(0,128,10); 
        border-style: none;
        color: white;
        height: 35px;
        width: 595px;
    }

    h2 {
        text-align: center;
    }
`

const SongsUploadFormStyles = styled.div`
    margin-top: 15px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;

    input {
        width: 100px;
        height: 35px;
        border-color: darkgray;
        border-width: 1px;
        border-radius: 5px;
        margin-left: 15px;
        margin-right: 10px;
    }


    button {
        margin-top: 15px;
        border-radius: 5px;
        background-color: rgb(0,128,10); 
        border-style: none;
        color: white;
        height: 30px;
        width: 30px;
        margin-left: 15px;
    }

    h2 {
        text-align: center;
    }
`

const AlbumEditFormStyles = styled.div`
    margin-top: 15px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;

    input {
        width: 595px;
        height: 35px;
        border-color: darkgray;
        border-width: 1px;
        border-radius: 5px;
    }

    button {
        margin-top: 15px;
        border-radius: 5px;
        background-color: rgb(0,128,10); 
        border-style: none;
        color: white;
        height: 35px;
        width: 595px;
    }

    h2 {
        text-align: center;
    }
`



export {AlbumUploadFormStyles, SongsUploadFormStyles, AlbumEditFormStyles}