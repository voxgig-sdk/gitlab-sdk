import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTagSignature, ApiEntitiesTagSignatureLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesTagSignatureEntity extends GitlabEntityBase<ApiEntitiesTagSignature> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTagSignatureEntity): ApiEntitiesTagSignatureEntity;
    load(this: any, reqmatch?: ApiEntitiesTagSignatureLoadMatch, ctrl?: Control): Promise<ApiEntitiesTagSignatureEntity>;
}
export { ApiEntitiesTagSignatureEntity };
