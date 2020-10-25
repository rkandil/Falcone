import { IdCreatorPipe } from './id-creator.pipe';

describe('IdCreatorPipe', () => {
  it('create an instance', () => {
    const pipe = new IdCreatorPipe();
    expect(pipe).toBeTruthy();
  });
});
