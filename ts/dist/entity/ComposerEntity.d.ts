import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Composer, ComposerCreateData } from '../GitlabTypes';
declare class ComposerEntity extends GitlabEntityBase<Composer> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ComposerEntity): ComposerEntity;
    create(this: any, reqdata?: ComposerCreateData, ctrl?: Control): Promise<ComposerEntity>;
}
export { ComposerEntity };
