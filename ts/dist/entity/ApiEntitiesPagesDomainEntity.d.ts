import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPagesDomain, ApiEntitiesPagesDomainLoadMatch, ApiEntitiesPagesDomainListMatch, ApiEntitiesPagesDomainCreateData, ApiEntitiesPagesDomainUpdateData } from '../GitlabTypes';
declare class ApiEntitiesPagesDomainEntity extends GitlabEntityBase<ApiEntitiesPagesDomain> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPagesDomainEntity): ApiEntitiesPagesDomainEntity;
    load(this: any, reqmatch?: ApiEntitiesPagesDomainLoadMatch, ctrl?: Control): Promise<ApiEntitiesPagesDomainEntity>;
    list(this: any, reqmatch?: ApiEntitiesPagesDomainListMatch, ctrl?: Control): Promise<ApiEntitiesPagesDomainEntity[]>;
    create(this: any, reqdata?: ApiEntitiesPagesDomainCreateData, ctrl?: Control): Promise<ApiEntitiesPagesDomainEntity>;
    update(this: any, reqdata?: ApiEntitiesPagesDomainUpdateData, ctrl?: Control): Promise<ApiEntitiesPagesDomainEntity>;
}
export { ApiEntitiesPagesDomainEntity };
