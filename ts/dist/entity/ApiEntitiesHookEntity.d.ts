import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesHook, ApiEntitiesHookLoadMatch, ApiEntitiesHookListMatch, ApiEntitiesHookCreateData, ApiEntitiesHookUpdateData } from '../GitlabTypes';
declare class ApiEntitiesHookEntity extends GitlabEntityBase<ApiEntitiesHook> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesHookEntity): ApiEntitiesHookEntity;
    load(this: any, reqmatch?: ApiEntitiesHookLoadMatch, ctrl?: Control): Promise<ApiEntitiesHookEntity>;
    list(this: any, reqmatch?: ApiEntitiesHookListMatch, ctrl?: Control): Promise<ApiEntitiesHookEntity[]>;
    create(this: any, reqdata?: ApiEntitiesHookCreateData, ctrl?: Control): Promise<ApiEntitiesHookEntity>;
    update(this: any, reqdata?: ApiEntitiesHookUpdateData, ctrl?: Control): Promise<ApiEntitiesHookEntity>;
}
export { ApiEntitiesHookEntity };
