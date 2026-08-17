import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMarkdown, ApiEntitiesMarkdownCreateData } from '../GitlabTypes';
declare class ApiEntitiesMarkdownEntity extends GitlabEntityBase<ApiEntitiesMarkdown> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMarkdownEntity): ApiEntitiesMarkdownEntity;
    create(this: any, reqdata?: ApiEntitiesMarkdownCreateData, ctrl?: Control): Promise<ApiEntitiesMarkdownEntity>;
}
export { ApiEntitiesMarkdownEntity };
