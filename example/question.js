const Blackbox = require("../lib/blackbox");
const nigg = new Blackbox();

async function askQuestion() {
  try {
    let result = await nigg.question({ ask: "Keep it simple... What is blackbox?" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

askQuestion();
