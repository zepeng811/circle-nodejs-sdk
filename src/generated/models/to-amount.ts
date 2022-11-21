/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface ToAmount
 */
export interface ToAmount {
  /**
   * Currency code for the amount.
   * @type {string}
   * @memberof ToAmount
   */
  currency: ToAmountCurrencyEnum;
}

export const ToAmountCurrencyEnum = {
  Usd: "USD",
  Eur: "EUR",
  Btc: "BTC",
  Eth: "ETH",
  Mtc: "MTC"
} as const;

export type ToAmountCurrencyEnum =
  typeof ToAmountCurrencyEnum[keyof typeof ToAmountCurrencyEnum];
