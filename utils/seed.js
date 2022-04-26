const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing courses
  // await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  // await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  // console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
