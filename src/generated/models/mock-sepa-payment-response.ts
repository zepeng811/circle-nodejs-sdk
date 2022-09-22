/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";

/**
 *
 * @export
 * @interface MockSepaPaymentResponse
 */
export interface MockSepaPaymentResponse {
  /**
   * SEPA tracking reference that needs to be set in the payment details or description.
   * @type {string}
   * @memberof MockSepaPaymentResponse
   */
  trackingRef?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof MockSepaPaymentResponse
   */
  amount?: FiatMoneyUsd;
  /**
   * Enumerated status of the SEPA payment. Status `pending` indicates that the SEPA payment is in process; `processed` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof MockSepaPaymentResponse
   */
  status?: MockSepaPaymentResponseStatusEnum;
}

export const MockSepaPaymentResponseStatusEnum = {
  Pending: "pending",
  Processed: "processed",
  Failed: "failed"
} as const;

export type MockSepaPaymentResponseStatusEnum =
  typeof MockSepaPaymentResponseStatusEnum[keyof typeof MockSepaPaymentResponseStatusEnum];
