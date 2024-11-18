// import { getState } from "react-redux";
import { store } from "./redux/store";

const permissions = store.getState().auth?.user?.role_permissions;
console.log(permissions);

export function hasPermission(permission) {
  permissions?.has((el) => {
    return el.name === permission;
  });
}
