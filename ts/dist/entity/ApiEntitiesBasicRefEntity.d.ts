import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBasicRef, ApiEntitiesBasicRefListMatch } from '../GitlabTypes';
declare class ApiEntitiesBasicRefEntity extends GitlabEntityBase<ApiEntitiesBasicRef> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBasicRefEntity): ApiEntitiesBasicRefEntity;
    list(this: any, reqmatch?: ApiEntitiesBasicRefListMatch, ctrl?: Control): Promise<ApiEntitiesBasicRefEntity[]>;
}
export { ApiEntitiesBasicRefEntity };
