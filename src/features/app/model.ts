export type AppState = {
  sidebar: { opened: boolean };
  checkBoxChecked: Checkbox[]
};

export type Checkbox = {
  checkBoxId: string;
  checked: boolean;
}
