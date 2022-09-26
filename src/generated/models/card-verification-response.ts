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
import { CvvResults } from "./cvv-results";

/**
 * Indicates the status of the card for verification purposes.
 * @export
 * @interface CardVerificationResponse
 */
export interface CardVerificationResponse {
  /**
   * Status of the AVS check. Raw AVS response, expressed as an upper-case letter. `not_requested` indicates check was not made. `pending` is pending/processing.
   * @type {string}
   * @memberof CardVerificationResponse
   */
  avs: string;
  /**
   *
   * @type {CvvResults}
   * @memberof CardVerificationResponse
   */
  cvv: CvvResults;
}
