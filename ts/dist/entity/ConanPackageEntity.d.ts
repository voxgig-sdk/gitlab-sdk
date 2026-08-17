import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ConanPackage, ConanPackageLoadMatch, ConanPackageUpdateData, ConanPackageRemoveMatch } from '../GitlabTypes';
declare class ConanPackageEntity extends GitlabEntityBase<ConanPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ConanPackageEntity): ConanPackageEntity;
    load(this: any, reqmatch?: ConanPackageLoadMatch, ctrl?: Control): Promise<ConanPackageEntity>;
    update(this: any, reqdata?: ConanPackageUpdateData, ctrl?: Control): Promise<ConanPackageEntity>;
    remove(this: any, reqmatch?: ConanPackageRemoveMatch, ctrl?: Control): Promise<ConanPackageEntity>;
}
export { ConanPackageEntity };
