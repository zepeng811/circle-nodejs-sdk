/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { BadRequest } from "../models";
// @ts-ignore
import { BusinessGenerateAddressRequest } from "../models";
// @ts-ignore
import { BusinessRecipientAddressCreationRequest } from "../models";
// @ts-ignore
import { CreateBusinessDepositAddressResponse } from "../models";
// @ts-ignore
import { CreateBusinessRecipientAddressResponse } from "../models";
// @ts-ignore
import { GetBusinessDepositAddressResponse } from "../models";
// @ts-ignore
import { ListBusinessRecipientAddressesResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
/**
 * AddressesApi - axios parameter creator
 * @export
 */
export const AddressesApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a deposit address
     * @param {BusinessGenerateAddressRequest} [businessGenerateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessDepositAddress: async (
      businessGenerateAddressRequest?: BusinessGenerateAddressRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/wallets/addresses/deposit`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        businessGenerateAddressRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a recipient address
     * @param {BusinessRecipientAddressCreationRequest} [businessRecipientAddressCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessRecipientAddress: async (
      businessRecipientAddressCreationRequest?: BusinessRecipientAddressCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/wallets/addresses/recipient`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        businessRecipientAddressCreationRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Delete a recipient address
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBusinessRecipientAddress: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteBusinessRecipientAddress", "id", id);
      const localVarPath =
        `/v1/businessAccount/wallets/addresses/recipient/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(id))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary List all deposit addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessDepositAddress: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/wallets/addresses/deposit`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending verification are not included in the response.
     * @summary List all recipient addresses
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessRecipientAddresses: async (
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/wallets/addresses/recipient`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (from !== undefined) {
        localVarQueryParameter["from"] =
          (from as any) instanceof Date ? (from as any).toISOString() : from;
      }

      if (to !== undefined) {
        localVarQueryParameter["to"] =
          (to as any) instanceof Date ? (to as any).toISOString() : to;
      }

      if (pageBefore !== undefined) {
        localVarQueryParameter["pageBefore"] = pageBefore;
      }

      if (pageAfter !== undefined) {
        localVarQueryParameter["pageAfter"] = pageAfter;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * AddressesApi - functional programming interface
 * @export
 */
export const AddressesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    AddressesApiAxiosParamCreator(configuration);
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a deposit address
     * @param {BusinessGenerateAddressRequest} [businessGenerateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBusinessDepositAddress(
      businessGenerateAddressRequest?: BusinessGenerateAddressRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateBusinessDepositAddressResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBusinessDepositAddress(
          businessGenerateAddressRequest,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a recipient address
     * @param {BusinessRecipientAddressCreationRequest} [businessRecipientAddressCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBusinessRecipientAddress(
      businessRecipientAddressCreationRequest?: BusinessRecipientAddressCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateBusinessRecipientAddressResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBusinessRecipientAddress(
          businessRecipientAddressCreationRequest,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Delete a recipient address
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteBusinessRecipientAddress(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteBusinessRecipientAddress(
          id,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary List all deposit addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBusinessDepositAddress(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBusinessDepositAddressResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBusinessDepositAddress(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending verification are not included in the response.
     * @summary List all recipient addresses
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listBusinessRecipientAddresses(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListBusinessRecipientAddressesResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listBusinessRecipientAddresses(
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * AddressesApi - factory interface
 * @export
 */
export const AddressesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AddressesApiFp(configuration);
  return {
    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a deposit address
     * @param {BusinessGenerateAddressRequest} [businessGenerateAddressRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessDepositAddress(
      businessGenerateAddressRequest?: BusinessGenerateAddressRequest,
      options?: any
    ): AxiosPromise<CreateBusinessDepositAddressResponse> {
      return localVarFp
        .createBusinessDepositAddress(businessGenerateAddressRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
     * @summary Create a recipient address
     * @param {BusinessRecipientAddressCreationRequest} [businessRecipientAddressCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessRecipientAddress(
      businessRecipientAddressCreationRequest?: BusinessRecipientAddressCreationRequest,
      options?: any
    ): AxiosPromise<CreateBusinessRecipientAddressResponse> {
      return localVarFp
        .createBusinessRecipientAddress(
          businessRecipientAddressCreationRequest,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Delete a recipient address
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteBusinessRecipientAddress(
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .deleteBusinessRecipientAddress(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all deposit addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessDepositAddress(
      options?: any
    ): AxiosPromise<GetBusinessDepositAddressResponse> {
      return localVarFp
        .getBusinessDepositAddress(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending verification are not included in the response.
     * @summary List all recipient addresses
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessRecipientAddresses(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<ListBusinessRecipientAddressesResponse> {
      return localVarFp
        .listBusinessRecipientAddresses(
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        )
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
export class AddressesApi extends BaseAPI {
  /**
   * Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you\'re requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
   * @summary Create a deposit address
   * @param {BusinessGenerateAddressRequest} [businessGenerateAddressRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AddressesApi
   */
  public createBusinessDepositAddress(
    businessGenerateAddressRequest?: BusinessGenerateAddressRequest,
    options?: AxiosRequestConfig
  ) {
    return AddressesApiFp(this.configuration)
      .createBusinessDepositAddress(businessGenerateAddressRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.
   * @summary Create a recipient address
   * @param {BusinessRecipientAddressCreationRequest} [businessRecipientAddressCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AddressesApi
   */
  public createBusinessRecipientAddress(
    businessRecipientAddressCreationRequest?: BusinessRecipientAddressCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return AddressesApiFp(this.configuration)
      .createBusinessRecipientAddress(
        businessRecipientAddressCreationRequest,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Delete a recipient address
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AddressesApi
   */
  public deleteBusinessRecipientAddress(
    id: string,
    options?: AxiosRequestConfig
  ) {
    return AddressesApiFp(this.configuration)
      .deleteBusinessRecipientAddress(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary List all deposit addresses
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AddressesApi
   */
  public getBusinessDepositAddress(options?: AxiosRequestConfig) {
    return AddressesApiFp(this.configuration)
      .getBusinessDepositAddress(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending verification are not included in the response.
   * @summary List all recipient addresses
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AddressesApi
   */
  public listBusinessRecipientAddresses(
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return AddressesApiFp(this.configuration)
      .listBusinessRecipientAddresses(
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
