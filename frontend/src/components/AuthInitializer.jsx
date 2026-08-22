import { logout, setCredentials, setLoading } from "@/features/auth/authSlice";
import { getCurrentUser } from "@/features/auth/services/authService";
import { getToken, removeToken } from "@/features/auth/utils/authStorage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      const token = getToken();

      if (!token) {
        dispatch(setLoading(false));
        return;
      }

      try {
        const result = await getCurrentUser();

        dispatch(
          setCredentials({
            user: result.user,
          }),
        );
      } catch (error) {
        console.log(error);
        removeToken();
        dispatch(logout());
      } finally {
        dispatch(setLoading(false));
      }
    };

    restoreSession();
  }, [dispatch]);
  return children;
};
export default AuthInitializer;
