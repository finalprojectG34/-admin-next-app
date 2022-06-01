import NavigationDrawer from "../../../src/ui-components/navigation";
import CompanyList from "./shop-list";
// import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CompanyCreatePage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <CompanyList/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default CompanyCreatePage;
