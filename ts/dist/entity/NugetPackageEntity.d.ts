import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { NugetPackage, NugetPackageLoadMatch, NugetPackageListMatch, NugetPackageUpdateData, NugetPackageRemoveMatch } from '../GitlabTypes';
declare class NugetPackageEntity extends GitlabEntityBase<NugetPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: NugetPackageEntity): NugetPackageEntity;
    load(this: any, reqmatch?: NugetPackageLoadMatch, ctrl?: Control): Promise<NugetPackageEntity>;
    list(this: any, reqmatch?: NugetPackageListMatch, ctrl?: Control): Promise<NugetPackageEntity[]>;
    update(this: any, reqdata?: NugetPackageUpdateData, ctrl?: Control): Promise<NugetPackageEntity>;
    remove(this: any, reqmatch?: NugetPackageRemoveMatch, ctrl?: Control): Promise<NugetPackageEntity>;
}
export { NugetPackageEntity };
