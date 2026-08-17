import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesIssueLink, ApiEntitiesIssueLinkLoadMatch, ApiEntitiesIssueLinkCreateData } from '../GitlabTypes';
declare class ApiEntitiesIssueLinkEntity extends GitlabEntityBase<ApiEntitiesIssueLink> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesIssueLinkEntity): ApiEntitiesIssueLinkEntity;
    load(this: any, reqmatch?: ApiEntitiesIssueLinkLoadMatch, ctrl?: Control): Promise<ApiEntitiesIssueLinkEntity>;
    create(this: any, reqdata?: ApiEntitiesIssueLinkCreateData, ctrl?: Control): Promise<ApiEntitiesIssueLinkEntity>;
}
export { ApiEntitiesIssueLinkEntity };
