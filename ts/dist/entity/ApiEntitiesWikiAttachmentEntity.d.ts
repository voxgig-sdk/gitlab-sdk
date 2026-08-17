import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesWikiAttachment, ApiEntitiesWikiAttachmentCreateData } from '../GitlabTypes';
declare class ApiEntitiesWikiAttachmentEntity extends GitlabEntityBase<ApiEntitiesWikiAttachment> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesWikiAttachmentEntity): ApiEntitiesWikiAttachmentEntity;
    create(this: any, reqdata?: ApiEntitiesWikiAttachmentCreateData, ctrl?: Control): Promise<ApiEntitiesWikiAttachmentEntity>;
}
export { ApiEntitiesWikiAttachmentEntity };
