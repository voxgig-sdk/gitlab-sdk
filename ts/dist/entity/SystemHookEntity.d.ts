import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { SystemHook, SystemHookRemoveMatch } from '../GitlabTypes';
declare class SystemHookEntity extends GitlabEntityBase<SystemHook> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: SystemHookEntity): SystemHookEntity;
    remove(this: any, reqmatch?: SystemHookRemoveMatch, ctrl?: Control): Promise<SystemHookEntity>;
}
export { SystemHookEntity };
