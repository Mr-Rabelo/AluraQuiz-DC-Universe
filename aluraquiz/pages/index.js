import styled from 'styled-components';
import db from '../db.json';
import Widget from '../source/components/Widget/index';
import Footer from '../source/components/Footer/index';
import GitHubCorner from '../source/components/GitHubCorner/index';
import QuizLogo from '../source/components/QuizLogo/index';
import QuizBackground from '../source/components/QuizBackground/index';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-poistion: center;
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
        <Widget.Header>
              <h1>The legend of Zelda</h1>
            </Widget.Header>
          <Widget.Content>
            <p>jhjagjdsdsfafdhgfsdahfsdsfdhfasdfahdfsdfhdffhg</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>jhjagjdsdsfafdhgfsdahfsdsfdhfasdfahdfsdfhdffhg</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Mr-Rabelo"/>
    </QuizBackground>
  );
}
