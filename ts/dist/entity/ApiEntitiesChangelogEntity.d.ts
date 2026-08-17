import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesChangelog, ApiEntitiesChangelogLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesChangelogEntity extends GitlabEntityBase<ApiEntitiesChangelog> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesChangelogEntity): ApiEntitiesChangelogEntity;
    load(this: any, reqmatch?: ApiEntitiesChangelogLoadMatch, ctrl?: Control): Promise<ApiEntitiesChangelogEntity>;
}
export { ApiEntitiesChangelogEntity };
