import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestDiff, ApiEntitiesMergeRequestDiffListMatch } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestDiffEntity extends GitlabEntityBase<ApiEntitiesMergeRequestDiff> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestDiffEntity): ApiEntitiesMergeRequestDiffEntity;
    list(this: any, reqmatch?: ApiEntitiesMergeRequestDiffListMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestDiffEntity[]>;
}
export { ApiEntitiesMergeRequestDiffEntity };
