import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { HelmPackage, HelmPackageLoadMatch, HelmPackageCreateData } from '../GitlabTypes';
declare class HelmPackageEntity extends GitlabEntityBase<HelmPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: HelmPackageEntity): HelmPackageEntity;
    load(this: any, reqmatch?: HelmPackageLoadMatch, ctrl?: Control): Promise<HelmPackageEntity>;
    create(this: any, reqdata?: HelmPackageCreateData, ctrl?: Control): Promise<HelmPackageEntity>;
}
export { HelmPackageEntity };
