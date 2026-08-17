import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBulkImportsExportStatus, ApiEntitiesBulkImportsExportStatusListMatch } from '../GitlabTypes';
declare class ApiEntitiesBulkImportsExportStatusEntity extends GitlabEntityBase<ApiEntitiesBulkImportsExportStatus> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBulkImportsExportStatusEntity): ApiEntitiesBulkImportsExportStatusEntity;
    list(this: any, reqmatch?: ApiEntitiesBulkImportsExportStatusListMatch, ctrl?: Control): Promise<ApiEntitiesBulkImportsExportStatusEntity[]>;
}
export { ApiEntitiesBulkImportsExportStatusEntity };
