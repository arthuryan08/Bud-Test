type SequenceFinderProps = {
  inputData: string;
  setSequence1: (sequence1: string) => void;
  setSequence2: (sequence2: string) => void;
  setSequence3: (sequence3: string) => void;
  setResult: (string: string) => void;
};

export const SequenceFinder = ({
  inputData,
  setSequence1,
  setSequence2,
  setSequence3,
  setResult,
}: SequenceFinderProps) => {
  let valueNum: number | null = null;
  let before: number | null = null;
  let sequence1: string = "";
  let sequence2: string = "";
  let sequence3: string = "";
  let test = "06589012764569";

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
      } else if (String(before) === sequence1.charAt(sequence1.length - 1)) {
        sequence1 += value;
        before = valueNum;
      } else if (sequence2 === "") {
        sequence2 += before;
        sequence2 += value;
        before = valueNum;
      } else if (String(before) === sequence2.charAt(sequence2.length - 1)) {
        sequence2 += value;
        before = valueNum;
      } else if (sequence3 === "") {
        sequence3 += before;
        sequence3 += value;
        before = valueNum;
      } else if (String(before) === sequence3.charAt(sequence3.length - 1)) {
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

  if (
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
  } else if (sequence2 === "" && sequence3 === "") {
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
  }
};
