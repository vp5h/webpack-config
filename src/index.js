const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonStone: 8,
};

const someOtherRecipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedMoonStone: 4,
};
console.log(elevenShieldRecipe);
console.log(someOtherRecipe);
