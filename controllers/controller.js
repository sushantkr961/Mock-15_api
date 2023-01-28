const questionSchema = require("../model/questionSchema");
const resultSchema = require("../model/resultSchema");

exports.getQuestions = async (req, res) => {
  try {
    const ques = await questionSchema.find();
    res.json(ques);
  } catch (error) {
    res.json({ error });
  }
};

exports.postQuestions = (req, res) => {
  try {
    questionSchema.insertMany(
      {
        questions: [0],
        answers: [1],
      },
      function (err, data) {
        res.json({ msg: "Data added Successfully!" });
      }
    );
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

exports.deleteQuestions = async (req, res) => {
  try {
    await questionSchema.deleteMany();
    res.json({ msg: "Deleted Successfully!" });
  } catch (error) {
    res.json({ error });
  }
};

exports.getResult = async (req, res) => {
  try {
    const resul = await resultSchema.find();
    res.json(resul);
  } catch (error) {
    res.json({ error });
  }
};

exports.postResult = async (req, res) => {
  try {
    const {
      username,
      result,
      correct,
      incorrect,
      score,
      percentage,
      acheived,
    } = req.body;
    if (!username && !result) throw new Error("Data not provided");
    resultSchema.create(
      { username, result, correct, incorrect, score, percentage, acheived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
};

exports.deleteResult = async (req, res) => {
  try {
    await resultSchema.deleteMany();
    res.json({ msg: "Result Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
};
