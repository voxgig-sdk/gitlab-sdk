import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesContainerRegistryTagDetail, ApiEntitiesContainerRegistryTagDetailLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesContainerRegistryTagDetailEntity extends GitlabEntityBase<ApiEntitiesContainerRegistryTagDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesContainerRegistryTagDetailEntity): ApiEntitiesContainerRegistryTagDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesContainerRegistryTagDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesContainerRegistryTagDetailEntity>;
}
export { ApiEntitiesContainerRegistryTagDetailEntity };
