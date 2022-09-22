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
import { CancelRefundReversalStatus } from "./cancel-refund-reversal-status";
// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentInfoPaymentAndRefund } from "./payment-info-payment-and-refund";
// May contain unused imports in some cases
// @ts-ignore
import { SourceResponse } from "./source-response";

/**
 * Status information of the related cancel. This property is only present on canceled payment or refund items.
 * @export
 * @interface FiatCancel
 */
export interface FiatCancel {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof FiatCancel
   */
  id: string;
  /**
   * Type of the payment object.
   * @type {string}
   * @memberof FiatCancel
   */
  type: FiatCancelTypeEnum;
  /**
   * Unique system generated identifier for the merchant.
   * @type {string}
   * @memberof FiatCancel
   */
  merchantId: string;
  /**
   * Unique system generated identifier for the wallet of the merchant.
   * @type {string}
   * @memberof FiatCancel
   */
  merchantWalletId?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatCancel
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {SourceResponse}
   * @memberof FiatCancel
   */
  source: SourceResponse;
  /**
   * Enumerated description of the payment.
   * @type {string}
   * @memberof FiatCancel
   */
  description?: FiatCancelDescriptionEnum;
  /**
   *
   * @type {CancelRefundReversalStatus}
   * @memberof FiatCancel
   */
  status: CancelRefundReversalStatus;
  /**
   *
   * @type {PaymentInfoPaymentAndRefund}
   * @memberof FiatCancel
   */
  originalPayment?: PaymentInfoPaymentAndRefund;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatCancel
   */
  fees?: FiatMoneyUsd;
  /**
   * The channel identifier that can be set for the payment. When not provided, the default channel is used.
   * @type {string}
   * @memberof FiatCancel
   */
  channel?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatCancel
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatCancel
   */
  updateDate?: string;
}

export const FiatCancelTypeEnum = {
  Cancel: "cancel"
} as const;

export type FiatCancelTypeEnum =
  typeof FiatCancelTypeEnum[keyof typeof FiatCancelTypeEnum];
export const FiatCancelDescriptionEnum = {
  Payment: "Payment"
} as const;

export type FiatCancelDescriptionEnum =
  typeof FiatCancelDescriptionEnum[keyof typeof FiatCancelDescriptionEnum];
