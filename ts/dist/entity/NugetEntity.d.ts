import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Nuget, NugetUpdateData } from '../GitlabTypes';
declare class NugetEntity extends GitlabEntityBase<Nuget> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: NugetEntity): NugetEntity;
    update(this: any, reqdata?: NugetUpdateData, ctrl?: Control): Promise<NugetEntity>;
}
export { NugetEntity };
