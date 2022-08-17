/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface IdentityAddress
 */
export interface IdentityAddress {
    /**
     * Line one of the street address.
     * @type {string}
     * @memberof IdentityAddress
     */
    'line1': string;
    /**
     * Line two of the street address.
     * @type {string}
     * @memberof IdentityAddress
     */
    'line2'?: string;
    /**
     * City portion of the address.
     * @type {string}
     * @memberof IdentityAddress
     */
    'city': string;
    /**
     * State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.
     * @type {string}
     * @memberof IdentityAddress
     */
    'district': string;
    /**
     * Postal / ZIP code of the address.
     * @type {string}
     * @memberof IdentityAddress
     */
    'postalCode': string;
    /**
     * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
     * @type {string}
     * @memberof IdentityAddress
     */
    'country': string;
}

