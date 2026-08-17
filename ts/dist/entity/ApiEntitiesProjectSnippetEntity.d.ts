import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectSnippet, ApiEntitiesProjectSnippetLoadMatch, ApiEntitiesProjectSnippetListMatch, ApiEntitiesProjectSnippetCreateData, ApiEntitiesProjectSnippetUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectSnippetEntity extends GitlabEntityBase<ApiEntitiesProjectSnippet> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectSnippetEntity): ApiEntitiesProjectSnippetEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectSnippetLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectSnippetEntity>;
    list(this: any, reqmatch?: ApiEntitiesProjectSnippetListMatch, ctrl?: Control): Promise<ApiEntitiesProjectSnippetEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectSnippetCreateData, ctrl?: Control): Promise<ApiEntitiesProjectSnippetEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectSnippetUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectSnippetEntity>;
}
export { ApiEntitiesProjectSnippetEntity };
