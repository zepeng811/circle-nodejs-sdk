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
 * @interface WalletCreationRequest
 */
export interface WalletCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof WalletCreationRequest
   */
  idempotencyKey: string;
  /**
   * A human-friendly, non-unique identifier for a wallet.
   * @type {string}
   * @memberof WalletCreationRequest
   */
  description?: string;
}
