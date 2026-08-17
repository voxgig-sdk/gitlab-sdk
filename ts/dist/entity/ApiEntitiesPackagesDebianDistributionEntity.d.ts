import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesDebianDistribution, ApiEntitiesPackagesDebianDistributionLoadMatch, ApiEntitiesPackagesDebianDistributionListMatch, ApiEntitiesPackagesDebianDistributionCreateData, ApiEntitiesPackagesDebianDistributionUpdateData } from '../GitlabTypes';
declare class ApiEntitiesPackagesDebianDistributionEntity extends GitlabEntityBase<ApiEntitiesPackagesDebianDistribution> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesDebianDistributionEntity): ApiEntitiesPackagesDebianDistributionEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesDebianDistributionLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesDebianDistributionEntity>;
    list(this: any, reqmatch?: ApiEntitiesPackagesDebianDistributionListMatch, ctrl?: Control): Promise<ApiEntitiesPackagesDebianDistributionEntity[]>;
    create(this: any, reqdata?: ApiEntitiesPackagesDebianDistributionCreateData, ctrl?: Control): Promise<ApiEntitiesPackagesDebianDistributionEntity>;
    update(this: any, reqdata?: ApiEntitiesPackagesDebianDistributionUpdateData, ctrl?: Control): Promise<ApiEntitiesPackagesDebianDistributionEntity>;
}
export { ApiEntitiesPackagesDebianDistributionEntity };
