import styled from 'styled-components'

export const Wrapper = styled.div `
    height: 50px;
    max-width: 1200px;
    width: 70%;
    display: flex;
    align-items: center;
`;

export const BarDisplay = styled.div`
    height: 20px;
    width: 100%;
    background-color: white;
    border-radius: 50px;

`;

export const ProgressDisplay = styled.div(props => ({
    height: '100%',
    borderRadius: '50px',
    width: `calc((100% / ${props.maxAnswers}) * ${props.progress})`,
    backgroundColor: props.colorBar
})) ;

export const LabelStyle = styled.div`
    margin-left: 10px;
`
