import { testQueries } from '../src/tests/testQueries';

testQueries('snowflake', {
  includeHLLSuite: true,
  extendedEnv: 'export-bucket-gcs'
});