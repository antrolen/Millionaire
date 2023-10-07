export class Question {
  constructor(
    public question: string,
    public answers: string[],
    public rightAnswer: number | any
  ) {}
}

let testQuestions = new Question('Q1', ['A1 -- right', 'A2', 'A3', 'A4'], 0);
export let QuestionsDB: Question[] = [
  // ans,
  // ans

  new Question(
    "What sort of animal is Walt Disney's Dumbo?",
    ['Deer', 'Rabbit', 'Elephant', 'Donkey'],
    2
  ),
  new Question(
    "Which battles took place between the Royal Houses of York and Lancaster?",
    ['Thirty Years War', 'Hundred Years War', 'Wars of the Roses', 'English Civil War'],
    2
  ),
  new Question(
    `Which Shakespeare play features the line "Neither a borrower nor a lender be?"`,
    ['Hamlet', 'Macbeth', 'Othello', 'The Merchant of Venice'],
    0
  ),
  new Question(
    `Which is the largest city in the USA's largest state?`,
    ['Dallas', 'Los Angeles', 'New York', 'Anchorage'],
    3
  ),
  new Question(
    `The word "aristocracy" literally means power in the hands of `,
    ['The few', 'The best', 'The barons', 'The rich'],
    1
  ),
  
];

// export let Treasure: number[] = [10, 100, 1000, 10000, 100000];

// export let RequestToContinue = "Next question or Money"
