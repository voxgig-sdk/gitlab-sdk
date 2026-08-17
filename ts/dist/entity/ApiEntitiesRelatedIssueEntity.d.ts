import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesRelatedIssue, ApiEntitiesRelatedIssueListMatch } from '../GitlabTypes';
declare class ApiEntitiesRelatedIssueEntity extends GitlabEntityBase<ApiEntitiesRelatedIssue> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesRelatedIssueEntity): ApiEntitiesRelatedIssueEntity;
    list(this: any, reqmatch?: ApiEntitiesRelatedIssueListMatch, ctrl?: Control): Promise<ApiEntitiesRelatedIssueEntity[]>;
}
export { ApiEntitiesRelatedIssueEntity };
