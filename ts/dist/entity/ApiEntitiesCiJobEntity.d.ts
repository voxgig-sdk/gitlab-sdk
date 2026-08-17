import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiJob, ApiEntitiesCiJobLoadMatch, ApiEntitiesCiJobListMatch, ApiEntitiesCiJobCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiJobEntity extends GitlabEntityBase<ApiEntitiesCiJob> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiJobEntity): ApiEntitiesCiJobEntity;
    load(this: any, reqmatch?: ApiEntitiesCiJobLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiJobEntity>;
    list(this: any, reqmatch?: ApiEntitiesCiJobListMatch, ctrl?: Control): Promise<ApiEntitiesCiJobEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCiJobCreateData, ctrl?: Control): Promise<ApiEntitiesCiJobEntity>;
}
export { ApiEntitiesCiJobEntity };
