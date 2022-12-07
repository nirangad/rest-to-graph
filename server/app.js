const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/gql_schema");

// Dotenv Config
dotenv.config();

// [MONGOOSE] DeprecationWarning: `strictQuery`
mongoose.set("strictQuery", true);

const dbConnection = () => {
  const dbServer = process.env.DB_SERVER;
  const dbName = process.env.DB_NAME;
  const connectionString = `mongodb://${dbServer}/${dbName}`;

  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection error", err);
    });
};

// Connecting to database
dbConnection();

const app = express();
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
