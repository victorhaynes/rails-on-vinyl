import styled from 'styled-components'

const ProductEditFormStyles = styled.div`
    margin-top: 15px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;

    input {
        width: 150px;
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
        width: 300px;
    }

    h2 {
        text-align: center;
    }

    label {
        font-size: large;
    }
`

export { ProductEditFormStyles }