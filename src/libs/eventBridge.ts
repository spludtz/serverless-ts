import type { EventBridgeHandler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

export type ValidatedEventBridgeHandler<TDetail, TResult> = EventBridgeHandler<
  string,
  FromSchema<TDetail>,
  FromSchema<TResult>
>;
