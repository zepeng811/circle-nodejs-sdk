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
 * The address of the bank. BankName, City and Country fields are required.
 * @export
 * @interface BankAddressNonIban
 */
export interface BankAddressNonIban {
    /**
     * Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN\'
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'bankName': string;
    /**
     * City portion of the address. This property is required for bank accounts outside of the US.
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'city': string;
    /**
     * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'country': string;
    /**
     * Line one of the street address.
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'line1'?: string;
    /**
     * Line two of the street address.
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'line2'?: string;
    /**
     * State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.
     * @type {string}
     * @memberof BankAddressNonIban
     */
    'district'?: string;
}

