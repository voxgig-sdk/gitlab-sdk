import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiJobBasicWithProject, ApiEntitiesCiJobBasicWithProjectLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesCiJobBasicWithProjectEntity extends GitlabEntityBase<ApiEntitiesCiJobBasicWithProject> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiJobBasicWithProjectEntity): ApiEntitiesCiJobBasicWithProjectEntity;
    load(this: any, reqmatch?: ApiEntitiesCiJobBasicWithProjectLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiJobBasicWithProjectEntity>;
}
export { ApiEntitiesCiJobBasicWithProjectEntity };
