import prompts from "prompts";

/**
 * Calculates the product of all numbers from 0 to `num`.
 */
function product(num: number): number {
  if (num <= 1) return 1;

  return num * product(num - 1);
}

(async () => {
  const out = await prompts({
    type: "number",
    name: "num",
    message: "Num to factorial to",
    validate: (value: number) => (value < 1 ? `Number must be >= 1` : true),
  });

  console.log(product(out.num));
})();
