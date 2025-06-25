/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateFreelancer() {
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];

  const randomOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const randomRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return {
    name: randomName,

    occupation: randomOccupation,

    rate: randomRate,
  };
}

let freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);

function calculateAverageRate(freelancers) {
  if (freelancers.length === 0) {
    return 0;
  }

  const totalRate = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,

    0
  );

  return totalRate / freelancers.length;
}

let averageRate = calculateAverageRate(freelancers);

function FreelancerRow(freelancer) {
  return `

<tr>

<td>${freelancer.name}</td>

<td>${freelancer.occupation}</td>

<td>${freelancer.rate}</td>

</tr>

`;
}

function FreelancerRows(freelancers) {
  return freelancers.map((freelancer) => FreelancerRow(freelancer)).join("");
}

function AverageRateDisplay(averageRate) {
  return `

<p>Average starting price: $${averageRate.toFixed(2)}</p>

`;
}

function renderApp() {
  const freelancerRowsElement = document.getElementById("FreelancerRows");

  const averageRateDisplayElement =
    document.getElementById("AverageRateDisplay");

  if (freelancerRowsElement) {
    freelancerRowsElement.innerHTML = FreelancerRows(freelancers);
  }

  if (averageRateDisplayElement) {
    averageRateDisplayElement.innerHTML = AverageRateDisplay(averageRate);
  }
}

renderApp();
