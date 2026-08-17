import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectWithAccess, ApiEntitiesProjectWithAccessLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesProjectWithAccessEntity extends GitlabEntityBase<ApiEntitiesProjectWithAccess> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectWithAccessEntity): ApiEntitiesProjectWithAccessEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectWithAccessLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectWithAccessEntity>;
}
export { ApiEntitiesProjectWithAccessEntity };
