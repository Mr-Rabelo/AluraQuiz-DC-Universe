import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button;
