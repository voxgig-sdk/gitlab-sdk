import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { CargoPackage, CargoPackageLoadMatch } from '../GitlabTypes';
declare class CargoPackageEntity extends GitlabEntityBase<CargoPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: CargoPackageEntity): CargoPackageEntity;
    load(this: any, reqmatch?: CargoPackageLoadMatch, ctrl?: Control): Promise<CargoPackageEntity>;
}
export { CargoPackageEntity };
