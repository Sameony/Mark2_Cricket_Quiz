const chalk = require('chalk');
var score=0;
var readlineSync = require("readline-sync");
var name = readlineSync.question("Please enter your name: ");

ques1=["Who has scored the most runs in t20? ",
        "Who has scored the most runs in test matches? ",
        "The player who scored the fastest century in T20 is: "
        ]

ans1 = ["Virat Kohli",
        "Sachin Tendulkar",
        "Chris Gayle" 
      ]

ques2=[" Which player has taken the most wickets in test matches? ",
        "Who has taken the most wickets in an innings? ",
        " Which team won the 2019 Cricket World Cup? "
        ]

ans2 = ["Muralitharan",
        "Deepak Chahar",
        "England" 
      ]


ques3=["The youngest bowler to take a hat-trick is:",
        "Which Wicketkeeper-batsman has scored the most international runs? ",
        "Which female cricketer is the highest run scorer in women's cricket? "
        ]

ans3 = ["Naseem Shah",
        "Kumar Sangakkara",
        "Mithali Raj" 
      ]


var choice = readlineSync.keyInYN(chalk.blue("Welcome ")+chalk.red.bold(name)+chalk.blue("! Would you like to test your knowledge on international cricket? "));





if(!choice)
  console.log(chalk.red("Understandable. Have a great day."));
else
{
  
       for(var i=0;i<ques1.length;i++)
       {
         var userAns = readlineSync.question(ques1[i]);
         if(userAns.toUpperCase()===ans1[i].toUpperCase())
        {
          score+=1;
          console.log(chalk.greenBright("Correct answer!!"));
        }
        else
          console.log(chalk.redBright("OOPS! Wrong answer. I hope it wasn't a spelling error!"));
          console.log(chalk.blueBright("The correct ans is:")+chalk.greenBright(ans1[i]));
        
       }
       console.log("Your score is: "+chalk.green(score));
       if(score>=3)
        {  
          console.log(chalk.greenBright("You have advanced to level 2!"));
        }
        else
        {
          console.log(chalk.bold("Oooh! You missed the Chance to advance to the next level by "+chalk.red(3-score)+" points!"));
        }
}
console.log();
console.log();
if(score==3)
{
  score=0;
  var choice = readlineSync.keyInYN("Would you like to proceed to level 2?");


  if(!choice)
    console.log("Understandable. Have a great day.");
  else
  {
    
  
      for(var i=0;i<ques1.length;i++)
       {
         var userAns = readlineSync.question(ques2[i]);
         if(userAns.toUpperCase()===ans2[i].toUpperCase())
        {
          score+=1;
          console.log(chalk.greenBright("Correct answer!!"));
        }
        else
          console.log(chalk.redBright("OOPS! Wrong answer. I hope it wasn't a spelling error!"));
          console.log("The correct ans is:"+chalk.green(ans2[i]));
        
       }
      console.log("Your score is: "+score);
      if(score>=3)
        {  
          console.log(chalk.green("You have advanced to level 3!"));
        }
      else
        {
          console.log("Oooh! You missed the Chance to advance to the next level by "+chalk.redBright(3-score)+" points!");
        }
  }
}


if(score==3)
{
  score=0;
  var choice = readlineSync.keyInYN("Would you like to proceed to the final level 3?");


  if(!choice)
    console.log("Understandable. Have a great day.");
  else
  {
  
      for(var i=0;i<ques3.length;i++)
       {
         var userAns = readlineSync.question(ques3[i]);
         if(userAns.toUpperCase()===ans3[i].toUpperCase())
        {
          score+=1;
          console.log(chalk.greenBright("Correct answer!!"));
        }
        else
          console.log(chalk.redBright("OOPS! Wrong answer. I hope it wasn't a spelling error!"));
          console.log("The correct ans is:"+chalk.greenBright(ans3[i]));
        
       }
      console.log("Your score is: "+score);
      if(score>=3)
        {  
          console.log(chalk.green.bgWhite.bold("You are a champion!!"));
        }
      else
        {
          console.log("You scored "+chalk.greenBright(score)+" points! GG WP!");
        }
  }
}