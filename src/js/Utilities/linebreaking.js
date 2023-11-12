export const lineBreaking = (phrase) => {
  if (phrase.length > 10) {
    const secondPart = phrase.slice(phrase.length / 2 - 1, phrase.length);
    const middleSign = phrase[Math.round(phrase.length / 2)];

    let spaceFound = "abc";
    let iterationCount = 0;
    let currentLetterIndex;
    while (spaceFound != " ") {
      currentLetterIndex = Math.round(phrase.length / 2 + iterationCount);
      spaceFound = phrase[currentLetterIndex];
      iterationCount++;
    }

    console.log(currentLetterIndex);
    // console.log(phrase.slice(phrase.length))
  } else {
    console.log(phrase);
    return phrase;
  }

  return null;
};

// lineBreaking("Ala ma kota ble blo bli");
