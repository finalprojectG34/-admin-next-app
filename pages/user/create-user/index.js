import NavigationDrawer from "../../../src/ui-components/navigation";
import UserCreate from "./create-user";
import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const UserCreatePage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <UserCreate/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default UserCreatePage;
