import NavigationDrawer from "../../../src/ui-components/navigation";
import CategoryCreate from "./create-category";
import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CategoryCreatePage = () => {
    return (
        <ProtectedRoute>
            <NavigationDrawer>
                <CategoryCreate/>
            </NavigationDrawer>
        </ProtectedRoute>
    );
};

export default CategoryCreatePage;
