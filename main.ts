#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import figlet from "figlet";

// ****************************using figlt
async function start() {
  // representing data
  await new Promise((resolve) => {
    figlet("Q U I Z  - G A M E", function (err: any, data: any) {
      if (err) {
        console.dir(`Ops Something went wrong`);
        console.log(err);
      }
      const rainbow = chalkAnimation.rainbow(data);
      setTimeout(() => {
        // rainbow.stop();
        resolve(rainbow.stop());
      }, 1000);
    });
  });
}
await start();
// ***************************Asking for user name

let Answer_name = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.bgBlueBright("What's your name :"),
  },
]);

// *************************starting of Quiz

const Qs = [
  {
    name: "Question_1",
    type: "list",
    message: chalk.yellow("What are you...?\n"),
    choices: ["Street Animal", "Human Being", "National Bird", "Black Buffalo"],
  },
  {
    name: "Question_2",
    type: "list",
    message: chalk.yellowBright(
      "If Laiba's daughter is my daughter's mother what am i...?\n"
    ),
    choices: [
      "Laiba's daughter",
      "Laiba's mother",
      "Laiba's grandmother",
      "Laiba",
    ],
  },
  {
    name: "Question_3",
    type: "input",
    message: chalk.yellowBright(
      "What is always coming, but never arrives...?\n"
    ),
    validate: function (value: string) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please input something \notherwise it won't work further \n(Press the arrow buttons to go again)";
    }, //tomorrow
  },
  {
    name: "Question_4",
    type: "list",
    message: chalk.yellowBright("How many bones Human head contain...?\n"),
    choices: ["5", "8", "2", "0"],
  },
  {
    name: "Question_5",
    type: "list",
    message: chalk.yellowBright("What's the day today...?\n"),
    choices: ["Mon", "Tues", "Wed", "Thru", "Fri", "Sat", "Sun"],
  },
  {
    name: "Question_6",
    type: "list",
    message: chalk.yellowBright(
      "Why do some cricket players never sweat ...\nBcause they have...?\n"
    ),
    choices: ["Enimies", "Fans", "Family", "Friends"],
  },
  {
    name: "Question_7",
    type: "list",
    message: chalk.yellowBright(
      "If a plane crashes on the border between the Pakistan and India\n where do they bury the survivors...?\n"
    ),
    choices: ["Heaven", "Hell", "not buried", "Kashmir"],
  },
  {
    name: "Question_8",
    type: "list",
    message: chalk.yellowBright(
      "If you are in a dark room with a candle, a piece of wood  and a gas lamp.\n You only have one match, so what do you light first...?\n"
    ),
    choices: ["wood", "candle", "match", "lamp"],
  },
  {
    name: "Question_9",
    type: "input",
    message: chalk.yellowBright("What can be broken, but is never held...?\n"),
    validate: function (value: string) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please input something \notherwise it won't work further \n(Press the arrow buttons to go again)";
    }, //promise
  },
  {
    name: "Question_10",
    type: "input",
    message: chalk.yellowBright(
      "Most of the kids love to carry these keys. What are those keys...?\n"
    ),
    validate: function (value: string) {
      if (value.trim() !== "") {
        return true;
      }
      return "Please input something \notherwise it won't work further \n(Press the arrow buttons to go again)";
    }, //cookies
  },
];

// *****************************************Answers checking

inquirer.prompt(Qs).then((answers) => {
  let score = 0;
  if (answers.Question_1 === "Human Being") {
    score++;
  }
  if (answers.Question_2 === "Laiba's daughter") {
    score++;
  }
  if (answers.Question_3 === "tomorrow") {
    score++;
  }
  if (answers.Question_4 === "8") {
    score++;
  }
  if (
    answers.Question_5 === "Mon" ||
    answers.Question_5 === "Tues" ||
    answers.Question_5 === "Wed" ||
    answers.Question_5 === "Thrs" ||
    answers.Question_5 === "Fri" ||
    answers.Question_5 === "Sat" ||
    answers.Question_5 === "Sun"
  ) {
    score++;
  }
  if (answers.Question_6 === "Fans") {
    score++;
  }
  if (answers.Question_7 === "not buried") {
    score++;
  }
  if (answers.Question_8 === "match") {
    score++;
  }
  if (answers.Question_9 === "promise") {
    score++;
  }
  if (answers.Question_10 === "cookies") {
    score++;
  }
  console.log(chalk.bgBlueBright(`Your score is ${score}/10`));
  if (score === 10) {
    console.log(chalk.greenBright(`${Answer_name.name} You are a genius`));
  } else if (score >= 7) {
    console.log(chalk.greenBright(`${Answer_name.name} You did great`));
  } else if (score >= 5) {
    console.log(chalk.greenBright(`${Answer_name.name} You did good `));
  } else {
    console.log(chalk.greenBright(`${Answer_name.name} You lose the game`));
  }
});
