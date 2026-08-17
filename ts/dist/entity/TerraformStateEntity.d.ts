import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { TerraformState, TerraformStateLoadMatch, TerraformStateCreateData, TerraformStateRemoveMatch } from '../GitlabTypes';
declare class TerraformStateEntity extends GitlabEntityBase<TerraformState> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TerraformStateEntity): TerraformStateEntity;
    load(this: any, reqmatch?: TerraformStateLoadMatch, ctrl?: Control): Promise<TerraformStateEntity>;
    create(this: any, reqdata?: TerraformStateCreateData, ctrl?: Control): Promise<TerraformStateEntity>;
    remove(this: any, reqmatch?: TerraformStateRemoveMatch, ctrl?: Control): Promise<TerraformStateEntity>;
}
export { TerraformStateEntity };
