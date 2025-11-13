import { ConfigurationManager, FullConfig } from './configurationManager';

export interface ISidebarController {
  saveConfiguration(config: FullConfig): Promise<void>;
  refreshSidebarConfig(): void;
  refreshSidebarOpenFiles(): void;
  configManager: ConfigurationManager;
}
