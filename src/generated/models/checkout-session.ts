/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CheckoutSessionMoney } from "./checkout-session-money";
// May contain unused imports in some cases
// @ts-ignore
import { CheckoutSessionStatus } from "./checkout-session-status";

/**
 *
 * @export
 * @interface CheckoutSession
 */
export interface CheckoutSession {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof CheckoutSession
   */
  id: string;
  /**
   * The type of this response
   * @type {string}
   * @memberof CheckoutSession
   */
  type: CheckoutSessionTypeEnum;
  /**
   * The URL returned to you through client-side callback when the payment is completed.
   * @type {string}
   * @memberof CheckoutSession
   */
  successUrl?: string;
  /**
   * The access token for the SDK to access checkout session resources
   * @type {string}
   * @memberof CheckoutSession
   */
  clientToken: string;
  /**
   *
   * @type {CheckoutSessionStatus}
   * @memberof CheckoutSession
   */
  status: CheckoutSessionStatus;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof CheckoutSession
   */
  expiresOn: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof CheckoutSession
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof CheckoutSession
   */
  updateDate: string;
  /**
   *
   * @type {CheckoutSessionMoney}
   * @memberof CheckoutSession
   */
  amount: CheckoutSessionMoney;
  /**
   *
   * @type {CheckoutSessionMoney}
   * @memberof CheckoutSession
   */
  amountPaid: CheckoutSessionMoney;
  /**
   * IDs of all the associated payments.
   * @type {Array<string>}
   * @memberof CheckoutSession
   */
  paymentIds: Array<string>;
  /**
   * IDs of all the associated payment intents.
   * @type {Array<string>}
   * @memberof CheckoutSession
   */
  paymentIntentIds: Array<string>;
}

export const CheckoutSessionTypeEnum = {
  CheckoutSession: "checkout_session"
} as const;

export type CheckoutSessionTypeEnum =
  typeof CheckoutSessionTypeEnum[keyof typeof CheckoutSessionTypeEnum];
