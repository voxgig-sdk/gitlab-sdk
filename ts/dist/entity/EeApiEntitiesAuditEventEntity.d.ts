import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesAuditEvent, EeApiEntitiesAuditEventLoadMatch, EeApiEntitiesAuditEventListMatch } from '../GitlabTypes';
declare class EeApiEntitiesAuditEventEntity extends GitlabEntityBase<EeApiEntitiesAuditEvent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesAuditEventEntity): EeApiEntitiesAuditEventEntity;
    load(this: any, reqmatch?: EeApiEntitiesAuditEventLoadMatch, ctrl?: Control): Promise<EeApiEntitiesAuditEventEntity>;
    list(this: any, reqmatch?: EeApiEntitiesAuditEventListMatch, ctrl?: Control): Promise<EeApiEntitiesAuditEventEntity[]>;
}
export { EeApiEntitiesAuditEventEntity };
