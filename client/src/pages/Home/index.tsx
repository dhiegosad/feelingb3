import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { loadTweetsRequest } from '../../store/modules/twitter/action';
import { ITwitterSearchUser } from '../../store/modules/twitter/types';
import { ApplicationState } from '../../store';

import { Container, Button, Input, IssueList } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const twitters: ITwitterSearchUser = useSelector<
    ApplicationState,
    ITwitterSearchUser
  >(state => state.twitter.data);

  const [subject, setSubject] = useState<string>('');

  const getTwitters = () => {
    dispatch(loadTweetsRequest(subject));
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  return (
    <Container>
      <h1>Natural Language - Sentiment Analysis</h1>
      <Input
        type="text"
        onChange={handleInputChange}
        placeholder="Looking for..."
      />
      <Button onClick={getTwitters}>Get Tweets</Button>
      {/* <button onClick={getFeeling}>Analyze</button> */}
      <IssueList>
        {twitters?.statuses.map(twitter => (
          <div key={twitter.id}>
            <li>{twitter.text}</li>
          </div>
        ))}
      </IssueList>
    </Container>
  );
};

export default Home;
