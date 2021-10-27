import type { Context } from 'aws-lambda';

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
