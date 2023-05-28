import User from "../models/User.js";
import generateId from "../helpers/generateId.js";

const register = async (req, res) => {
  // Avoid duplicated registers
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    const error = new Error("User has been registered");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    user.token = generateId();
    const storedUser = await user.save();
    res.json(storedUser);
  } catch (error) {
    console.log(error);
  }
};

export { register };
