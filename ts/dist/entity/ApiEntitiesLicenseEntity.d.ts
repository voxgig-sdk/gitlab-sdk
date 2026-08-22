import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesLicense, ApiEntitiesLicenseLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesLicenseEntity extends GitlabEntityBase<ApiEntitiesLicense> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesLicenseEntity): ApiEntitiesLicenseEntity;
    load(this: any, reqmatch?: ApiEntitiesLicenseLoadMatch, ctrl?: Control): Promise<ApiEntitiesLicenseEntity>;
}
export { ApiEntitiesLicenseEntity };
