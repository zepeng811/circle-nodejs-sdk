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
import { CvvResults } from "./cvv-results";
// May contain unused imports in some cases
// @ts-ignore
import { Eci } from "./eci";
// May contain unused imports in some cases
// @ts-ignore
import { ThreeDSResult } from "./three-dsresult";

/**
 * Indicates the status of the payment verification. This property will be present once the payment is confirmed.
 * @export
 * @interface PaymentVerificationResponse
 */
export interface PaymentVerificationResponse {
  /**
   * Status of the AVS check. Raw AVS response, expressed as an upper-case letter. `not_requested` indicates check was not made. `pending` is pending/processing.
   * @type {string}
   * @memberof PaymentVerificationResponse
   */
  avs: string;
  /**
   *
   * @type {CvvResults}
   * @memberof PaymentVerificationResponse
   */
  cvv: CvvResults;
  /**
   *
   * @type {ThreeDSResult}
   * @memberof PaymentVerificationResponse
   */
  threeDSecure?: ThreeDSResult;
  /**
   *
   * @type {Eci}
   * @memberof PaymentVerificationResponse
   */
  eci?: Eci;
}
