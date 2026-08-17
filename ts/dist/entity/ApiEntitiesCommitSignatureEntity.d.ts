import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommitSignature, ApiEntitiesCommitSignatureLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesCommitSignatureEntity extends GitlabEntityBase<ApiEntitiesCommitSignature> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitSignatureEntity): ApiEntitiesCommitSignatureEntity;
    load(this: any, reqmatch?: ApiEntitiesCommitSignatureLoadMatch, ctrl?: Control): Promise<ApiEntitiesCommitSignatureEntity>;
}
export { ApiEntitiesCommitSignatureEntity };
