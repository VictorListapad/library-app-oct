// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// connection to the db
mongoose.connect('mongodb://localhost/libraryapp')
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Failed to connect ❌"));

// middlewares
app.use(express.json());
app.use(cors());

// users,
app.use("/api/users", require('./routes/user'));
app.use("/api/books", require('./routes/book'));
app.use("/api/rentals", require('./routes/rental'));
// books
// rentals

// port & listening
const port = 5000;
app.listen(port, () => {
  console.log("Server running...⚡")
})
