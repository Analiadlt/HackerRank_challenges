export default function snakeToCamel(snakeCaseString) {
  if (snakeCaseString.includes("_")) {
    // let snakeCaseString = "first_name";
    const snakeToCamelCase = (snakeCaseString) =>
      snakeCaseString
        .split("_")
        .map((word, index) => {
          console.log("word ", word, index);
          if (word === 0) {
            return part.toLowerCase();
          }
          if (index != 0) {
            return firstUppercase(word);
          } else {
            return word;
          }
        })
        .join("");
    const firstUppercase = (word) =>
      word && word.charAt(0).toUpperCase() + word.slice(1);

    // console.log(snakeCaseString);
    console.log(snakeToCamelCase(snakeCaseString));
  }
  //   let snakeCaseString = "first_name";
  //   const snakeToCamelCase = (sentence) =>
  //     sentence
  //       .split("_")
  //       .map((word, index) => {
  //         if (word === 0) {
  //           return part.toLowerCase();
  //         }
  //         return firstUppercase(word);
  //       })
  //       .join("");
  //   const firstUppercase = (word) =>
  //     word && word.charAt(0).toUpperCase() + word.slice(1);

  //   console.log(snakeCaseString);
  //   console.log(snakeToCamelCase(snakeCaseString));
}
