import BaseRouteCli from "@root/base/BaseRouteCli";
import { MasterDataInterface } from "@root/bootstrap/StartMasterData";
import MainDevSyncRemote from '@root/app/devsync_remote/Main';

declare var masterData: MasterDataInterface;

const Cli = BaseRouteCli.extend<BaseRouteInterface>({
  baseRoute: '',
  onready() {
    let self = this;
    masterData.setOnListener('command.devsync_remote.index', MainDevSyncRemote.binding().index);
  }
});

export default Cli;
