const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOut,
  getUser,
  loginStatus,
  updatedUser,
  changePassword,
  forgotPassword,
  resetpassword,
} = require("../controllers/userController");
const protect = require("../middlewere/authMiddlewere");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOut);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updatedUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;
