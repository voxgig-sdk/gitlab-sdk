import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { TestReport, TestReportListMatch } from '../GitlabTypes';
declare class TestReportEntity extends GitlabEntityBase<TestReport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TestReportEntity): TestReportEntity;
    list(this: any, reqmatch?: TestReportListMatch, ctrl?: Control): Promise<TestReportEntity[]>;
}
export { TestReportEntity };
