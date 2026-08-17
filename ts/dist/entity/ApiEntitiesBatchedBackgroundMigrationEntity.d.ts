import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBatchedBackgroundMigration, ApiEntitiesBatchedBackgroundMigrationLoadMatch, ApiEntitiesBatchedBackgroundMigrationListMatch, ApiEntitiesBatchedBackgroundMigrationUpdateData } from '../GitlabTypes';
declare class ApiEntitiesBatchedBackgroundMigrationEntity extends GitlabEntityBase<ApiEntitiesBatchedBackgroundMigration> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBatchedBackgroundMigrationEntity): ApiEntitiesBatchedBackgroundMigrationEntity;
    load(this: any, reqmatch?: ApiEntitiesBatchedBackgroundMigrationLoadMatch, ctrl?: Control): Promise<ApiEntitiesBatchedBackgroundMigrationEntity>;
    list(this: any, reqmatch?: ApiEntitiesBatchedBackgroundMigrationListMatch, ctrl?: Control): Promise<ApiEntitiesBatchedBackgroundMigrationEntity[]>;
    update(this: any, reqdata?: ApiEntitiesBatchedBackgroundMigrationUpdateData, ctrl?: Control): Promise<ApiEntitiesBatchedBackgroundMigrationEntity>;
}
export { ApiEntitiesBatchedBackgroundMigrationEntity };
