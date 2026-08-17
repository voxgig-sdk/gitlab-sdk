import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Hook, HookCreateData, HookUpdateData, HookRemoveMatch } from '../GitlabTypes';
declare class HookEntity extends GitlabEntityBase<Hook> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: HookEntity): HookEntity;
    create(this: any, reqdata?: HookCreateData, ctrl?: Control): Promise<HookEntity>;
    update(this: any, reqdata?: HookUpdateData, ctrl?: Control): Promise<HookEntity>;
    remove(this: any, reqmatch?: HookRemoveMatch, ctrl?: Control): Promise<HookEntity>;
}
export { HookEntity };
