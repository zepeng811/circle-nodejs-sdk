/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CardVerificationResponse } from "./card-verification-response";
import { ExternalFiatAccountStatus } from "./external-fiat-account-status";
import { RiskEvaluation } from "./risk-evaluation";
import { SimpleBillingDetails } from "./simple-billing-details";

/**
 *
 * @export
 * @interface SimpleCard
 */
export interface SimpleCard {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof SimpleCard
   */
  id: string;
  /**
   *
   * @type {ExternalFiatAccountStatus}
   * @memberof SimpleCard
   */
  status: ExternalFiatAccountStatus;
  /**
   *
   * @type {SimpleBillingDetails}
   * @memberof SimpleCard
   */
  billingDetails: SimpleBillingDetails;
  /**
   * Two digit number representing the card\'s expiration month.
   * @type {number}
   * @memberof SimpleCard
   */
  expMonth: number;
  /**
   * Four digit number representing the card\'s expiration year.
   * @type {number}
   * @memberof SimpleCard
   */
  expYear: number;
  /**
   * The network of the card.
   * @type {string}
   * @memberof SimpleCard
   */
  network: SimpleCardNetworkEnum;
  /**
   * The bank identification number (BIN), the first 6 digits of the card.
   * @type {string}
   * @memberof SimpleCard
   */
  bin?: string;
  /**
   * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
   * @type {string}
   * @memberof SimpleCard
   */
  issuerCountry?: string;
  /**
   * The funding type of the card. Possible values are `credit`, `debit`, `prepaid`, and `unknown`.
   * @type {string}
   * @memberof SimpleCard
   */
  fundingType?: SimpleCardFundingTypeEnum;
  /**
   * A UUID that uniquely identifies the account number. If the same account is used more than once, each card object will have a different id, but the fingerprint will stay the same.
   * @type {string}
   * @memberof SimpleCard
   */
  fingerprint: string;
  /**
   *
   * @type {CardVerificationResponse}
   * @memberof SimpleCard
   */
  verification: CardVerificationResponse;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof SimpleCard
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof SimpleCard
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof SimpleCard
   */
  updateDate: string;
}

export const SimpleCardNetworkEnum = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Unknown: "UNKNOWN"
} as const;

export type SimpleCardNetworkEnum =
  typeof SimpleCardNetworkEnum[keyof typeof SimpleCardNetworkEnum];
export const SimpleCardFundingTypeEnum = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
  Unknown: "unknown"
} as const;

export type SimpleCardFundingTypeEnum =
  typeof SimpleCardFundingTypeEnum[keyof typeof SimpleCardFundingTypeEnum];
