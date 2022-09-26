/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentInfoCancel } from "./payment-info-cancel";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentInfoPaymentAndRefund } from "./payment-info-payment-and-refund";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentStatus } from "./payment-status";
// May contain unused imports in some cases
// @ts-ignore
import { RequiredAction } from "./required-action";
// May contain unused imports in some cases
// @ts-ignore
import { SourceResponse } from "./source-response";

/**
 * Status information of the related payment. This property is only present on refund or cancel items.
 * @export
 * @interface FiatPayment
 */
export interface FiatPayment {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof FiatPayment
   */
  id: string;
  /**
   * Type of the payment object.
   * @type {string}
   * @memberof FiatPayment
   */
  type: FiatPaymentTypeEnum;
  /**
   * Unique system generated identifier for the merchant.
   * @type {string}
   * @memberof FiatPayment
   */
  merchantId: string;
  /**
   * Unique system generated identifier for the wallet of the merchant.
   * @type {string}
   * @memberof FiatPayment
   */
  merchantWalletId?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayment
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {SourceResponse}
   * @memberof FiatPayment
   */
  source: SourceResponse;
  /**
   * Enumerated description of the payment.
   * @type {string}
   * @memberof FiatPayment
   */
  description?: FiatPaymentDescriptionEnum;
  /**
   *
   * @type {PaymentStatus}
   * @memberof FiatPayment
   */
  status: PaymentStatus;
  /**
   * Determines if a payment has successfully been captured. This property is only present for payments that did not use auto capture.
   * @type {boolean}
   * @memberof FiatPayment
   */
  captured?: boolean;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayment
   */
  captureAmount?: FiatMoneyUsd;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatPayment
   */
  captureDate?: string;
  /**
   *
   * @type {RequiredAction}
   * @memberof FiatPayment
   */
  requiredAction?: RequiredAction;
  /**
   *
   * @type {PaymentInfoCancel}
   * @memberof FiatPayment
   */
  cancel?: PaymentInfoCancel | null;
  /**
   *
   * @type {Array<PaymentInfoPaymentAndRefund>}
   * @memberof FiatPayment
   */
  refunds?: Array<PaymentInfoPaymentAndRefund>;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FiatPayment
   */
  fees?: FiatMoneyUsd;
  /**
   * The channel identifier that can be set for the payment. When not provided, the default channel is used.
   * @type {string}
   * @memberof FiatPayment
   */
  channel?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatPayment
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof FiatPayment
   */
  updateDate?: string;
}

export const FiatPaymentTypeEnum = {
  Payment: "payment"
} as const;

export type FiatPaymentTypeEnum =
  typeof FiatPaymentTypeEnum[keyof typeof FiatPaymentTypeEnum];
export const FiatPaymentDescriptionEnum = {
  Payment: "Payment"
} as const;

export type FiatPaymentDescriptionEnum =
  typeof FiatPaymentDescriptionEnum[keyof typeof FiatPaymentDescriptionEnum];
