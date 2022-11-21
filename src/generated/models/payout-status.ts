/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Status of the payout. Status `pending` indicates that the payout is in process; `complete` indicates it finished successfully; `failed` indicates it failed.
 * @export
 * @enum {string}
 */

export const PayoutStatus = {
  Pending: "pending",
  Complete: "complete",
  Failed: "failed"
} as const;

export type PayoutStatus = typeof PayoutStatus[keyof typeof PayoutStatus];
