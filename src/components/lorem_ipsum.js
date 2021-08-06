import { LoremIpsum } from "lorem-ipsum";
import React from "react";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

class Texto extends React.Component {
  render() {
    return (
      <p>
        { lorem.generateWords(10) }
        { lorem.generateSentences(10) }
        { lorem.generateParagraphs(3) }
      </p>
    );
  }
}

export default Texto;