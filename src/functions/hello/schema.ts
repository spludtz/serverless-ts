export const eventBridgeDetailSchema = {
  type: 'object',
  properties: {
    message: { type: 'string' },
  },
  required: ['message'],
} as const;

export const eventBridgeResultSchema = {
  type: 'object',
  properties: {
    status: { type: 'string' },
  },
  required: ['status'],
} as const;
