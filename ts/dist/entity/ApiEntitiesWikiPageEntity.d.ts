import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesWikiPage, ApiEntitiesWikiPageLoadMatch, ApiEntitiesWikiPageCreateData, ApiEntitiesWikiPageUpdateData } from '../GitlabTypes';
declare class ApiEntitiesWikiPageEntity extends GitlabEntityBase<ApiEntitiesWikiPage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesWikiPageEntity): ApiEntitiesWikiPageEntity;
    load(this: any, reqmatch?: ApiEntitiesWikiPageLoadMatch, ctrl?: Control): Promise<ApiEntitiesWikiPageEntity>;
    create(this: any, reqdata?: ApiEntitiesWikiPageCreateData, ctrl?: Control): Promise<ApiEntitiesWikiPageEntity>;
    update(this: any, reqdata?: ApiEntitiesWikiPageUpdateData, ctrl?: Control): Promise<ApiEntitiesWikiPageEntity>;
}
export { ApiEntitiesWikiPageEntity };
