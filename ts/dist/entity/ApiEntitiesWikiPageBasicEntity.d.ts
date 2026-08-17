import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesWikiPageBasic, ApiEntitiesWikiPageBasicListMatch } from '../GitlabTypes';
declare class ApiEntitiesWikiPageBasicEntity extends GitlabEntityBase<ApiEntitiesWikiPageBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesWikiPageBasicEntity): ApiEntitiesWikiPageBasicEntity;
    list(this: any, reqmatch?: ApiEntitiesWikiPageBasicListMatch, ctrl?: Control): Promise<ApiEntitiesWikiPageBasicEntity[]>;
}
export { ApiEntitiesWikiPageBasicEntity };
