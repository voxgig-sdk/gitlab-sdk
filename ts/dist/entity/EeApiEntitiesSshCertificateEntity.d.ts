import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { EeApiEntitiesSshCertificate, EeApiEntitiesSshCertificateListMatch, EeApiEntitiesSshCertificateCreateData } from '../GitlabTypes';
declare class EeApiEntitiesSshCertificateEntity extends GitlabEntityBase<EeApiEntitiesSshCertificate> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EeApiEntitiesSshCertificateEntity): EeApiEntitiesSshCertificateEntity;
    list(this: any, reqmatch?: EeApiEntitiesSshCertificateListMatch, ctrl?: Control): Promise<EeApiEntitiesSshCertificateEntity[]>;
    create(this: any, reqdata?: EeApiEntitiesSshCertificateCreateData, ctrl?: Control): Promise<EeApiEntitiesSshCertificateEntity>;
}
export { EeApiEntitiesSshCertificateEntity };
