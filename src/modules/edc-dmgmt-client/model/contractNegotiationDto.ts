/**
 * EDC REST API
 * All files merged by open api merger
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ContractNegotiationDto { 
    contractAgreementId?: string;
    counterPartyAddress?: string;
    errorDetail?: string;
    id?: string;
    protocol?: string;
    state?: string;
    type?: ContractNegotiationDto.TypeEnum;
}
export namespace ContractNegotiationDto {
    export type TypeEnum = 'CONSUMER' | 'PROVIDER';
    export const TypeEnum = {
        Consumer: 'CONSUMER' as TypeEnum,
        Provider: 'PROVIDER' as TypeEnum
    };
}


