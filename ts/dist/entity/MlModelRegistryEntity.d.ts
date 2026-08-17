import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { MlModelRegistry, MlModelRegistryLoadMatch, MlModelRegistryUpdateData } from '../GitlabTypes';
declare class MlModelRegistryEntity extends GitlabEntityBase<MlModelRegistry> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MlModelRegistryEntity): MlModelRegistryEntity;
    load(this: any, reqmatch?: MlModelRegistryLoadMatch, ctrl?: Control): Promise<MlModelRegistryEntity>;
    update(this: any, reqdata?: MlModelRegistryUpdateData, ctrl?: Control): Promise<MlModelRegistryEntity>;
}
export { MlModelRegistryEntity };
