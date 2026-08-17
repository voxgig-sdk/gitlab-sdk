import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesContainerRegistryRepository, ApiEntitiesContainerRegistryRepositoryLoadMatch, ApiEntitiesContainerRegistryRepositoryListMatch } from '../GitlabTypes';
declare class ApiEntitiesContainerRegistryRepositoryEntity extends GitlabEntityBase<ApiEntitiesContainerRegistryRepository> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesContainerRegistryRepositoryEntity): ApiEntitiesContainerRegistryRepositoryEntity;
    load(this: any, reqmatch?: ApiEntitiesContainerRegistryRepositoryLoadMatch, ctrl?: Control): Promise<ApiEntitiesContainerRegistryRepositoryEntity>;
    list(this: any, reqmatch?: ApiEntitiesContainerRegistryRepositoryListMatch, ctrl?: Control): Promise<ApiEntitiesContainerRegistryRepositoryEntity[]>;
}
export { ApiEntitiesContainerRegistryRepositoryEntity };
