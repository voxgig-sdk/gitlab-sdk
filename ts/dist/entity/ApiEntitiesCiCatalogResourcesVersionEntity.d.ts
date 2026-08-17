import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiCatalogResourcesVersion, ApiEntitiesCiCatalogResourcesVersionCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiCatalogResourcesVersionEntity extends GitlabEntityBase<ApiEntitiesCiCatalogResourcesVersion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiCatalogResourcesVersionEntity): ApiEntitiesCiCatalogResourcesVersionEntity;
    create(this: any, reqdata?: ApiEntitiesCiCatalogResourcesVersionCreateData, ctrl?: Control): Promise<ApiEntitiesCiCatalogResourcesVersionEntity>;
}
export { ApiEntitiesCiCatalogResourcesVersionEntity };
