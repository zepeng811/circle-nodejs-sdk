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

/**
 *
 * @export
 * @interface MockChargebackCreationRequest
 */
export interface MockChargebackCreationRequest {
  /**
   * The id of the payment to be charged back.  Each payment can only be charged back once.
   * @type {string}
   * @memberof MockChargebackCreationRequest
   */
  paymentId: string;
}
