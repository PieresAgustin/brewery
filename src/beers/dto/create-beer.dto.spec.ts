import { CreateBeerDto } from './create-beer.dto';

describe('CreateBeerDto', () => {
  it('should be defined', () => {
    expect(new CreateBeerDto()).toBeDefined();
  });
});
