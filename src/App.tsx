import { FC, useContext } from "react";
import { AuthContext } from "./context/auth/AuthProvider";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";

const App: FC = () => {
  const auth = useContext(AuthContext)
  console.log("auth", auth)

  return (
    auth ? <PrivateRoutes /> : <PublicRoutes />
  );
}

export default App;
