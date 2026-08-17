import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiResourceGroup, ApiEntitiesCiResourceGroupLoadMatch, ApiEntitiesCiResourceGroupListMatch, ApiEntitiesCiResourceGroupUpdateData } from '../GitlabTypes';
declare class ApiEntitiesCiResourceGroupEntity extends GitlabEntityBase<ApiEntitiesCiResourceGroup> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiResourceGroupEntity): ApiEntitiesCiResourceGroupEntity;
    load(this: any, reqmatch?: ApiEntitiesCiResourceGroupLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiResourceGroupEntity>;
    list(this: any, reqmatch?: ApiEntitiesCiResourceGroupListMatch, ctrl?: Control): Promise<ApiEntitiesCiResourceGroupEntity[]>;
    update(this: any, reqdata?: ApiEntitiesCiResourceGroupUpdateData, ctrl?: Control): Promise<ApiEntitiesCiResourceGroupEntity>;
}
export { ApiEntitiesCiResourceGroupEntity };
