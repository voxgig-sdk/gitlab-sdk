import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectExportStatus, ApiEntitiesProjectExportStatusLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesProjectExportStatusEntity extends GitlabEntityBase<ApiEntitiesProjectExportStatus> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectExportStatusEntity): ApiEntitiesProjectExportStatusEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectExportStatusLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectExportStatusEntity>;
}
export { ApiEntitiesProjectExportStatusEntity };
