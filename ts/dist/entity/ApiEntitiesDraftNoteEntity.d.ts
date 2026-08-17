import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDraftNote, ApiEntitiesDraftNoteLoadMatch, ApiEntitiesDraftNoteListMatch, ApiEntitiesDraftNoteCreateData, ApiEntitiesDraftNoteUpdateData } from '../GitlabTypes';
declare class ApiEntitiesDraftNoteEntity extends GitlabEntityBase<ApiEntitiesDraftNote> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDraftNoteEntity): ApiEntitiesDraftNoteEntity;
    load(this: any, reqmatch?: ApiEntitiesDraftNoteLoadMatch, ctrl?: Control): Promise<ApiEntitiesDraftNoteEntity>;
    list(this: any, reqmatch?: ApiEntitiesDraftNoteListMatch, ctrl?: Control): Promise<ApiEntitiesDraftNoteEntity[]>;
    create(this: any, reqdata?: ApiEntitiesDraftNoteCreateData, ctrl?: Control): Promise<ApiEntitiesDraftNoteEntity>;
    update(this: any, reqdata?: ApiEntitiesDraftNoteUpdateData, ctrl?: Control): Promise<ApiEntitiesDraftNoteEntity>;
}
export { ApiEntitiesDraftNoteEntity };
