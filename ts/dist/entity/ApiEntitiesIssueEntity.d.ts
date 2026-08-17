import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesIssue, ApiEntitiesIssueLoadMatch, ApiEntitiesIssueListMatch, ApiEntitiesIssueCreateData, ApiEntitiesIssueUpdateData } from '../GitlabTypes';
declare class ApiEntitiesIssueEntity extends GitlabEntityBase<ApiEntitiesIssue> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesIssueEntity): ApiEntitiesIssueEntity;
    load(this: any, reqmatch?: ApiEntitiesIssueLoadMatch, ctrl?: Control): Promise<ApiEntitiesIssueEntity>;
    list(this: any, reqmatch?: ApiEntitiesIssueListMatch, ctrl?: Control): Promise<ApiEntitiesIssueEntity[]>;
    create(this: any, reqdata?: ApiEntitiesIssueCreateData, ctrl?: Control): Promise<ApiEntitiesIssueEntity>;
    update(this: any, reqdata?: ApiEntitiesIssueUpdateData, ctrl?: Control): Promise<ApiEntitiesIssueEntity>;
}
export { ApiEntitiesIssueEntity };
