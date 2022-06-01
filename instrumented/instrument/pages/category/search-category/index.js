import NavigationDrawer from "../../../src/ui-components/navigation";
import CategorySearch from "./category-search";
import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CategoryCreatePage = () => {
    return (
        <ProtectedRoute>
            <NavigationDrawer>
                <CategorySearch/>
            </NavigationDrawer>
        </ProtectedRoute>
    );
};

export default CategoryCreatePage;
