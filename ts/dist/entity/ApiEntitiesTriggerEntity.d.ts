import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTrigger, ApiEntitiesTriggerLoadMatch, ApiEntitiesTriggerListMatch, ApiEntitiesTriggerCreateData, ApiEntitiesTriggerUpdateData } from '../GitlabTypes';
declare class ApiEntitiesTriggerEntity extends GitlabEntityBase<ApiEntitiesTrigger> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTriggerEntity): ApiEntitiesTriggerEntity;
    load(this: any, reqmatch?: ApiEntitiesTriggerLoadMatch, ctrl?: Control): Promise<ApiEntitiesTriggerEntity>;
    list(this: any, reqmatch?: ApiEntitiesTriggerListMatch, ctrl?: Control): Promise<ApiEntitiesTriggerEntity[]>;
    create(this: any, reqdata?: ApiEntitiesTriggerCreateData, ctrl?: Control): Promise<ApiEntitiesTriggerEntity>;
    update(this: any, reqdata?: ApiEntitiesTriggerUpdateData, ctrl?: Control): Promise<ApiEntitiesTriggerEntity>;
}
export { ApiEntitiesTriggerEntity };
