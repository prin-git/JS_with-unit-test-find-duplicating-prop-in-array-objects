const data = require("./data.json");

export const findDuplicates = (arr, valueSpam, valueDomain) => {
  const arrObj = {
    duplicate_spam_scores: [],
    duplicate_domain_authorities: []
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        i !== j &&
        arr[i][valueSpam] === arr[j][valueSpam] &&
        !arrObj.duplicate_spam_scores.includes(arr[i].url)
      ) {
        arrObj.duplicate_spam_scores.push(arr[i].url);
      } else if (
        i !== j &&
        arr[i][valueDomain] === arr[j][valueDomain] &&
        !arrObj.duplicate_domain_authorities.includes(arr[i].url)
      ) {
        arrObj.duplicate_domain_authorities.push(arr[i].url);
      }
    }
  }
  return arrObj;
};

console.log(
  "result",
  findDuplicates(data.idina_response.sources, "spam_score", "domain_authority")
);
