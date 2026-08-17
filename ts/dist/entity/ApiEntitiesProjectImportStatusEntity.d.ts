import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectImportStatus, ApiEntitiesProjectImportStatusListMatch, ApiEntitiesProjectImportStatusCreateData } from '../GitlabTypes';
declare class ApiEntitiesProjectImportStatusEntity extends GitlabEntityBase<ApiEntitiesProjectImportStatus> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectImportStatusEntity): ApiEntitiesProjectImportStatusEntity;
    list(this: any, reqmatch?: ApiEntitiesProjectImportStatusListMatch, ctrl?: Control): Promise<ApiEntitiesProjectImportStatusEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectImportStatusCreateData, ctrl?: Control): Promise<ApiEntitiesProjectImportStatusEntity>;
}
export { ApiEntitiesProjectImportStatusEntity };
