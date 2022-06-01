import NavigationDrawer from "../../src/ui-components/navigation";
import Dashboard from "./dashboard";
import ProtectedRoute from "../../src/ui-components/protected-route/protected-route";

const DashboardPage = () => {
    return (
        <ProtectedRoute>
            <NavigationDrawer>
                <Dashboard/>
            </NavigationDrawer>
        </ProtectedRoute>
    );
};

export default DashboardPage;
