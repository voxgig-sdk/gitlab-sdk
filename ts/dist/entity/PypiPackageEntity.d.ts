import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { PypiPackage, PypiPackageLoadMatch, PypiPackageCreateData } from '../GitlabTypes';
declare class PypiPackageEntity extends GitlabEntityBase<PypiPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: PypiPackageEntity): PypiPackageEntity;
    load(this: any, reqmatch?: PypiPackageLoadMatch, ctrl?: Control): Promise<PypiPackageEntity>;
    create(this: any, reqdata?: PypiPackageCreateData, ctrl?: Control): Promise<PypiPackageEntity>;
}
export { PypiPackageEntity };
