import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMrNote, ApiEntitiesMrNoteLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesMrNoteEntity extends GitlabEntityBase<ApiEntitiesMrNote> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMrNoteEntity): ApiEntitiesMrNoteEntity;
    load(this: any, reqmatch?: ApiEntitiesMrNoteLoadMatch, ctrl?: Control): Promise<ApiEntitiesMrNoteEntity>;
}
export { ApiEntitiesMrNoteEntity };
