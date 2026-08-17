import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesMergeRequestApprovalState, EeApiEntitiesMergeRequestApprovalStateListMatch } from '../GitlabTypes';
declare class EeApiEntitiesMergeRequestApprovalStateEntity extends GitlabEntityBase<EeApiEntitiesMergeRequestApprovalState> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesMergeRequestApprovalStateEntity): EeApiEntitiesMergeRequestApprovalStateEntity;
    list(this: any, reqmatch?: EeApiEntitiesMergeRequestApprovalStateListMatch, ctrl?: Control): Promise<EeApiEntitiesMergeRequestApprovalStateEntity[]>;
}
export { EeApiEntitiesMergeRequestApprovalStateEntity };
