import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTag, ApiEntitiesTagLoadMatch, ApiEntitiesTagListMatch, ApiEntitiesTagCreateData } from '../GitlabTypes';
declare class ApiEntitiesTagEntity extends GitlabEntityBase<ApiEntitiesTag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTagEntity): ApiEntitiesTagEntity;
    load(this: any, reqmatch?: ApiEntitiesTagLoadMatch, ctrl?: Control): Promise<ApiEntitiesTagEntity>;
    list(this: any, reqmatch?: ApiEntitiesTagListMatch, ctrl?: Control): Promise<ApiEntitiesTagEntity[]>;
    create(this: any, reqdata?: ApiEntitiesTagCreateData, ctrl?: Control): Promise<ApiEntitiesTagEntity>;
}
export { ApiEntitiesTagEntity };
