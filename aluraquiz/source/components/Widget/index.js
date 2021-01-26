import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 5px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 20px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
