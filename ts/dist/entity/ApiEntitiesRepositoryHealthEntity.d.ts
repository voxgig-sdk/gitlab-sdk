import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesRepositoryHealth, ApiEntitiesRepositoryHealthLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesRepositoryHealthEntity extends GitlabEntityBase<ApiEntitiesRepositoryHealth> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesRepositoryHealthEntity): ApiEntitiesRepositoryHealthEntity;
    load(this: any, reqmatch?: ApiEntitiesRepositoryHealthLoadMatch, ctrl?: Control): Promise<ApiEntitiesRepositoryHealthEntity>;
}
export { ApiEntitiesRepositoryHealthEntity };
