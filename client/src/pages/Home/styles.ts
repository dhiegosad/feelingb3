import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
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
    grid-gap: 15px;
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
  margin-top: 40px;
  width: 120px;
  height: 40px;
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

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 10px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    margin-top: 5px;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  div {
    flex: 1;
    margin-left: 15px;

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
      font-size: 12px;
      color: #999;
    }
  }
`;
