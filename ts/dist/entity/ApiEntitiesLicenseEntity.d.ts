import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesLicense, ApiEntitiesLicenseListMatch } from '../GitlabTypes';
declare class ApiEntitiesLicenseEntity extends GitlabEntityBase<ApiEntitiesLicense> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesLicenseEntity): ApiEntitiesLicenseEntity;
    list(this: any, reqmatch?: ApiEntitiesLicenseListMatch, ctrl?: Control): Promise<ApiEntitiesLicenseEntity[]>;
}
export { ApiEntitiesLicenseEntity };
