import { Question } from './question';

describe('Question', () => {
  it('should create an instance', () => {
    expect(new Question('Q1', ['A1 -- right', 'A2', 'A3', 'A4'], 0)).toBeTruthy();
  });
});
