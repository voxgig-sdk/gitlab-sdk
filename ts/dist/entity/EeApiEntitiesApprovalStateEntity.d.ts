import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesApprovalState, EeApiEntitiesApprovalStateCreateData } from '../GitlabTypes';
declare class EeApiEntitiesApprovalStateEntity extends GitlabEntityBase<EeApiEntitiesApprovalState> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesApprovalStateEntity): EeApiEntitiesApprovalStateEntity;
    create(this: any, reqdata?: EeApiEntitiesApprovalStateCreateData, ctrl?: Control): Promise<EeApiEntitiesApprovalStateEntity>;
}
export { EeApiEntitiesApprovalStateEntity };
