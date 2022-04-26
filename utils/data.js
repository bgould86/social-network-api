// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const users = [
  {
    username: "bgould86",
    email: "bgould86@gmail.com",
  },
  {
    username: "brownowl",
    email: "brownowl@gmail.com",
  },
  {
    username: "mowgli",
    email: "mowgli@gmail.com",
  },
  {
    username: "sandwich",
    email: "sandwich@gmail.com",
  },
  {
    username: "luna",
    email: "luna@gmail.com",
  },
];
// Function to generate random assignments that we can add to student object.
const thoughts = [
  {
    thoughtText: "I love penguins!",
    username: "bgould86",
    // reactions: [getRandomArrItem(reactions)],
  },
  {
    thoughtText: "These pretzles are making me thirsty!",
    username: "brownowl",
    // reactions: [getRandomArrItem(reactions)],
  },
  {
    thoughtText: "I'm gonna say it: most restaurants are Bad",
    username: "mowgli",
    // reactions: [getRandomArrItem(reactions)],
  },
  {
    thoughtText: "Uphoria isn't a good show!",
    username: "sandwich",
    // reactions: [getRandomArrItem(reactions)],
  },
  {
    thoughtText: "I buy and sell pork at wholesale prices!",
    username: "luna",
    // reactions: [getRandomArrItem(reactions)],
  },
];

const reactions = [
  {
    thoughtText: "Liar!",
    username: "bgould86",
  },
  {
    thoughtText: "NOT TRUE!",
    username: "luna",
  },
  {
    thoughtText: "I have to agree here",
    username: "sandwich",
  },
  {
    thoughtText: "I also feel this way.",
    username: "mowgli",
  },
  {
    thoughtText: "I'm calling the police!",
    username: "brownowl",
  },
];

// Export the functions for use in seed.js
module.exports = { users, thoughts, reactions };
