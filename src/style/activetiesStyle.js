import styled from 'styled-components';

export const All = styled.div`
    border: 1px solid #D7D7D7;
    width: 288px;
    height: 389px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Auditory = styled.div`
height: 392px;
display: flex;
align-items: center;
flex-direction: column;
h1{
    font-size: 17px;
    font-weight: 400;
    color:  #7B7B7B;
    margin-bottom: 7px;
}
`;

export const Element = styled.div`
background-color: ${props => props.green ? '#D0FFDB' : '#F1F1F1'};
width: 265px;
height: ${props => props.time === 1 ? '79px' : '168px'};
border-radius: 5px;
display: flex;
margin-top: 10px;
`;

export const Element2 = styled.div`
background-color:  #F1F1F1;
width: 265px;
height: 168px;
border-radius: 5px;
display: flex;
margin-top: 10px;
`;

export const Left = styled.div`
width: 200px;
font-size: 12px;
color:  #343434;
margin-left: 9px;
h2{
    font-weight: 700;
    margin-top: 12px;
}
h3{
    font-weight: 400;
    margin-top: 6px;
}
`;

export const Rigth = styled.div`
width: 65px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 9px;
font-weight: 400;
h2{
    margin-top: 5px;
    color: ${props => props.red ? 'red' : '#078632'};
}
h3{
    margin-top: 5px;
    color: #CC6666;
}`;

