import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 200px;
  border: 2px solid chartreuse;
  padding: 30px;
  border-radius: 10px;
`;

export const Header = styled.h1`
  color: white;
  margin: 0;
  text-align: center;
`;
export const Title = styled.h1`
  color: white;
  font-size: 25px;
`;

export const InputArea = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
`;
export const Input = styled.input`
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

export const Button = styled.button`
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
export const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;
export const ResultTitle = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
export const Result = styled.div<{ mainBorder?: string }>`
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
export const Footer = styled.footer`
  text-align: center;
  padding: 16px 0;
  width: 100%;
  bottom: 0;
  position: inherit;
`;
export const Media = styled.a`
  font-size: 40px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    color: chartreuse;
  }
`;
export const Copyright = styled.p`
  color: #868686;
  text-align: center;
  margin: 0;
`;
