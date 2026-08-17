import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProtectedTag, ApiEntitiesProtectedTagLoadMatch, ApiEntitiesProtectedTagListMatch, ApiEntitiesProtectedTagCreateData } from '../GitlabTypes';
declare class ApiEntitiesProtectedTagEntity extends GitlabEntityBase<ApiEntitiesProtectedTag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProtectedTagEntity): ApiEntitiesProtectedTagEntity;
    load(this: any, reqmatch?: ApiEntitiesProtectedTagLoadMatch, ctrl?: Control): Promise<ApiEntitiesProtectedTagEntity>;
    list(this: any, reqmatch?: ApiEntitiesProtectedTagListMatch, ctrl?: Control): Promise<ApiEntitiesProtectedTagEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProtectedTagCreateData, ctrl?: Control): Promise<ApiEntitiesProtectedTagEntity>;
}
export { ApiEntitiesProtectedTagEntity };
