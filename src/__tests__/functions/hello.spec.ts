import { main as lambdaFunc } from '@functions/hello/handler';
import { mockLambdaContext } from '@libs/mocks';
import { APIGatewayProxyResult } from 'aws-lambda';

describe('Testing lambda function handlers', () => {
  test('hello', (done) => {
    const event = require('@functions/hello/mock.json');

    lambdaFunc(event, mockLambdaContext, (err, res: APIGatewayProxyResult) => {
      if (err) {
        done(err);
      } else {
        const body = JSON.parse(res.body);

        expect(res.statusCode).toBe(200);
        expect(body.message).toEqual('Hello Frederic!');
        done();
      }
    });
  });
});
