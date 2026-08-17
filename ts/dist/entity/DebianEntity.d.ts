import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Debian, DebianUpdateData } from '../GitlabTypes';
declare class DebianEntity extends GitlabEntityBase<Debian> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DebianEntity): DebianEntity;
    update(this: any, reqdata?: DebianUpdateData, ctrl?: Control): Promise<DebianEntity>;
}
export { DebianEntity };
