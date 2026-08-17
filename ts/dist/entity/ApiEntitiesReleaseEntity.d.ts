import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesRelease, ApiEntitiesReleaseLoadMatch, ApiEntitiesReleaseListMatch, ApiEntitiesReleaseCreateData, ApiEntitiesReleaseUpdateData } from '../GitlabTypes';
declare class ApiEntitiesReleaseEntity extends GitlabEntityBase<ApiEntitiesRelease> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesReleaseEntity): ApiEntitiesReleaseEntity;
    load(this: any, reqmatch?: ApiEntitiesReleaseLoadMatch, ctrl?: Control): Promise<ApiEntitiesReleaseEntity>;
    list(this: any, reqmatch?: ApiEntitiesReleaseListMatch, ctrl?: Control): Promise<ApiEntitiesReleaseEntity[]>;
    create(this: any, reqdata?: ApiEntitiesReleaseCreateData, ctrl?: Control): Promise<ApiEntitiesReleaseEntity>;
    update(this: any, reqdata?: ApiEntitiesReleaseUpdateData, ctrl?: Control): Promise<ApiEntitiesReleaseEntity>;
}
export { ApiEntitiesReleaseEntity };
