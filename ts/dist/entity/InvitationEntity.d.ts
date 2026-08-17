import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Invitation, InvitationRemoveMatch } from '../GitlabTypes';
declare class InvitationEntity extends GitlabEntityBase<Invitation> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: InvitationEntity): InvitationEntity;
    remove(this: any, reqmatch?: InvitationRemoveMatch, ctrl?: Control): Promise<InvitationEntity>;
}
export { InvitationEntity };
