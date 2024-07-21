const joi = require("joi");

const registrationSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(10).required(),
  role: joi.string().required(),
});

function validateRegister(req, res, next) {
  const { error, value } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
const loginSchema = joi.object({
  firstName: joi.string().required(),
  email: joi.string().email().required(),
});

function validatelogin(req, res, next) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
const blogSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
});
function validateblog(req, res, next) {
  const { error, value } = blogSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}

const blogeditSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
});
function validateblogedit(req, res, next) {
  const { error, value } = blogeditSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  req.body = value;
  next();
}
module.exports = {
  validateRegister,
  validatelogin,
  validateblog,
  validateblogedit,
};
