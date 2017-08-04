import { sum } from './calculator';

describe('Calculator', () => {
  it('sum', () => {
    const x = 1;
    const y = 1;

    const subject = sum(x, y);

    expect(subject).to.eql(2);
  });
});
