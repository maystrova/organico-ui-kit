import styled from 'styled-components'

const StyledSearch = styled.label`
    display: grid;
    grid-template-columns: 1fr 100%;
    grid-gap: 20px;
    border-radius: 100px;
    background-color: rgba(241, 241, 245, 1);
    width: 100%;
    padding: 13px;
    height: 48px;
    margin-bottom: 30px;

    & input {
        background-color: rgba(241, 241, 245, 1);
        border: none;
        font-size: 16px;
        color: gray;
        outline: none;
        width: fit-content;
    }
`

export { StyledSearch }
