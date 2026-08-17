import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { CiVariable, CiVariableRemoveMatch } from '../GitlabTypes';
declare class CiVariableEntity extends GitlabEntityBase<CiVariable> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: CiVariableEntity): CiVariableEntity;
    remove(this: any, reqmatch?: CiVariableRemoveMatch, ctrl?: Control): Promise<CiVariableEntity>;
}
export { CiVariableEntity };
