// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";
// import Data from "./data";

const [cat, dog] = animals

// const {name: catName, sound: catSound} = cat;

// const {name="fulffy", sound="Purr"} = cat;

// const {name, sound, feedingRequirements: {food, water}} = cat;

// const {feedingRequirements: {food, water}} = cat;

// eslint-disable-next-line react-hooks/rules-of-hooks
const [animal, makeSound] = useAnimals(cat)
console.log(animal);
makeSound();



// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
