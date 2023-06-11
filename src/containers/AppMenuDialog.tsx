import { Avatar } from "../components/Avatar";
import { BigDialog } from "../components/BigDialog";
import { bigDialog } from "../components/interfaces";

export const AppMenuDialog = ({
  isModalActive,
  handleCloseDialog,
}: bigDialog) => {
  return (
    <BigDialog
      isModalActive={isModalActive}
      handleCloseDialog={handleCloseDialog}
      title='Settings'>
      <Avatar />
    </BigDialog>
  );
};
