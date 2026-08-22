import { useSelector } from "react-redux";

const RoleGuard = ({ allowedRoles, children }) => {
  const user = useSelector((state) => state.auth.user);

  // No logged-in user
  if (!user) {
    return null;
  }

  // User doesn't have permission
  if (!allowedRoles.includes(user.role)) {
    return null;
  }

  //User has permission
  return children;
};
export default RoleGuard;
