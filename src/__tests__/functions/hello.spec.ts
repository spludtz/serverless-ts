import { main as lambdaFunc } from '@functions/hello/handler';
import { mockLambdaContext } from '@libs/mocks';
import { APIGatewayProxyResult, Callback } from 'aws-lambda';

describe('Testing lambda function handlers', () => {
  test('hello', (done) => {
    const event = require('@functions/hello/mock.json');

    const callback: Callback<APIGatewayProxyResult> = (err, res) => {
      if (err) {
        done(err);
      } else if (res !== undefined) {
        const body = JSON.parse(res.body);

        expect(res.statusCode).toBe(200);
        expect(body.message).toEqual('Hello Frederic!');
        done();
      }
    };

    lambdaFunc(event, mockLambdaContext, callback);
  });
});
