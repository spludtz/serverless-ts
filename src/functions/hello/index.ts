import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      eventBridge: {
        pattern: {
          source: ['example.app'],
          'detail-type': ['Notify Users'],
        },
      },
    },
  ],
};
