import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesRemoteMirror, ApiEntitiesRemoteMirrorLoadMatch, ApiEntitiesRemoteMirrorListMatch, ApiEntitiesRemoteMirrorCreateData, ApiEntitiesRemoteMirrorUpdateData } from '../GitlabTypes';
declare class ApiEntitiesRemoteMirrorEntity extends GitlabEntityBase<ApiEntitiesRemoteMirror> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesRemoteMirrorEntity): ApiEntitiesRemoteMirrorEntity;
    load(this: any, reqmatch?: ApiEntitiesRemoteMirrorLoadMatch, ctrl?: Control): Promise<ApiEntitiesRemoteMirrorEntity>;
    list(this: any, reqmatch?: ApiEntitiesRemoteMirrorListMatch, ctrl?: Control): Promise<ApiEntitiesRemoteMirrorEntity[]>;
    create(this: any, reqdata?: ApiEntitiesRemoteMirrorCreateData, ctrl?: Control): Promise<ApiEntitiesRemoteMirrorEntity>;
    update(this: any, reqdata?: ApiEntitiesRemoteMirrorUpdateData, ctrl?: Control): Promise<ApiEntitiesRemoteMirrorEntity>;
}
export { ApiEntitiesRemoteMirrorEntity };
