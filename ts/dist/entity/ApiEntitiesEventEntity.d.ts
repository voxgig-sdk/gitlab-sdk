import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesEvent, ApiEntitiesEventLoadMatch, ApiEntitiesEventListMatch } from '../GitlabTypes';
declare class ApiEntitiesEventEntity extends GitlabEntityBase<ApiEntitiesEvent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesEventEntity): ApiEntitiesEventEntity;
    load(this: any, reqmatch?: ApiEntitiesEventLoadMatch, ctrl?: Control): Promise<ApiEntitiesEventEntity>;
    list(this: any, reqmatch?: ApiEntitiesEventListMatch, ctrl?: Control): Promise<ApiEntitiesEventEntity[]>;
}
export { ApiEntitiesEventEntity };
