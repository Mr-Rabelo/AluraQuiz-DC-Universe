import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
        transition: background 0.3s;
    }

    button:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

Form.Input = styled.input`
    width: 100%;
    height: 40px;
    border: 0;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 15px;
    font-weight: 600;
    background-color:  ${({ theme }) => theme.colors.secondBg};
    border-radius: 5px;
    padding: 12.5px;
    margin-bottom: 20px;
`;

Form.Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
`;

export default Form;
