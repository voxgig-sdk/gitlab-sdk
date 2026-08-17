import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPagesDomainBasic, ApiEntitiesPagesDomainBasicLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPagesDomainBasicEntity extends GitlabEntityBase<ApiEntitiesPagesDomainBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPagesDomainBasicEntity): ApiEntitiesPagesDomainBasicEntity;
    load(this: any, reqmatch?: ApiEntitiesPagesDomainBasicLoadMatch, ctrl?: Control): Promise<ApiEntitiesPagesDomainBasicEntity>;
}
export { ApiEntitiesPagesDomainBasicEntity };
