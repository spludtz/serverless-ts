import type { APIGatewayProxyResult, Callback } from 'aws-lambda';
import { main as lambdaFunc } from '@functions/hello/handler';
import mockEvent from '@functions/hello/mock.json';
import { mockLambdaContext } from '@libs/mocks';

describe('Testing lambda function handlers', () => {
  test('hello', (done) => {
    const callback: Callback<APIGatewayProxyResult> = (err, res) => {
      if (err) {
        done(err);
      } else if (res !== undefined) {
        const body = JSON.parse(res.body);

        expect(res.statusCode).toBe(200);
        expect(body.message).toBe('Hello Frederic!');
        done();
      }
    };

    lambdaFunc(mockEvent, mockLambdaContext, callback);
  });
});
