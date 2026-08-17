import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesBillableMembership, EeApiEntitiesBillableMembershipLoadMatch } from '../GitlabTypes';
declare class EeApiEntitiesBillableMembershipEntity extends GitlabEntityBase<EeApiEntitiesBillableMembership> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesBillableMembershipEntity): EeApiEntitiesBillableMembershipEntity;
    load(this: any, reqmatch?: EeApiEntitiesBillableMembershipLoadMatch, ctrl?: Control): Promise<EeApiEntitiesBillableMembershipEntity>;
}
export { EeApiEntitiesBillableMembershipEntity };
