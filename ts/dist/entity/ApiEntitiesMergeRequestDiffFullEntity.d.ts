import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestDiffFull, ApiEntitiesMergeRequestDiffFullLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestDiffFullEntity extends GitlabEntityBase<ApiEntitiesMergeRequestDiffFull> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestDiffFullEntity): ApiEntitiesMergeRequestDiffFullEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeRequestDiffFullLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestDiffFullEntity>;
}
export { ApiEntitiesMergeRequestDiffFullEntity };
