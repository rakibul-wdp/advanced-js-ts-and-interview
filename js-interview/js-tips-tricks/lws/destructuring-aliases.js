// destructuring aliases

const language = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: creatorName } = language;

console.log(languageName, creatorName);
