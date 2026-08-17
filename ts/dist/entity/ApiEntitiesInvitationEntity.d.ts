import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesInvitation, ApiEntitiesInvitationListMatch, ApiEntitiesInvitationCreateData, ApiEntitiesInvitationUpdateData } from '../GitlabTypes';
declare class ApiEntitiesInvitationEntity extends GitlabEntityBase<ApiEntitiesInvitation> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesInvitationEntity): ApiEntitiesInvitationEntity;
    list(this: any, reqmatch?: ApiEntitiesInvitationListMatch, ctrl?: Control): Promise<ApiEntitiesInvitationEntity[]>;
    create(this: any, reqdata?: ApiEntitiesInvitationCreateData, ctrl?: Control): Promise<ApiEntitiesInvitationEntity>;
    update(this: any, reqdata?: ApiEntitiesInvitationUpdateData, ctrl?: Control): Promise<ApiEntitiesInvitationEntity>;
}
export { ApiEntitiesInvitationEntity };
