import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesSnippet, ApiEntitiesSnippetListMatch } from '../GitlabTypes';
declare class ApiEntitiesSnippetEntity extends GitlabEntityBase<ApiEntitiesSnippet> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesSnippetEntity): ApiEntitiesSnippetEntity;
    list(this: any, reqmatch?: ApiEntitiesSnippetListMatch, ctrl?: Control): Promise<ApiEntitiesSnippetEntity[]>;
}
export { ApiEntitiesSnippetEntity };
