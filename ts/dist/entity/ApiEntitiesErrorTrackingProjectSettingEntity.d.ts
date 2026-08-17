import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesErrorTrackingProjectSetting, ApiEntitiesErrorTrackingProjectSettingLoadMatch, ApiEntitiesErrorTrackingProjectSettingUpdateData } from '../GitlabTypes';
declare class ApiEntitiesErrorTrackingProjectSettingEntity extends GitlabEntityBase<ApiEntitiesErrorTrackingProjectSetting> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesErrorTrackingProjectSettingEntity): ApiEntitiesErrorTrackingProjectSettingEntity;
    load(this: any, reqmatch?: ApiEntitiesErrorTrackingProjectSettingLoadMatch, ctrl?: Control): Promise<ApiEntitiesErrorTrackingProjectSettingEntity>;
    update(this: any, reqdata?: ApiEntitiesErrorTrackingProjectSettingUpdateData, ctrl?: Control): Promise<ApiEntitiesErrorTrackingProjectSettingEntity>;
}
export { ApiEntitiesErrorTrackingProjectSettingEntity };
