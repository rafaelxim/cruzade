export const shuffleString = (inputString?: string) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shuffledString = "";

  if (inputString === undefined) {
    return "";
  }

  // Adiciona letras da string original
  for (const char of inputString) {
    shuffledString += char;
  }

  // Adiciona letras aleatórias até que a string tenha 14 caracteres
  while (shuffledString.length < 14) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    shuffledString += alphabet[randomIndex];
  }

  // Embaralha a string
  const arrayShuffledString = shuffledString.split("");
  for (let i = arrayShuffledString.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayShuffledString[i], arrayShuffledString[j]] = [
      arrayShuffledString[j],
      arrayShuffledString[i],
    ];
  }

  return arrayShuffledString.join("");
};

export const fillArrayWithLetter = (
  letter: string,
  array: string[]
): string[] => {
  const filledArray = [...array]; // Cria uma cópia do array para não modificar o original

  // Encontra o primeiro espaço vazio no array e preenche com a letra fornecida
  const index = filledArray.findIndex((char) => char === "");
  if (index !== -1) {
    filledArray[index] = letter;
  }

  return filledArray;
};
