import { ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class EloquaOAuth2Api implements ICredentialType {
    name: string;
    extends: string[];
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
}
