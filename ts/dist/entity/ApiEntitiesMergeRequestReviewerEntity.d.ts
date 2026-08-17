import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestReviewer, ApiEntitiesMergeRequestReviewerLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestReviewerEntity extends GitlabEntityBase<ApiEntitiesMergeRequestReviewer> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestReviewerEntity): ApiEntitiesMergeRequestReviewerEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeRequestReviewerLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestReviewerEntity>;
}
export { ApiEntitiesMergeRequestReviewerEntity };
