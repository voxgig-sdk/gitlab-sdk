import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesUserAgentDetail, ApiEntitiesUserAgentDetailLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesUserAgentDetailEntity extends GitlabEntityBase<ApiEntitiesUserAgentDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesUserAgentDetailEntity): ApiEntitiesUserAgentDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesUserAgentDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesUserAgentDetailEntity>;
}
export { ApiEntitiesUserAgentDetailEntity };
