import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMember, ApiEntitiesMemberLoadMatch, ApiEntitiesMemberListMatch, ApiEntitiesMemberCreateData, ApiEntitiesMemberUpdateData, ApiEntitiesMemberRemoveMatch } from '../GitlabTypes';
declare class ApiEntitiesMemberEntity extends GitlabEntityBase<ApiEntitiesMember> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMemberEntity): ApiEntitiesMemberEntity;
    load(this: any, reqmatch?: ApiEntitiesMemberLoadMatch, ctrl?: Control): Promise<ApiEntitiesMemberEntity>;
    list(this: any, reqmatch?: ApiEntitiesMemberListMatch, ctrl?: Control): Promise<ApiEntitiesMemberEntity[]>;
    create(this: any, reqdata?: ApiEntitiesMemberCreateData, ctrl?: Control): Promise<ApiEntitiesMemberEntity>;
    update(this: any, reqdata?: ApiEntitiesMemberUpdateData, ctrl?: Control): Promise<ApiEntitiesMemberEntity>;
    remove(this: any, reqmatch?: ApiEntitiesMemberRemoveMatch, ctrl?: Control): Promise<ApiEntitiesMemberEntity>;
}
export { ApiEntitiesMemberEntity };
