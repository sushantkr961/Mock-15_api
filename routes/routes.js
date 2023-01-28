const expres = require("express");
const {
  getQuestions,
  postQuestions,
  deleteQuestions,
  getResult,
  postResult,
  deleteResult,
} = require("../controllers/controller");
const router = expres.Router();

router.get("/questions", getQuestions);
router.post("/questions", postQuestions);
router.delete("/questions", deleteQuestions);

router.get("/result", getResult);
router.post("/result", postResult);
router.delete("/result", deleteResult);

module.exports = router;
