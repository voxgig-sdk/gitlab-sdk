import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommitSequence, ApiEntitiesCommitSequenceLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesCommitSequenceEntity extends GitlabEntityBase<ApiEntitiesCommitSequence> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitSequenceEntity): ApiEntitiesCommitSequenceEntity;
    load(this: any, reqmatch?: ApiEntitiesCommitSequenceLoadMatch, ctrl?: Control): Promise<ApiEntitiesCommitSequenceEntity>;
}
export { ApiEntitiesCommitSequenceEntity };
