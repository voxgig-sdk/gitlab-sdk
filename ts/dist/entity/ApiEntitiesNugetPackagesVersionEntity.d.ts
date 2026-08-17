import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNugetPackagesVersion, ApiEntitiesNugetPackagesVersionListMatch } from '../GitlabTypes';
declare class ApiEntitiesNugetPackagesVersionEntity extends GitlabEntityBase<ApiEntitiesNugetPackagesVersion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNugetPackagesVersionEntity): ApiEntitiesNugetPackagesVersionEntity;
    list(this: any, reqmatch?: ApiEntitiesNugetPackagesVersionListMatch, ctrl?: Control): Promise<ApiEntitiesNugetPackagesVersionEntity[]>;
}
export { ApiEntitiesNugetPackagesVersionEntity };
