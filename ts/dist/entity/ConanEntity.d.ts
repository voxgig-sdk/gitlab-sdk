import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Conan, ConanRemoveMatch } from '../GitlabTypes';
declare class ConanEntity extends GitlabEntityBase<Conan> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ConanEntity): ConanEntity;
    remove(this: any, reqmatch?: ConanRemoveMatch, ctrl?: Control): Promise<ConanEntity>;
}
export { ConanEntity };
