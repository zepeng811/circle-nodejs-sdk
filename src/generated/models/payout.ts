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
import { BankDestination } from "./bank-destination";
// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { FinalAdjustments } from "./final-adjustments";
// May contain unused imports in some cases
// @ts-ignore
import { PayoutErrorCode } from "./payout-error-code";
// May contain unused imports in some cases
// @ts-ignore
import { PayoutStatus } from "./payout-status";
// May contain unused imports in some cases
// @ts-ignore
import { RiskEvaluation } from "./risk-evaluation";
// May contain unused imports in some cases
// @ts-ignore
import { UnwithdrawalObject } from "./unwithdrawal-object";

/**
 *
 * @export
 * @interface Payout
 */
export interface Payout {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof Payout
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof Payout
   */
  sourceWalletId?: string;
  /**
   *
   * @type {BankDestination}
   * @memberof Payout
   */
  destination?: BankDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof Payout
   */
  amount?: FiatMoneyUsd;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof Payout
   */
  fees?: FiatMoneyUsd;
  /**
   *
   * @type {PayoutStatus}
   * @memberof Payout
   */
  status?: PayoutStatus;
  /**
   * A payout tracking reference. Will be present once known.
   * @type {any}
   * @memberof Payout
   */
  trackingRef?: any | null;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof Payout
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof Payout
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {FinalAdjustments}
   * @memberof Payout
   */
  adjustments?: FinalAdjustments | null;
  /**
   *
   * @type {UnwithdrawalObject}
   * @memberof Payout
   */
  return?: UnwithdrawalObject | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Payout
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Payout
   */
  updateDate?: string;
}
