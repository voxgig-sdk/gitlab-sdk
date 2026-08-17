import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ContainerRegistryEvent, ContainerRegistryEventCreateData } from '../GitlabTypes';
declare class ContainerRegistryEventEntity extends GitlabEntityBase<ContainerRegistryEvent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ContainerRegistryEventEntity): ContainerRegistryEventEntity;
    create(this: any, reqdata?: ContainerRegistryEventCreateData, ctrl?: Control): Promise<ContainerRegistryEventEntity>;
}
export { ContainerRegistryEventEntity };
