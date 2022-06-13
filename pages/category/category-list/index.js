import NavigationDrawer from "../../../src/ui-components/navigation";
import CategoryList from "./category-list";
// import ProtectedRoute from "../../../src/ui-components/protected-route/protected-route";

const CategoryListPage = () => {
    return (
        // <ProtectedRoute>
            <NavigationDrawer>
                <CategoryList/>
            </NavigationDrawer>
        // </ProtectedRoute>
    );
};

export default CategoryListPage;
