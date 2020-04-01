import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  background: transparent;
  height: 44px;
  padding: 0 15px;
  transition: border 0.3s;
  &::placeholder {
    color: gray;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 200px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background: #eb0045;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  color: white;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#eb0045')};
  }
  cursor: pointer;
`;

export const SentimentResult = styled.h1`
  padding-top: 20px;
  font-size: 25px;
  color: ${lighten(0.3, '#000')};
  font-weight: bold;
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
`;

export const ScoreText = styled.h4`
  margin-top: 5px;
  font-size: 15px;
  color: #eb0045;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: ${lighten(0.3, '#000')};
`;

export const LodingField = styled.div`
  display: flex;
  justify-content: center;
`;

export const IssueList = styled.ul`
  padding-top: 10px;
  margin-top: 10px;
  border-top: none;
  list-style: none;
  justify-content: space-between;
  width: 900px;
  padding-inline-start: 20px;

  li {
    display: flex;
    padding: 10px 10px;
    border: 1px solid #eb0045;
    margin-top: 5px;
    border-radius: 4px;
    background: #fff;
    flex-direction: column;
    min-height: 115px;
  }

  & + li {
    margin-top: 10px;
  }

  div {
    flex: 1;
    strong {
      font-size: 15px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 15px;
      color: ${lighten(0.3, '#000')};
    }
  }
`;
