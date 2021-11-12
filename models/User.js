const {model, Schema} = require('mongoose');

const userSchema = Schema(
  {
    name: {type: String, required: true},
    lastName: {type: String, required: true}
  }
)

module.exports = model("User", userSchema);
