import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Feature, FeatureRemoveMatch } from '../GitlabTypes';
declare class FeatureEntity extends GitlabEntityBase<Feature> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: FeatureEntity): FeatureEntity;
    remove(this: any, reqmatch?: FeatureRemoveMatch, ctrl?: Control): Promise<FeatureEntity>;
}
export { FeatureEntity };
