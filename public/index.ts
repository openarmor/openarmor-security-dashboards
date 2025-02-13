import './index.scss';

import { MranvPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new MranvPlugin();
}
export { MranvPluginSetup, MranvPluginStart } from './types';
