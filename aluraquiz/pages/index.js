import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../source/components/Widget/index';
import Footer from '../source/components/Footer/index';
import GitHubCorner from '../source/components/GitHubCorner/index';
import QuizLogo from '../source/components/QuizLogo/index';
import QuizBackground from '../source/components/QuizBackground/index';
import Form from '../source/components/Forms/index';

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz | DCU</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>DC Cinematic Universe</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste seu conhecimento sobre o universo cinematográfico da DC Comics!</p>
            <Form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Form.Input
                onChange={(infosDoEvento) => {
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí seu nome para jogar :)"
              />
              <Form.Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Form.Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Veja os Quizes que também participaram da Imersão React!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Mr-Rabelo/AluraQuiz-DC-Universe" />
    </QuizBackground>
  );
}
