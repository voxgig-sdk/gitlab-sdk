import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesGeoNodeStatus, EeApiEntitiesGeoNodeStatusCreateData } from '../GitlabTypes';
declare class EeApiEntitiesGeoNodeStatusEntity extends GitlabEntityBase<EeApiEntitiesGeoNodeStatus> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesGeoNodeStatusEntity): EeApiEntitiesGeoNodeStatusEntity;
    create(this: any, reqdata?: EeApiEntitiesGeoNodeStatusCreateData, ctrl?: Control): Promise<EeApiEntitiesGeoNodeStatusEntity>;
}
export { EeApiEntitiesGeoNodeStatusEntity };
