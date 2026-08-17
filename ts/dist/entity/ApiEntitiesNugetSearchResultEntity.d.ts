import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNugetSearchResult, ApiEntitiesNugetSearchResultListMatch } from '../GitlabTypes';
declare class ApiEntitiesNugetSearchResultEntity extends GitlabEntityBase<ApiEntitiesNugetSearchResult> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNugetSearchResultEntity): ApiEntitiesNugetSearchResultEntity;
    list(this: any, reqmatch?: ApiEntitiesNugetSearchResultListMatch, ctrl?: Control): Promise<ApiEntitiesNugetSearchResultEntity[]>;
}
export { ApiEntitiesNugetSearchResultEntity };
