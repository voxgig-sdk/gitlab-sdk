import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesRelationImportTracker, ApiEntitiesRelationImportTrackerCreateData } from '../GitlabTypes';
declare class ApiEntitiesRelationImportTrackerEntity extends GitlabEntityBase<ApiEntitiesRelationImportTracker> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesRelationImportTrackerEntity): ApiEntitiesRelationImportTrackerEntity;
    create(this: any, reqdata?: ApiEntitiesRelationImportTrackerCreateData, ctrl?: Control): Promise<ApiEntitiesRelationImportTrackerEntity>;
}
export { ApiEntitiesRelationImportTrackerEntity };
