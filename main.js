import "./style.css";

import Chance from "chance";
const chance = new Chance();

window.addEventListener("load", (event) => {
  let firstNameGenerator = chance.first();
  let secondNameGenerator = chance.first();
  let lastNameGenerator = chance.last();
  let yearGenerator = chance.year({ min: 1950, max: 2020 });
  let mailGenerator = chance.email();
  let jobGenerator = chance.profession();
  let telGenerator = chance.phone();
  let cityGenerator = chance.city();
  let animalGenerator = chance.animal();
  let numberGenerator = chance.integer({ min: 1, max: 1000 });
  let avatarGenerator = chance.avatar({ protocol: "https" });

  document.querySelector("#app").innerHTML = `
  <main>
  <img class="maining" src=${avatarGenerator} alt="selfhtml">
  <h1>${firstNameGenerator} ${secondNameGenerator} ${lastNameGenerator}</h1>
  <div>
  <p><i class="fas fa-phone-alt"></i> ${telGenerator}</p>
 
  <p><i class="far fa-envelope"></i> ${mailGenerator}</p>
  </div>
  <p class="description">
  Hey, my name is ${firstNameGenerator} and I am a ${jobGenerator}.I was born in the year of ${yearGenerator}
  in the city of ${cityGenerator}. My favourite animal is the ${animalGenerator}. But I also love numbers!
  My favourite one is ${numberGenerator}.
  </p>
  </div>
  </main>
`;
});
