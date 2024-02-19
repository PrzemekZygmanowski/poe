import { BigDialog } from "../../../components/BigDialog";
import { IBigDialog } from "../../../components/interfaces";
import { MenuTabs } from "./MenuTabs";

export const AppMenuDialog = ({
  isModalActive,
  handleCloseDialog,
}: IBigDialog) => {
  return (
    <BigDialog
      isModalActive={isModalActive}
      handleCloseDialog={handleCloseDialog}
      title='Settings'>
      <MenuTabs />
    </BigDialog>
  );
};
