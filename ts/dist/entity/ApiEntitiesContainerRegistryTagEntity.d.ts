import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesContainerRegistryTag, ApiEntitiesContainerRegistryTagListMatch } from '../GitlabTypes';
declare class ApiEntitiesContainerRegistryTagEntity extends GitlabEntityBase<ApiEntitiesContainerRegistryTag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesContainerRegistryTagEntity): ApiEntitiesContainerRegistryTagEntity;
    list(this: any, reqmatch?: ApiEntitiesContainerRegistryTagListMatch, ctrl?: Control): Promise<ApiEntitiesContainerRegistryTagEntity[]>;
}
export { ApiEntitiesContainerRegistryTagEntity };
