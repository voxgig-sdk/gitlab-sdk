import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectJobTokenScope, ApiEntitiesProjectJobTokenScopeLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesProjectJobTokenScopeEntity extends GitlabEntityBase<ApiEntitiesProjectJobTokenScope> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectJobTokenScopeEntity): ApiEntitiesProjectJobTokenScopeEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectJobTokenScopeLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectJobTokenScopeEntity>;
}
export { ApiEntitiesProjectJobTokenScopeEntity };
