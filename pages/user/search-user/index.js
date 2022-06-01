import UserSearch from "./search-user";
import NavigationDrawer from "../../../src/ui-components/navigation";
import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const UserSearchPage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <UserSearch/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default UserSearchPage;
