import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ErrorTrackingClientKey, ErrorTrackingClientKeyRemoveMatch } from '../GitlabTypes';
declare class ErrorTrackingClientKeyEntity extends GitlabEntityBase<ErrorTrackingClientKey> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ErrorTrackingClientKeyEntity): ErrorTrackingClientKeyEntity;
    remove(this: any, reqmatch?: ErrorTrackingClientKeyRemoveMatch, ctrl?: Control): Promise<ErrorTrackingClientKeyEntity>;
}
export { ErrorTrackingClientKeyEntity };
