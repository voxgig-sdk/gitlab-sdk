import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesSystemBroadcastMessage, ApiEntitiesSystemBroadcastMessageLoadMatch, ApiEntitiesSystemBroadcastMessageCreateData, ApiEntitiesSystemBroadcastMessageUpdateData, ApiEntitiesSystemBroadcastMessageRemoveMatch } from '../GitlabTypes';
declare class ApiEntitiesSystemBroadcastMessageEntity extends GitlabEntityBase<ApiEntitiesSystemBroadcastMessage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesSystemBroadcastMessageEntity): ApiEntitiesSystemBroadcastMessageEntity;
    load(this: any, reqmatch?: ApiEntitiesSystemBroadcastMessageLoadMatch, ctrl?: Control): Promise<ApiEntitiesSystemBroadcastMessageEntity>;
    create(this: any, reqdata?: ApiEntitiesSystemBroadcastMessageCreateData, ctrl?: Control): Promise<ApiEntitiesSystemBroadcastMessageEntity>;
    update(this: any, reqdata?: ApiEntitiesSystemBroadcastMessageUpdateData, ctrl?: Control): Promise<ApiEntitiesSystemBroadcastMessageEntity>;
    remove(this: any, reqmatch?: ApiEntitiesSystemBroadcastMessageRemoveMatch, ctrl?: Control): Promise<ApiEntitiesSystemBroadcastMessageEntity>;
}
export { ApiEntitiesSystemBroadcastMessageEntity };
