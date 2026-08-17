import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectRepositoryStorage, ApiEntitiesProjectRepositoryStorageLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesProjectRepositoryStorageEntity extends GitlabEntityBase<ApiEntitiesProjectRepositoryStorage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectRepositoryStorageEntity): ApiEntitiesProjectRepositoryStorageEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectRepositoryStorageLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectRepositoryStorageEntity>;
}
export { ApiEntitiesProjectRepositoryStorageEntity };
