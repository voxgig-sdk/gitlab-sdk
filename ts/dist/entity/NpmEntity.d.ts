import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Npm, NpmUpdateData } from '../GitlabTypes';
declare class NpmEntity extends GitlabEntityBase<Npm> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: NpmEntity): NpmEntity;
    update(this: any, reqdata?: NpmUpdateData, ctrl?: Control): Promise<NpmEntity>;
}
export { NpmEntity };
