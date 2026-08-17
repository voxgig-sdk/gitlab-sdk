import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBulkImportsEntityFailure, ApiEntitiesBulkImportsEntityFailureLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesBulkImportsEntityFailureEntity extends GitlabEntityBase<ApiEntitiesBulkImportsEntityFailure> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBulkImportsEntityFailureEntity): ApiEntitiesBulkImportsEntityFailureEntity;
    load(this: any, reqmatch?: ApiEntitiesBulkImportsEntityFailureLoadMatch, ctrl?: Control): Promise<ApiEntitiesBulkImportsEntityFailureEntity>;
}
export { ApiEntitiesBulkImportsEntityFailureEntity };
