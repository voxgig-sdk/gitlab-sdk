import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ContainerRegistry, ContainerRegistryRemoveMatch } from '../GitlabTypes';
declare class ContainerRegistryEntity extends GitlabEntityBase<ContainerRegistry> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ContainerRegistryEntity): ContainerRegistryEntity;
    remove(this: any, reqmatch?: ContainerRegistryRemoveMatch, ctrl?: Control): Promise<ContainerRegistryEntity>;
}
export { ContainerRegistryEntity };
