import { ValidatedEventBridgeHandler } from '@libs/eventBridge';
import { eventBridgeDetailSchema, eventBridgeResultSchema } from './schema';

const hello: ValidatedEventBridgeHandler<
  typeof eventBridgeDetailSchema,
  typeof eventBridgeResultSchema
> = async (event) => {
  console.log(event.detail.message);

  return {
    status: 'success',
  };
};

export const main = hello;
