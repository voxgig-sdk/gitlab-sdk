import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBulkImport, ApiEntitiesBulkImportLoadMatch, ApiEntitiesBulkImportListMatch, ApiEntitiesBulkImportCreateData } from '../GitlabTypes';
declare class ApiEntitiesBulkImportEntity extends GitlabEntityBase<ApiEntitiesBulkImport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBulkImportEntity): ApiEntitiesBulkImportEntity;
    load(this: any, reqmatch?: ApiEntitiesBulkImportLoadMatch, ctrl?: Control): Promise<ApiEntitiesBulkImportEntity>;
    list(this: any, reqmatch?: ApiEntitiesBulkImportListMatch, ctrl?: Control): Promise<ApiEntitiesBulkImportEntity[]>;
    create(this: any, reqdata?: ApiEntitiesBulkImportCreateData, ctrl?: Control): Promise<ApiEntitiesBulkImportEntity>;
}
export { ApiEntitiesBulkImportEntity };
