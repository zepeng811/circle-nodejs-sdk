/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FiatMoneyUsd } from "./fiat-money-usd";

/**
 *
 * @export
 * @interface BasicChargebackHistory
 */
export interface BasicChargebackHistory {
  /**
   * Enumerated type of the chargeback history event. `1st Chargeback` represents the first stage of the dispute procedure initiated by the cardholder’s issuing bank.   `2nd Chargeback` represents the second stage of the dispute procedure initiated by the cardholder’s issuing bank (This stage is MasterCard only).   `Chargeback Reversal` represents when 1st Chargeback or 2nd Chargeback is withdrawn by the issuer.   `Representment` represents the stage when merchants decided to dispute 1st Chargeback or 2nd Chargeback.   `Chargeback Settlement` can imply one of the two: 1) If merchant or marketplace is taking the lost of the chargeback, money will be debit from the wallet during this stage.   2) If merchant of marketplace successfully dispute the chargeback, money will be credit back to the wallet during this stage.
   * @type {string}
   * @memberof BasicChargebackHistory
   */
  type: BasicChargebackHistoryTypeEnum;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof BasicChargebackHistory
   */
  chargebackAmount: FiatMoneyUsd;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof BasicChargebackHistory
   */
  fee?: FiatMoneyUsd;
  /**
   * The reason the chargeback was created.
   * @type {string}
   * @memberof BasicChargebackHistory
   */
  description: string;
  /**
   * Unique system generated identifier for the settlement related to the chargeback history.
   * @type {string}
   * @memberof BasicChargebackHistory
   */
  settlementId?: string | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof BasicChargebackHistory
   */
  createDate?: string;
}

export const BasicChargebackHistoryTypeEnum = {
  _1stChargeback: "1st Chargeback",
  _2ndChargeback: "2nd Chargeback",
  ChargebackReversal: "Chargeback Reversal",
  Representment: "Representment",
  ChargebackSettlement: "Chargeback Settlement"
} as const;

export type BasicChargebackHistoryTypeEnum =
  typeof BasicChargebackHistoryTypeEnum[keyof typeof BasicChargebackHistoryTypeEnum];
