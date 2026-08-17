import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { TerraformRegistry, TerraformRegistryLoadMatch, TerraformRegistryUpdateData } from '../GitlabTypes';
declare class TerraformRegistryEntity extends GitlabEntityBase<TerraformRegistry> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TerraformRegistryEntity): TerraformRegistryEntity;
    load(this: any, reqmatch?: TerraformRegistryLoadMatch, ctrl?: Control): Promise<TerraformRegistryEntity>;
    update(this: any, reqdata?: TerraformRegistryUpdateData, ctrl?: Control): Promise<TerraformRegistryEntity>;
}
export { TerraformRegistryEntity };
