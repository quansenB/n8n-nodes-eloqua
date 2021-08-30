import { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class Eloqua implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
}