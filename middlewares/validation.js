const validator = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  let errors = [];
  // validation for ID (must be a number)
  if (typeof ID !== "number") {
    errors.push("ID must be a number");
  }
  // validation for Name (must be a string)
  if (typeof Name !== "string") {
    errors.push("Name must be a string");
  }
  // validation for Rating (must be a number)
  if (typeof Rating !== "number") {
    errors.push("Rating must be a number");
  }
  // validation for Description (must be a string)
  if (typeof Description !== "string") {
    errors.push("Description must be a string;");
  }
  // validation for Genre (must be a string)
  if (typeof Genre !== "string") {
    errors.push("Genre must be a string");
  }
  // validation for Cast (must be an  array of strings)
  if (!Array.isArray(Cast)) {
    errors.push("Cast must be an array");
  } else {
    for (let i = 0; i < Cast.length; i++) {
      if (typeof Cast[i] !== "string") {
        errors.push("Each item in Cast must be a string");
        break;
      }
    }
  }
  //In case of validation failure, respond with HTTP status 400 and a message "bad request. some data is incorrect.",
  // along with appropriate notes in res.txt for each field validation check.
  if (errors.length > 0) {
    return res.status(400).json({
      message: "bad request. some data is incorrect.",
      errors: errors,
    });
  }
  // all validation pass ,move to the next middlewares/route handler
  next();
};
module.exports = validator;
