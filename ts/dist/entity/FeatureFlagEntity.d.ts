import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { FeatureFlag, FeatureFlagLoadMatch, FeatureFlagCreateData, FeatureFlagRemoveMatch } from '../GitlabTypes';
declare class FeatureFlagEntity extends GitlabEntityBase<FeatureFlag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: FeatureFlagEntity): FeatureFlagEntity;
    load(this: any, reqmatch?: FeatureFlagLoadMatch, ctrl?: Control): Promise<FeatureFlagEntity>;
    create(this: any, reqdata?: FeatureFlagCreateData, ctrl?: Control): Promise<FeatureFlagEntity>;
    remove(this: any, reqmatch?: FeatureFlagRemoveMatch, ctrl?: Control): Promise<FeatureFlagEntity>;
}
export { FeatureFlagEntity };
