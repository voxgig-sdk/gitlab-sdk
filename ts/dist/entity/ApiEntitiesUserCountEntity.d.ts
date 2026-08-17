import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesUserCount, ApiEntitiesUserCountLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesUserCountEntity extends GitlabEntityBase<ApiEntitiesUserCount> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesUserCountEntity): ApiEntitiesUserCountEntity;
    load(this: any, reqmatch?: ApiEntitiesUserCountLoadMatch, ctrl?: Control): Promise<ApiEntitiesUserCountEntity>;
}
export { ApiEntitiesUserCountEntity };
