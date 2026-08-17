import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Rpm, RpmCreateData } from '../GitlabTypes';
declare class RpmEntity extends GitlabEntityBase<Rpm> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RpmEntity): RpmEntity;
    create(this: any, reqdata?: RpmCreateData, ctrl?: Control): Promise<RpmEntity>;
}
export { RpmEntity };
