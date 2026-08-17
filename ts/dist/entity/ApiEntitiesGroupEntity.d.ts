import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesGroup, ApiEntitiesGroupLoadMatch, ApiEntitiesGroupListMatch, ApiEntitiesGroupCreateData, ApiEntitiesGroupUpdateData } from '../GitlabTypes';
declare class ApiEntitiesGroupEntity extends GitlabEntityBase<ApiEntitiesGroup> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesGroupEntity): ApiEntitiesGroupEntity;
    load(this: any, reqmatch?: ApiEntitiesGroupLoadMatch, ctrl?: Control): Promise<ApiEntitiesGroupEntity>;
    list(this: any, reqmatch?: ApiEntitiesGroupListMatch, ctrl?: Control): Promise<ApiEntitiesGroupEntity[]>;
    create(this: any, reqdata?: ApiEntitiesGroupCreateData, ctrl?: Control): Promise<ApiEntitiesGroupEntity>;
    update(this: any, reqdata?: ApiEntitiesGroupUpdateData, ctrl?: Control): Promise<ApiEntitiesGroupEntity>;
}
export { ApiEntitiesGroupEntity };
