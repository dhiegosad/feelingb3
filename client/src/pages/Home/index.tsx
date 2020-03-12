import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface ITwitterSearchUser {
  statuses: Array<ITwitterStatus>;
}

interface ITwitterUser {
  id: number;
  name: string;
  status?: ITwitterStatus;
}

interface ITwitterStatus {
  id: number;
  text: string;
}

const Home = () => {
  const [twitters, setTwitters] = useState<ITwitterSearchUser>();
  const [subject, setSubject] = useState<string>('');

  const getTwitters = () => {
    api.get<ITwitterSearchUser>(`/search/${subject}`).then(response => {
      setTwitters(response.data);
    });
  };

  const getFeeling = () => {
    api.get<any>(`/google/analyze`).then(response => {
      //setTwitters(response.data);
    });
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    getTwitters();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={getTwitters}>Send</button>
      <button onClick={getFeeling}>Analyze</button>
      {twitters?.statuses.map(twitter => (
        <div key={twitter.id}>
          <p>{twitter.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
