import { main as hello } from '@functions/hello/handler';
import { mockEventBridgeEvent, mockLambdaContext } from '@libs/mocks';

describe('Testing lambda function handlers', () => {
  test('hello', async () => {
    const res = await hello(
      mockEventBridgeEvent,
      mockLambdaContext,
      () => true
    );

    expect(res?.status).toBe('success');
  });
});
