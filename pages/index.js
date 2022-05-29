import NavigationDrawer from "./ui-component/navigation";
import Dashboard from "./dashboard/Default";

export default function Home() {
    return (
        <div>
            <NavigationDrawer>
                <Dashboard/>
            </NavigationDrawer>
        </div>
    )
}