import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 200px;
  border: 2px solid chartreuse;
  padding: 30px;
  border-radius: 10px;
`;

const Header = styled.h1`
  color: white;
  margin: 0;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 25px;
`;

const InputArea = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
`;
const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  flex: 2;
  background-color: #444;
  color: #eee;
  font-size: 16px;
  &:focus {
    outline: 1px solid chartreuse;
  }
`;
const Button = styled.button`
  background-color: #7fff00;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all 0.4s ease;
  flex: 1;
  &:hover {
    background-color: #444;
    color: chartreuse;
    border: 1px solid chartreuse;
  }
`;
const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;
const ResultTitle = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
const Result = styled.div<{ mainBorder?: string }>`
  background-color: #444;
  margin: 8px 0;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: #eee;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid ${(props) =>
    props.mainBorder ? `${props.mainBorder}` : `transparent`};
}
`;
const Footer = styled.footer`
  text-align: center;
  padding: 16px 0;
  width: 100%;
  bottom: 0;
  position: inherit;
`;
const Media = styled.a`
  font-size: 40px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    color: chartreuse;
  }
`;
const Copyright = styled.p`
  color: #868686;
  text-align: center;
  margin: 0;
`;

function App() {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState<String>("");

  const [sequence1, setSequence1] = useState<String>("");
  const [sequence2, setSequence2] = useState<String>("");
  const [sequence3, setSequence3] = useState<String>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    let valueNum: number | null = null;
    let before: number | null = null;
    let sequence1 = "";
    let sequence2 = "";
    let sequence3 = "";

    for (let value of inputData) {
      valueNum = Number(value);

      if (valueNum > Number(before) && valueNum - 1 === before) {
        if (sequence1 === "") {
          sequence1 += before;
          sequence1 += value;
          before = valueNum;
        } else if (
          String(before) === sequence1.charAt(sequence1.length - 1) &&
          sequence2 === ""
        ) {
          sequence1 += value;
          before = valueNum;
        } else if (sequence2 === "") {
          sequence2 += before;
          sequence2 += value;
          before = valueNum;
        } else if (
          String(before) === sequence2.charAt(sequence2.length - 1) &&
          sequence3 === ""
        ) {
          sequence2 += value;
          before = valueNum;
        } else if (sequence3 === "") {
          sequence3 += before;
          sequence3 += value;
          before = valueNum;
        } else {
          sequence3 += value;
          before = valueNum;
        }
      } else if (valueNum === 0 && before === 9) {
        if (sequence1 === "") {
          sequence1 += before;
          sequence1 += value;
          before = valueNum;
        } else if (String(before) === sequence2.charAt(sequence2.length - 1)) {
          sequence2 += value;
          before = valueNum;
        } else if (sequence3 === "") {
          sequence3 += before;
          sequence3 += value;
          before = valueNum;
        } else if (String(before) === sequence3.charAt(sequence2.length - 1)) {
          sequence3 += value;
          before = valueNum;
        }
      } else {
        before = valueNum;
      }
    }
    setSequence1(sequence1);
    setSequence2(sequence2);
    setSequence3(sequence3);

    if (sequence2 === "" && sequence3 === "") {
      setResult(sequence1);
    } else if (sequence1.length === sequence2.length) {
      if (Number(sequence1.charAt(0)) > Number(sequence2.charAt(0))) {
        setResult(sequence1);
      } else {
        setResult(sequence2);
      }
    } else if (sequence1.length === sequence3.length) {
      if (Number(sequence1.charAt(0)) > Number(sequence3.charAt(0))) {
        setResult(sequence1);
      } else {
        setResult(sequence3);
      }
    } else if (sequence2.length === sequence3.length) {
      if (Number(sequence2.charAt(0)) > Number(sequence3.charAt(0))) {
        setResult(sequence2);
      } else {
        setResult(sequence3);
      }
    } else if (
      sequence1.length > sequence2.length &&
      sequence1.length > sequence3.length
    ) {
      setResult(sequence1);
    } else if (
      sequence2.length > sequence1.length &&
      sequence2.length > sequence3.length
    ) {
      setResult(sequence2);
    } else if (
      sequence3.length > sequence1.length &&
      sequence3.length > sequence2.length
    ) {
      setResult(sequence3);
    }
  };

  return (
    <div>
      <Container>
        <Header>Bud Test</Header>
        <Title>Digite alguns números aleatórios </Title>
        <InputArea>
          <Input
            type={"number"}
            onChange={handleInputChange}
            value={inputData}
          />
          <Button onClick={handleClick}>Descobrir</Button>
        </InputArea>
        <ResultArea>
          {result ? (
            <>
              <ResultTitle>A maior sequência encontrada foi: </ResultTitle>
              <Result mainBorder={"chartreuse"}>{result}</Result>
              <ResultTitle>Sequências encontradas: </ResultTitle>
              <Result>
                <ResultTitle>Sequência 1: {sequence1} </ResultTitle>
                <ResultTitle>
                  Sequência 2: {sequence2 ? sequence2 : "Poxa, nenhuma outra!"}
                </ResultTitle>
                <ResultTitle>
                  Sequência 3: {sequence3 ? sequence3 : "Nada por aqui!"}{" "}
                </ResultTitle>
              </Result>
            </>
          ) : null}
        </ResultArea>
      </Container>
      <Footer>
        <Media href="https://github.com/arthuryan08" target="_blank">
          <FaGithubSquare />
        </Media>
        <Media href="https://www.linkedin.com/in/arthuryan8" target="_blank">
          <FaLinkedin />
        </Media>
        <Copyright>© Copyright 2021 Made by Arthur Yan to Bud.</Copyright>
      </Footer>
    </div>
  );
}

export default App;
