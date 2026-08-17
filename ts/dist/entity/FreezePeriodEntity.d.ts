import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { FreezePeriod, FreezePeriodRemoveMatch } from '../GitlabTypes';
declare class FreezePeriodEntity extends GitlabEntityBase<FreezePeriod> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: FreezePeriodEntity): FreezePeriodEntity;
    remove(this: any, reqmatch?: FreezePeriodRemoveMatch, ctrl?: Control): Promise<FreezePeriodEntity>;
}
export { FreezePeriodEntity };
