import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesContributor, ApiEntitiesContributorLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesContributorEntity extends GitlabEntityBase<ApiEntitiesContributor> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesContributorEntity): ApiEntitiesContributorEntity;
    load(this: any, reqmatch?: ApiEntitiesContributorLoadMatch, ctrl?: Control): Promise<ApiEntitiesContributorEntity>;
}
export { ApiEntitiesContributorEntity };
