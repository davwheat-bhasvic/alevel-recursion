import prompts from "prompts";

/**
 * Fetch an array of all the factors of a `num`, **excluding
 * `num` itself.**
 */
function getFactors(num: number): number[] {
  // Get every number from 1 to `num / 2` in an array
  let possibleFactors = Array.from(Array(Math.ceil(num / 2)), (_, i) => i + 1);

  // FIlter to only include actual factors
  possibleFactors = possibleFactors.filter((fact) => num % fact === 0);

  possibleFactors.forEach((x) => {
    const otherFact = num / x;
    if (!possibleFactors.includes(otherFact)) possibleFactors.push(otherFact);
  });

  return possibleFactors;
}

/**
 * Reducer function to sum an array.
 */
const sumReducer = (acc: number, thisNum: number) => acc + thisNum;

(async () => {
  const out = await prompts({
    type: "number",
    name: "num",
    message: "Check if perfect",
    validate: (value: number) => (value < 1 ? `Number must be >= 1` : true),
  });

  const factors = getFactors(out.num);

  const sumOfFactors = factors.reduce(sumReducer, 0);

  // console.log(factors);
  // console.log(sumOfFactors);
  // console.log(out.num);

  if (sumOfFactors === out.num) {
    console.log(`${out.num} is a perfect number`);
  } else {
    console.log(`${out.num} is NOT a perfect number`);
  }
})();
