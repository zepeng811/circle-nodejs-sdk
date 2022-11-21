/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BillingDetails } from "./billing-details";
import { ExternalFiatAccountStatus } from "./external-fiat-account-status";
import { RiskEvaluation } from "./risk-evaluation";

/**
 *
 * @export
 * @interface Sepa
 */
export interface Sepa {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof Sepa
   */
  id: string;
  /**
   *
   * @type {ExternalFiatAccountStatus}
   * @memberof Sepa
   */
  status: ExternalFiatAccountStatus;
  /**
   * Bank name plus last four digits of the IBAN.
   * @type {string}
   * @memberof Sepa
   */
  description: string;
  /**
   * Tracking reference that needs to be set in the payment details or description.
   * @type {string}
   * @memberof Sepa
   */
  trackingRef: string;
  /**
   * A UUID that uniquely identifies the account number. If the same account is used more than once, each card object will have a different id, but the fingerprint will stay the same.
   * @type {string}
   * @memberof Sepa
   */
  fingerprint: string;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof Sepa
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {BillingDetails}
   * @memberof Sepa
   */
  billingDetails: BillingDetails;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Sepa
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Sepa
   */
  updateDate: string;
}
