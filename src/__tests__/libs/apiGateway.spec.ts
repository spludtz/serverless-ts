import { formatJSONResponse } from '@libs/apiGateway';

describe('Testing lib functions', () => {
  test('formatJSONResponse', () => {
    expect(
      formatJSONResponse({
        fname: 'John',
        lname: 'Lennon',
      })
    ).toEqual({
      statusCode: 200,
      body: '{"fname":"John","lname":"Lennon"}',
    });
  });
});
