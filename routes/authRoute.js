const express = require("express");
const {
    signUpFunction,
    signInFunction,
    getAuth,
    deleteFromBasket,
    incAndDecFunction,
    verificateUser,
    findUserByEmail,
    updatePassword,
    payment,
    getAllUser
} = require("../controllers/authController");
const authentication = require("../middleware/authentication");
const router = express.Router();

router.post("/signup", signUpFunction);
router.post("/signin", signInFunction);
router.get("/", authentication, getAuth);
router.get("/users", authentication, getAllUser);
router.put("/:userId/basket/:id", incAndDecFunction);
router.delete("/:userId/basket/:bookId", deleteFromBasket);
router.get("/verify/:userId/:uniqueId", verificateUser);
router.post("/find-user-by-email", findUserByEmail);
router.put("/update-password/:userId/:uniqueId", updatePassword);
router.post("/payment", authentication, payment);

module.exports = router;