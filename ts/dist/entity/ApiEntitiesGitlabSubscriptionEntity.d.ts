import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesGitlabSubscription, ApiEntitiesGitlabSubscriptionLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesGitlabSubscriptionEntity extends GitlabEntityBase<ApiEntitiesGitlabSubscription> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesGitlabSubscriptionEntity): ApiEntitiesGitlabSubscriptionEntity;
    load(this: any, reqmatch?: ApiEntitiesGitlabSubscriptionLoadMatch, ctrl?: Control): Promise<ApiEntitiesGitlabSubscriptionEntity>;
}
export { ApiEntitiesGitlabSubscriptionEntity };
