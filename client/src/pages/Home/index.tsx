import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTweetsRequest } from '../../store/modules/twitter/action';
import { ITwitterSearchUser } from '../../store/modules/twitter/types';
import { ApplicationState } from '../../store';
import ReactLoading from 'react-loading';

import {
  Container,
  Button,
  Input,
  IssueList,
  FieldGroup,
  ScoreText,
  SentimentResult,
  LodingField,
  Title,
} from './styles';
import { loadSentimentsRequest } from '../../store/modules/sentiment/action';
import { ISentiment, SentimentEnum } from '../../store/modules/sentiment/types';

const Home = () => {
  const dispatch = useDispatch();

  const twitters: ITwitterSearchUser = useSelector<
    ApplicationState,
    ITwitterSearchUser
  >(state => state.twitter.data);

  const sentiments: Array<ISentiment> = useSelector<
    ApplicationState,
    Array<ISentiment>
  >(state => state.sentiment.data);

  const twitterLoading: boolean = useSelector<ApplicationState, boolean>(
    state => state.twitter.loading
  );

  const sentimentLoading: boolean = useSelector<ApplicationState, boolean>(
    state => state.sentiment.loading
  );

  const [subject, setSubject] = useState<string>('');

  const getTwitters = () => {
    dispatch(loadTweetsRequest(subject));
  };

  const getFeeling = () => {
    dispatch(loadSentimentsRequest(''));
  };

  const toSentiment = (score: number, magnitude: number = 1) => {
    switch (true) {
      case -1.0 * magnitude <= score && score < -0.6 * magnitude:
        return SentimentEnum[0];
        break;
      case -0.6 * magnitude <= score && score < -0.2 * magnitude:
        return SentimentEnum[1];
        break;
      case -0.2 * magnitude <= score && score < 0.2 * magnitude:
        return SentimentEnum[2];
        break;
      case 0.2 * magnitude <= score && score < 0.6 * magnitude:
        return SentimentEnum[3];
        break;
      case 0.6 * magnitude <= score && score <= 1 * magnitude:
        return SentimentEnum[4];
        break;
    }
  };

  const finalSentiment = (): number => {
    let totalScore = 0;
    sentiments.forEach(sentiment => {
      totalScore += sentiment.score * sentiment.magnitude;
    });

    return totalScore;
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  return (
    <Container>
      <Title>Google Natural Language - Análise de Sentimentos</Title>
      <Input
        type="text"
        onChange={handleInputChange}
        placeholder="Digite aqui..."
      />
      <FieldGroup>
        <Button onClick={getTwitters}>Buscar Tweets</Button>
        <Button onClick={getFeeling}>Analisar Sentimentos</Button>
        {!sentimentLoading && sentiments.length > 0 ? (
          <SentimentResult>
            Sentimento Final: {toSentiment(finalSentiment(), 20)}
          </SentimentResult>
        ) : (
          ''
        )}
      </FieldGroup>
      <LodingField>
        {sentimentLoading || twitterLoading ? (
          <ReactLoading
            type="bubbles"
            color="#eb0045"
            height={'10%'}
            width={'13%'}
          />
        ) : (
          ''
        )}
      </LodingField>

      {sentiments.length == 0 ? (
        <IssueList>
          {twitters?.statuses.map(twitter => (
            <div key={twitter.id}>
              <li>{twitter.text}</li>
            </div>
          ))}
        </IssueList>
      ) : (
        <IssueList>
          {sentiments?.map(sentiment => (
            <div key={sentiment.id}>
              <li>
                <p>{sentiment.tweet}</p>
                <ScoreText>{toSentiment(sentiment.score)}</ScoreText>
              </li>
            </div>
          ))}
        </IssueList>
      )}
    </Container>
  );
};

export default Home;
