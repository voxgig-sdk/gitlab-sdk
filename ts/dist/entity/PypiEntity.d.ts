import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Pypi, PypiCreateData } from '../GitlabTypes';
declare class PypiEntity extends GitlabEntityBase<Pypi> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: PypiEntity): PypiEntity;
    create(this: any, reqdata?: PypiCreateData, ctrl?: Control): Promise<PypiEntity>;
}
export { PypiEntity };
