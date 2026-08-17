import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNugetServiceIndex, ApiEntitiesNugetServiceIndexListMatch } from '../GitlabTypes';
declare class ApiEntitiesNugetServiceIndexEntity extends GitlabEntityBase<ApiEntitiesNugetServiceIndex> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNugetServiceIndexEntity): ApiEntitiesNugetServiceIndexEntity;
    list(this: any, reqmatch?: ApiEntitiesNugetServiceIndexListMatch, ctrl?: Control): Promise<ApiEntitiesNugetServiceIndexEntity[]>;
}
export { ApiEntitiesNugetServiceIndexEntity };
