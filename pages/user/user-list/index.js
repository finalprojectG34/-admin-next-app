import NavigationDrawer from "../../../src/ui-components/navigation";
import UserList from "./user-list";
import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const UserSearchPage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <UserList/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default UserSearchPage;
