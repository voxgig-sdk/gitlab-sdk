import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommit, ApiEntitiesCommitListMatch, ApiEntitiesCommitCreateData } from '../GitlabTypes';
declare class ApiEntitiesCommitEntity extends GitlabEntityBase<ApiEntitiesCommit> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitEntity): ApiEntitiesCommitEntity;
    list(this: any, reqmatch?: ApiEntitiesCommitListMatch, ctrl?: Control): Promise<ApiEntitiesCommitEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCommitCreateData, ctrl?: Control): Promise<ApiEntitiesCommitEntity>;
}
export { ApiEntitiesCommitEntity };
