import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommitStatus, ApiEntitiesCommitStatusListMatch, ApiEntitiesCommitStatusCreateData } from '../GitlabTypes';
declare class ApiEntitiesCommitStatusEntity extends GitlabEntityBase<ApiEntitiesCommitStatus> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitStatusEntity): ApiEntitiesCommitStatusEntity;
    list(this: any, reqmatch?: ApiEntitiesCommitStatusListMatch, ctrl?: Control): Promise<ApiEntitiesCommitStatusEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCommitStatusCreateData, ctrl?: Control): Promise<ApiEntitiesCommitStatusEntity>;
}
export { ApiEntitiesCommitStatusEntity };
