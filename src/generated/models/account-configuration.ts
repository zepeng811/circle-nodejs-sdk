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
import { WalletConfig } from "./wallet-config";

/**
 *
 * @export
 * @interface AccountConfiguration
 */
export interface AccountConfiguration {
  /**
   *
   * @type {WalletConfig}
   * @memberof AccountConfiguration
   */
  payments?: WalletConfig;
}
