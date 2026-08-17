import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestChange, ApiEntitiesMergeRequestChangeLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestChangeEntity extends GitlabEntityBase<ApiEntitiesMergeRequestChange> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestChangeEntity): ApiEntitiesMergeRequestChangeEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeRequestChangeLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestChangeEntity>;
}
export { ApiEntitiesMergeRequestChangeEntity };
