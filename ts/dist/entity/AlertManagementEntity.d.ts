import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { AlertManagement, AlertManagementCreateData, AlertManagementRemoveMatch } from '../GitlabTypes';
declare class AlertManagementEntity extends GitlabEntityBase<AlertManagement> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: AlertManagementEntity): AlertManagementEntity;
    create(this: any, reqdata?: AlertManagementCreateData, ctrl?: Control): Promise<AlertManagementEntity>;
    remove(this: any, reqmatch?: AlertManagementRemoveMatch, ctrl?: Control): Promise<AlertManagementEntity>;
}
export { AlertManagementEntity };
