import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesIntegration, ApiEntitiesIntegrationLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesIntegrationEntity extends GitlabEntityBase<ApiEntitiesIntegration> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesIntegrationEntity): ApiEntitiesIntegrationEntity;
    load(this: any, reqmatch?: ApiEntitiesIntegrationLoadMatch, ctrl?: Control): Promise<ApiEntitiesIntegrationEntity>;
}
export { ApiEntitiesIntegrationEntity };
