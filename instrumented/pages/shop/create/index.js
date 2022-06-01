import CompanyCreate from "./create-shop";
import NavigationDrawer from "../../../src/ui-components/navigation";
// import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CompanyCreatePage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <CompanyCreate/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default CompanyCreatePage;
