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
import { PayoutDestinationType } from "./payout-destination-type";

/**
 * The destination bank account.
 * @export
 * @interface BankDestination
 */
export interface BankDestination {
  /**
   *
   * @type {PayoutDestinationType}
   * @memberof BankDestination
   */
  type: PayoutDestinationType;
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof BankDestination
   */
  id: string;
  /**
   * Bank name plus last four digits of the bank account number or IBAN.
   * @type {string}
   * @memberof BankDestination
   */
  name?: string;
}
