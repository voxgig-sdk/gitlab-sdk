import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { GenericPackage, GenericPackageLoadMatch, GenericPackageUpdateData } from '../GitlabTypes';
declare class GenericPackageEntity extends GitlabEntityBase<GenericPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GenericPackageEntity): GenericPackageEntity;
    load(this: any, reqmatch?: GenericPackageLoadMatch, ctrl?: Control): Promise<GenericPackageEntity>;
    update(this: any, reqdata?: GenericPackageUpdateData, ctrl?: Control): Promise<GenericPackageEntity>;
}
export { GenericPackageEntity };
