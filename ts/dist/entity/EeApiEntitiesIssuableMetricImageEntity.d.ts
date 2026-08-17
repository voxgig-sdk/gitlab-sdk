import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesIssuableMetricImage, EeApiEntitiesIssuableMetricImageCreateData, EeApiEntitiesIssuableMetricImageUpdateData, EeApiEntitiesIssuableMetricImageRemoveMatch } from '../GitlabTypes';
declare class EeApiEntitiesIssuableMetricImageEntity extends GitlabEntityBase<EeApiEntitiesIssuableMetricImage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesIssuableMetricImageEntity): EeApiEntitiesIssuableMetricImageEntity;
    create(this: any, reqdata?: EeApiEntitiesIssuableMetricImageCreateData, ctrl?: Control): Promise<EeApiEntitiesIssuableMetricImageEntity>;
    update(this: any, reqdata?: EeApiEntitiesIssuableMetricImageUpdateData, ctrl?: Control): Promise<EeApiEntitiesIssuableMetricImageEntity>;
    remove(this: any, reqmatch?: EeApiEntitiesIssuableMetricImageRemoveMatch, ctrl?: Control): Promise<EeApiEntitiesIssuableMetricImageEntity>;
}
export { EeApiEntitiesIssuableMetricImageEntity };
