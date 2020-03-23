import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { loadTweetsRequest } from "../../store/modules/twitter/action";
import { ITwitterSearchUser } from "../../store/modules/twitter/types";
import { ApplicationState } from "../../store";

const Home = () => {
  const dispatch = useDispatch();
  const twitters: ITwitterSearchUser = useSelector<
    ApplicationState,
    ITwitterSearchUser
  >(state => state.twitter.data);

  const [subject, setSubject] = useState<string>("");

  const getTwitters = () => {
    dispatch(loadTweetsRequest(subject));
  };

  // const getFeeling = () => {
  //   api.get<any>(`/google/analyze/`).then(response => {
  //     //setTwitters(response.data);
  //   });
  // };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={getTwitters}>Send</button>
      {/* <button onClick={getFeeling}>Analyze</button> */}
      {twitters?.statuses.map(twitter => (
        <div key={twitter.id}>
          <p>{twitter.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
