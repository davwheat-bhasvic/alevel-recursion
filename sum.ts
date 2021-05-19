import prompts from "prompts";

/**
 * Calculates the sum of all numbers from 0 to `num`.
 */
function sum(num: number): number {
  if (num < 1) return num;

  return num + sum(num - 1);
}

(async () => {
  const out = await prompts({
    type: "number",
    name: "num",
    message: "Num to sum to",
    validate: (value: number) => (value < 0 ? `Number must be  >=0` : true),
  });

  console.log(sum(out.num));
})();
