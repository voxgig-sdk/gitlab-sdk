import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Integration, IntegrationCreateData, IntegrationRemoveMatch } from '../GitlabTypes';
declare class IntegrationEntity extends GitlabEntityBase<Integration> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    create(this: any, reqdata?: IntegrationCreateData, ctrl?: Control): Promise<IntegrationEntity>;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
