import type { Context, EventBridgeEvent } from 'aws-lambda';
import { FromSchema } from 'json-schema-to-ts';
import { eventBridgeDetailSchema } from '@functions/hello/schema';

export const mockEventBridgeEvent: EventBridgeEvent<
  string,
  FromSchema<typeof eventBridgeDetailSchema>
> = {
  version: '0',
  id: 'mock-id',
  'detail-type': 'Notify Users',
  source: 'example.app',
  account: 'mock-acct',
  time: 'mock-time',
  region: 'ap-southeast-1',
  resources: [],
  detail: {
    message: 'Hello World!',
  },
};

export const mockLambdaContext: Context = {
  callbackWaitsForEmptyEventLoop: true,
  functionName: 'mock-func',
  functionVersion: '1',
  invokedFunctionArn: 'mock-arn',
  memoryLimitInMB: '64',
  awsRequestId: 'mock-request-id',
  logGroupName: 'mock-log-group-name',
  logStreamName: 'mock-log-stream-name',
  getRemainingTimeInMillis: () => 5000,
  done: () => true,
  fail: () => true,
  succeed: () => true,
};
