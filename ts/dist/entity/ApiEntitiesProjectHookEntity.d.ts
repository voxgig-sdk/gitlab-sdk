import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectHook, ApiEntitiesProjectHookLoadMatch, ApiEntitiesProjectHookListMatch, ApiEntitiesProjectHookCreateData, ApiEntitiesProjectHookUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectHookEntity extends GitlabEntityBase<ApiEntitiesProjectHook> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectHookEntity): ApiEntitiesProjectHookEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectHookLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectHookEntity>;
    list(this: any, reqmatch?: ApiEntitiesProjectHookListMatch, ctrl?: Control): Promise<ApiEntitiesProjectHookEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectHookCreateData, ctrl?: Control): Promise<ApiEntitiesProjectHookEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectHookUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectHookEntity>;
}
export { ApiEntitiesProjectHookEntity };
