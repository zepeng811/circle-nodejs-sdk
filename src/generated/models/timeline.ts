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
 * @interface Timeline
 */
export interface Timeline {
  /**
   *
   * @type {string}
   * @memberof Timeline
   */
  status: TimelineStatusEnum;
  /**
   *
   * @type {string}
   * @memberof Timeline
   */
  context?: TimelineContextEnum;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Timeline
   */
  time: string;
}

export const TimelineStatusEnum = {
  Created: "created",
  Pending: "pending",
  Complete: "complete",
  Expired: "expired",
  Failed: "failed"
} as const;

export type TimelineStatusEnum =
  typeof TimelineStatusEnum[keyof typeof TimelineStatusEnum];
export const TimelineContextEnum = {
  Underpaid: "underpaid",
  Paid: "paid",
  Overpaid: "overpaid"
} as const;

export type TimelineContextEnum =
  typeof TimelineContextEnum[keyof typeof TimelineContextEnum];
