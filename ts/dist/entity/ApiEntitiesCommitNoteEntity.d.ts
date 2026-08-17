import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCommitNote, ApiEntitiesCommitNoteListMatch, ApiEntitiesCommitNoteCreateData } from '../GitlabTypes';
declare class ApiEntitiesCommitNoteEntity extends GitlabEntityBase<ApiEntitiesCommitNote> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCommitNoteEntity): ApiEntitiesCommitNoteEntity;
    list(this: any, reqmatch?: ApiEntitiesCommitNoteListMatch, ctrl?: Control): Promise<ApiEntitiesCommitNoteEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCommitNoteCreateData, ctrl?: Control): Promise<ApiEntitiesCommitNoteEntity>;
}
export { ApiEntitiesCommitNoteEntity };
