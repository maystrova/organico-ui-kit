import styled from 'styled-components'

const StyledMenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    height: 74px;
    border-top: 1px solid transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    background: ${props => props.theme.menuBackground};

    a {
        text-decoration: none;
        color: rgb(105, 105, 117);
        font-size: 16px;
        font-weight: 700;
    }

    svg {
        fill: rgb(105, 105, 117) !important;
        path {
            fill: rgb(105, 105, 117) !important;
        }
    }

    .active {
        color: rgb(46, 204, 113);

        svg {
            fill: rgb(46, 204, 113) !important;
            path {
                fill: rgb(46, 204, 113) !important;
            }
        }
    }
`

const StyledMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export { StyledMenu, StyledMenuItem, StyledMenuContainer }
