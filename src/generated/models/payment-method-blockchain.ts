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
import { Chain } from "./chain";

/**
 *
 * @export
 * @interface PaymentMethodBlockchain
 */
export interface PaymentMethodBlockchain {
  /**
   *
   * @type {string}
   * @memberof PaymentMethodBlockchain
   */
  type: PaymentMethodBlockchainTypeEnum;
  /**
   *
   * @type {Chain}
   * @memberof PaymentMethodBlockchain
   */
  chain: Chain;
  /**
   *
   * @type {string}
   * @memberof PaymentMethodBlockchain
   */
  address?: string;
}

export const PaymentMethodBlockchainTypeEnum = {
  Blockchain: "blockchain"
} as const;

export type PaymentMethodBlockchainTypeEnum =
  typeof PaymentMethodBlockchainTypeEnum[keyof typeof PaymentMethodBlockchainTypeEnum];
