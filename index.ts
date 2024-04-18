#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

while (true) {
  let allcodes = await inquirer.prompt([
    {
      name: "codes",
      message: "SELECT PROGRAMING TYPE YOU WANT TO EXECUTE:",
      type: "list",
      choices: [
        
        "SIMPLE CALCULATOR:",
        "NUMBER GUESSING GAME:",
        "ATM MACHINE:",
        "BMI CALCULATOR:",
        "TODO LIST APP:",
        "CURRENCY CONVERTER",
        "WORDS-COUNTING-APP",
        "ROCK, PAPER OR SCISSSOR GAME",
        "EXIT TO THE PROGRAM ?"
      ],
    },
  ]);
  if (allcodes.codes === "ROCK, PAPPER OR SCISSSOR GAME:") {
    console.log(
      chalk.yellow(
        `\t\t================================================\n\t\t  WELLCOME TO THE ROCK, PAPPER, SCEISSORS GAME:\n\t\t================================================`
      )
    );
    let continueGame = true;
    while (continueGame) {
      const rockGame = await inquirer.prompt([
        {
          name: "rps",
          message: "SELECT ONE OPTION:",
          type: "list",
          choices: ["ROCK", "PAPER", "SCISSOR"],
        },
      ]);

      const compOption: number = Math.floor(Math.random() * 3);
      const values: string = ["ROCK", "PAPER", "SCISSOR"][compOption];

      if (
        (rockGame.rps === "ROCK" && values === "SCISSOR") ||
        (rockGame.rps === "PAPER" && values === "ROCK") ||
        (rockGame.rps === "SCISSOR" && values === "PAPER")
      ) {
        console.log(chalk.green(`\n\t\t"YOU WIN THIS MATCH:"`));
        console.log(chalk.green(`\t\tCOMPUTER CHOOSE "${values}"\n`));
      } else if (
        (values === "ROCK" && rockGame.rps === "SCISSOR") ||
        (values === "PAPER" && rockGame.rps === "ROCK") ||
        (values === "SCISSOR" && rockGame.rps === "PAPER")
      ) {
        console.log(chalk.red(`\n\t\t"COMPUTER WIN THIS MATCH:"`));
        console.log(chalk.red(`\t\tCOMPUTER CHOOSE "${values}"\n`));
      } else if (rockGame.rps === values) {
        console.log(chalk.yellow(`\n\t\tMATCH IS DRAW:`));
        console.log(chalk.yellow(`\t\tCOMPUTER CHOOSE "${values}"\n`));
      } else {
        console.log(chalk.red(`\t\tPROGRAM IS VALID:`));
      }

      const { wantToContinue } = await inquirer.prompt([
        {
          name: "wantToContinue",
          type: "confirm",
          message: "DO YOU WANT TO CONTINUE THIS GAME ?",
        },
      ]);
      continueGame = wantToContinue;
      if (!continueGame) {
        console.log(
          chalk.green(
            `\n\t\tTHANKS FOR USING THIS GAME CREATOR BY: "RAHEEM VEER"\n`
          )
        );
      }
    }
  } else if (allcodes.codes === "NUMBER GUESSING GAME:") {
    console.log(
      chalk.yellow(
        `\t\t=============================================\n\t\t    WELLCOME TO THE GUESSING NUMBER GAME:\n\t\t==============================================`
      )
    );
    let continueGame = true;

    while (continueGame) {
      const userInput = await inquirer.prompt([
        {
          name: "guessingNum",
          type: "number",
          message: "ENTER YOUR NUMBER BETWEEN 1-6:",
        },
      ]);

      let compNum = Math.floor(Math.random() * 6 + 1);

      if (userInput.guessingNum === compNum) {
        console.log(
          chalk.green(`\n HEY CONGRATS YOU GUESS RIGHT NUMBER.
    YOUR NUMBER IS "${userInput.guessingNum}" AND COMPUTER NUMBER IS "${compNum}"\n`)
        );
      } else {
        console.log(
          chalk.red(`\nYOU ENTER WRONG NUMBER PLEASE TRY AGAIN !!\n`)
        );
      }

      const { wantToContinue } = await inquirer.prompt([
        {
          name: "wantToContinue",
          type: "confirm",
          message: "DO YOU WANT TO PLAY THIS GAME ?",
        },
      ]);

      continueGame = wantToContinue;

      if (!continueGame) {
        console.log(
          chalk.yellow(
            `\n\t\tTHANKS FOR USING THIS GAME CREATOR BY: "RAHEEM VEER"\n`
          )
        );
      }
    }
  } else if (allcodes.codes === "SIMPLE CALCULATOR:") {
    console.log(
      chalk.yellow(
        `\t\t=============================================\n\t\t   WELLCOME TO THE CLI-SIMPLE-CALCULATOR PROGRAM:\n\t\t==============================================`
      )
    );
    const pass = await inquirer.prompt([
      {
        message: "ENTER CALCULATOR PASSWORD TO LOWERCASE",
        type: "password",
        name: "zakia",
      },
    ]);
    if (pass.zakia === "zakia") {
      let continueCalc = true;
      while (continueCalc) {
        const answer = await inquirer.prompt([
          {
            message: "ENTER FIRST NUMBER",
            type: "number",
            name: "firstNumber",
          },
          {
            message: "ENTER SECOND NUMBER",
            type: "number",
            name: "secondNumber",
          },
          {
            message: "SELECT ONE OF THE OPERTAOR TO PERFORM OPERATIONS.",
            type: "list",
            name: "OPERATOR",
            choices: [
              "Addition",
              "Subtraction",
              "Multiplication",
              "Division",
              "Modulo",
              "Exponen",
            ],
          },
        ]);

        if (answer.OPERATOR === "Addition") {
          console.log(
            `${answer.firstNumber} + ${answer.secondNumber} =`,
            answer.firstNumber + answer.secondNumber
          );
        } else if (answer.OPERATOR === "Subtraction") {
          console.log(
            `${answer.firstNumber} - ${answer.secondNumber} =`,
            answer.firstNumber - answer.secondNumber
          );
        } else if (answer.OPERATOR === "Multiplication") {
          console.log(
            `${answer.firstNumber} * ${answer.secondNumber} =`,
            answer.firstNumber * answer.secondNumber
          );
        } else if (answer.OPERATOR === "Division") {
          console.log(
            `${answer.firstNumber} / ${answer.secondNumber} =`,
            answer.firstNumber / answer.secondNumber
          );
        } else if (answer.OPERATOR === "Modulo") {
          console.log(
            `${answer.firstNumber} % ${answer.secondNumber} =`,
            answer.firstNumber % answer.secondNumber
          );
        } else if (answer.OPERATOR === "Exponen") {
          console.log(
            `${answer.firstNumber} ** ${answer.secondNumber} =`,
            answer.firstNumber ** answer.secondNumber
          );
        } else {
          console.log("YOUR CALCULATOR IS VALID.");
        }

        const { wantToContinue } = await inquirer.prompt([
          {
            message: "DO YOU WANT TO PERFORM ANOTHER CALCULATION",
            type: "confirm",
            name: "wantToContinue",
          },
        ]);
        continueCalc = wantToContinue;
        if (!continueCalc) {
          console.log(
            chalk.blue(
              `\n\t\tTHANKS FOR USING THIS CALCULATOR CREATOR BY "ZAKIA BASHIR":\n`
            )
          );
        }
      }
    } else {
      console.log(`WRONG PASSWORD`);
    }
  } else if (allcodes.codes === "ATM MACHINE:") {
    console.log(
      chalk.yellow(
        `\t\t=============================================\n\t\t    WELLCOME TO THE ATM MACHINE PROGRAM:\n\t\t==============================================`
      )
    );
    let myBalance = 120000;
    let password = 1234;

    let userInput = await inquirer.prompt([
      {
        name: "pin",
        type: "number",
        message: "ENTER your ATM PIN CODE.",
      },
    ]);

    if (userInput.pin === password) {
      console.log(chalk.green(`\n\t\tYOUR PIN CODE IS MATCHED.\n`));

      console.log(
        chalk.yellow(`    ===========================================\n       ACCOUNT OWNER NAME IS: "ZAKIA BASHIR"
    ============================================`)
      );

      let userInpur2 = await inquirer.prompt([
        {
          name: "option",
          message: "WHAT YOU WANT TO CHOOSE:",
          type: "list",
          choices: ["WITHDRAW", "CURRENT BALANCE"],
        },
      ]);

      if (userInpur2.option === "WITHDRAW") {
        let userInput3 = await inquirer.prompt([
          {
            name: "suggestions",
            type: "list",
            message:
              "YOU HAVE TWO OPTIONS TO WITHDRAW YOUR AMOUNT CHOICE IS YOURS:",
            choices: ["ATM SUGGESTED AMOUNT", "YOU OWN SELECT YOUR AMOUNT"],
          },
        ]);
        if (userInput3.suggestions === "ATM SUGGESTED AMOUNT") {
          let suggestionsAmount = await inquirer.prompt([
            {
              name: "atmSuggest",
              message: "ATM SUGGESTED AMOUNT IS:",
              type: "list",
              choices: [5000, 10000, 50000, 100000],
            },
          ]);
          if (myBalance >= suggestionsAmount.atmSuggest) {
            console.log(
              chalk.yellow(
                `YOUR REMANING AMOUNT IS. ${(myBalance -=
                  suggestionsAmount.atmSuggest)}`
              )
            );
          } else {
            console.log(
              chalk.red(
                `YOU DON'T HAVE MONEY TO WITHDRAW. YOUR CURRENT BALANCE IS: ${myBalance}`
              )
            );
          }
        } else if (userInput3.suggestions === "YOU OWN SELECT YOUR AMOUNT") {
          let selectedAmount = await inquirer.prompt([
            {
              name: "yourSelected",
              type: "number",
              message: "ENTER YOUR AMOUNT YOU WANT TO WITHDRAW:",
            },
          ]);
          if (myBalance >= selectedAmount.yourSelected) {
            console.log(
              chalk.yellow(
                `YOUR REMANING AMOUNT IS. ${(myBalance -=
                  selectedAmount.yourSelected)}`
              )
            );
          } else {
            console.log(
              chalk.red(
                `YOU DON'T HAVE MONEY TO WITHDRAW.YOUR CURRENT BALANCE IS ${myBalance}`
              )
            );
          }
        }
      } else if (userInpur2.option === "CURRENT BALANCE") {
        console.log(
          chalk.green(`===================================\nYOUR CURRENT BALANCE IS: ${myBalance}
    ===================================`)
        );
      }
    } else {
      console.log(chalk.red(`ATM PASSWORD IS NOT MATCHED.`));
    }
  } else if (allcodes.codes === "BMI CALCULATOR:") {
    console.log(
      chalk.yellow(
        `\t\t=============================================\n\t\t   WELLCOME TO THE BMI-CALCULATOR PROGRAM:\n\t\t==============================================`
      )
    );
    let continueBmi = true;
    while (continueBmi) {
      let userInput = await inquirer.prompt([
        {
          name: "userWeight",
          type: "number",
          message: "ENTER YOUR BODY WEIGHT IN KG:",
        },
        {
          name: "userHeight",
          type: "number",
          message: "ENTER YOUR HEIGHT IN FEET:",
        },
      ]);

      let heightMeter = userInput.userHeight * 0.3048;
      let weightHeight = userInput.userWeight / (heightMeter * heightMeter);
      let roundBmi = Math.round(weightHeight);

      if (roundBmi < 16) {
        console.log(chalk.red(`\n\t\tYOUR BODY IS SEVERE THINNESS: `));
        console.log(chalk.red(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      } else if (roundBmi >= 16 && roundBmi <= 18) {
        console.log(chalk.yellow(`\n\t\tYOUR BODY IS MILD THINNESS:`));
        console.log(chalk.yellow(`\t\tYOUR BODY BMI IS "${roundBmi}"\n`));
      } else if (roundBmi > 18 && roundBmi <= 25) {
        console.log(chalk.green(`\n\t\tYOU BODY IS NORMAL STAGE:`));
        console.log(chalk.green(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      } else if (roundBmi > 25 && roundBmi <= 30) {
        console.log(chalk.blue(`\n\t\tYOUR BODY IS OVERWEIGHT:`));
        console.log(chalk.blue(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      } else if (roundBmi > 30 && roundBmi <= 35) {
        console.log(chalk.red(`\n\t\tYOUR BODY IS OBESE CLASS 1:`));
        console.log(chalk.red(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      } else if (roundBmi > 35 && roundBmi <= 40) {
        console.log(chalk.red(`\n\t\tYOUR BODY IS OBESE CLASS 2:`));
        console.log(chalk.red(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      } else if (roundBmi > 40) {
        console.log(chalk.red(`\n\t\tYOUR BODY IS OBESE CLASS 3:`));
        console.log(chalk.red(`\t\tYOUR BMI IS "${roundBmi}"\n`));
      }

      const { wantToContinue } = await inquirer.prompt([
        {
          name: "wantToContinue",
          type: "confirm",
          message: "DO YOU WANT TO CONTINUE ?",
        },
      ]);

      continueBmi = wantToContinue;

      if (!continueBmi) {
        console.log(
          chalk.yellow(`\n\t\tTHANKS FOR USING CREATOR BY: "ZAKIA BASHIR"\n`)
        );
      }
    }
  }
   else if (allcodes.codes === "TODO LIST APP:") {
    console.log(
      chalk.yellow(
        `\t\t==============================================\n\t\t\tWELLCOME TO THE TODO-LIST PROGRAM:\n\t\t==============================================`
      )
    );

let continueWork = true;
let listArray = ["oil","ketchup","mayonase","peprica powde","sugar","black paper","tooth paste"];

while (continueWork) {
  let userOptions = await inquirer.prompt([
    {
      name: "option",
      message: chalk.yellow("WHAT YOU WANT TO DO ?"),
      type: "list",
      choices: [
        "DISPLAY YOUR LIST:",
       "ADD YOUR LIST:",
       "DELET ANY LIST:",
      "EXIT THE PROGRAM:",
      ],
    },
  ]);
  

  if (userOptions.option === "ADD YOUR LIST:") {
    let userList = await inquirer.prompt([
      {
        name: "list",
        type: "input",
        message: "WRITE YOUR LIST YOU WANT TO ADD.",
      },
    ]);
    listArray.push(userList.list);
    console.log(
      chalk.yellow(`\n\t\t"${userList.list}".`) +
        chalk.green(`  <= ADDED IN THE LIST:\n`)
    );
  } else if (userOptions.option === "DISPLAY YOUR LIST:") {
    if (listArray >= []) {
      console.log(
        chalk.green(
          `\n\t\t=======================================================`
        )
      );
      console.log(chalk.magenta(`\t\t\t\t\tTO DO LIST\n`));
      listArray.forEach((val, index) => {
        console.log(chalk.yellow(`\t\t${index}: ${val}`));
      });

      console.log(
        chalk.green(
          `\n\t\t=======================================================\n`
        )
      );
    } else if (listArray < []) {
      console.log(
        chalk.green(`\n" YOU DON'T HAVE ANY LIST.
        FIRST YOU CAN ADD YOUR LIST THEN BACK TO DISPLAY OPTION: "\n`)
      );
    }
  } else if (userOptions.option === "DELET ANY LIST:") {
    let indexDel = await inquirer.prompt([
      {
        name: "index",
        type: "number",
        message: "ENTER LIST INDEX YOU WANT TO DLETE ?",
      },
    ]);
    if (indexDel.index >= 0 && indexDel.index <= listArray.length) {
      let deletedItem = listArray.splice(indexDel.index, 1);
      console.log(
        chalk.red(`\n\t"${deletedItem}"`) +
          chalk.yellow(`  <= REMOVE FROM LIST\n`)
      );
    } else {
      console.log(chalk.red(`\n\t\t"your desired indexhas been deleted "\n`));
    }
  } else if (userOptions.option === "EXIT THE PROGRAM:") {
    console.log(
      chalk.magenta(
        `\t=========================================================`
      ) + chalk.yellow(`===============`)
    );
    console.log(
      chalk.green(
        `\t   THANKS FOR USING zakia's TODO-LIST PROGRAM; CREATOR BY: =>`
      ) + chalk.white(` "ZAKIA BASHIR"`)
    );
    console.log(
      chalk.magenta(
        `\t=========================================================`
      ) + chalk.yellow(`===============`)
    );
    break;
  }
}
   }

else if (allcodes.codes === "CURRENCY CONVERTER:") {
    console.log(
      chalk.yellow(
        `\t\t==============================================\n\t\t\tWELLCOME TO THE CLI-CURRENCY-CONVERTER PROGRAM:\n\t\t==============================================`
      )
    );
    const currency:any = {
        USD: 1,
        EUR:0.91,
        GBP:0.76,
        INR:74.45,
        PKR: 280,
    };
    let answer= await inquirer.prompt([{
        name: "to",
        message: " Enter to cruncey",
        type: "list",
        choices:[ "USD","EUR", "GBP","INR", "PKR"]
    },
    {
        name: "from",
        message: " Enter from cruncey",
        type: "list",
        choices:["USD","EUR", "GBP","INR", "PKR"]
    },
    {
        name: "amount",
        message: " Enter your amount",
        type: "number",
    }
    ]);
    let fromamount = currency[answer.from]
    let toamount = currency[answer.to]
    let amount = answer.amount;
    let baseamount = amount/fromamount; //usd base currency
    let convertedamount = baseamount*toamount
    console.log(convertedamount);}

    else if (allcodes.codes === "WORDS-COUNTING-APP:") {
        console.log(
          chalk.yellow(
            `\t\t==============================================\n\t\t\tWELLCOME TO THE CLI-WORDS-COUNTING-APP PROGRAM:\n\t\t==============================================`
          )
        );
        const answer:{
          sentence: string
      } = await inquirer.prompt([{
          name:"sentence",
          type: "input",
          message: "enter your sentence to count the word:"
      }])
      
      const words = answer.sentence.trim().split(" ") 
      // print the arrayof words to the console
      console.log(words) 
      // print the word count of the sentence to the console
      console.log(`your sentence  words  to count is ${words.length}`)
    }
  
  else if (allcodes.codes === "EXIT TO THE PROGRAM ?") {
    console.log(
      chalk.red(`\t=====================================================`) +
        chalk.red(`===============`)
    );
    console.log(
      chalk.yellow(`\t     THANKS FOR USING ALL PROGRAMS CREATOR BY: =>`) +
        chalk.green(` "zakia bashir"`)
    );
    console.log(
      chalk.red(`\t=====================================================`) +
        chalk.red(`===============`)
    );
    break;
  }
}
