import NavigationDrawer from "../../../src/ui-components/navigation";
import CompanySearch from "./shop-search";
// import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CompanySearchPage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <CompanySearch/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default CompanySearchPage;
