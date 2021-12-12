import React, { useState } from "react";
import * as C from "./App.styles";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { SequenceFinder } from "./Logic";

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
    SequenceFinder({
      inputData,
      setSequence1,
      setSequence2,
      setSequence3,
      setResult,
    });
  };

  return (
    <div>
      <C.Container>
        <C.Header>Bud Test</C.Header>
        <C.Title>Digite alguns números aleatórios </C.Title>
        <C.InputArea>
          <C.Input
            type={"number"}
            onChange={handleInputChange}
            value={inputData}
          />
          <C.Button onClick={handleClick}>Descobrir</C.Button>
        </C.InputArea>
        <C.ResultArea>
          {result ? (
            <>
              <C.ResultTitle>A maior sequência encontrada foi: </C.ResultTitle>
              <C.Result mainBorder={"chartreuse"}>{result}</C.Result>
              <C.ResultTitle>Sequências encontradas: </C.ResultTitle>
              <C.Result>
                <C.ResultTitle>Sequência 1: {sequence1} </C.ResultTitle>
                <C.ResultTitle>
                  Sequência 2: {sequence2 ? sequence2 : "Poxa, nenhuma outra!"}
                </C.ResultTitle>
                <C.ResultTitle>
                  Sequência 3: {sequence3 ? sequence3 : "Nada por aqui!"}{" "}
                </C.ResultTitle>
              </C.Result>
            </>
          ) : null}
        </C.ResultArea>
      </C.Container>
      <C.Footer>
        <C.Media href="https://github.com/arthuryan08" target="_blank">
          <FaGithubSquare />
        </C.Media>
        <C.Media href="https://www.linkedin.com/in/arthuryan8" target="_blank">
          <FaLinkedin />
        </C.Media>
        <C.Copyright>© Copyright 2021 Made by Arthur Yan to Bud.</C.Copyright>
      </C.Footer>
    </div>
  );
}

export default App;
