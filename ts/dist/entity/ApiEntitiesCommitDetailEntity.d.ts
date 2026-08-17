import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommitDetail, ApiEntitiesCommitDetailLoadMatch, ApiEntitiesCommitDetailCreateData, ApiEntitiesCommitDetailUpdateData } from '../GitlabTypes';
declare class ApiEntitiesCommitDetailEntity extends GitlabEntityBase<ApiEntitiesCommitDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitDetailEntity): ApiEntitiesCommitDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesCommitDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesCommitDetailEntity>;
    create(this: any, reqdata?: ApiEntitiesCommitDetailCreateData, ctrl?: Control): Promise<ApiEntitiesCommitDetailEntity>;
    update(this: any, reqdata?: ApiEntitiesCommitDetailUpdateData, ctrl?: Control): Promise<ApiEntitiesCommitDetailEntity>;
}
export { ApiEntitiesCommitDetailEntity };
