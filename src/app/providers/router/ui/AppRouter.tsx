import {Route, Routes} from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig";

const AppRouter = () => (
    <div className="page-wrapper">
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    path={path}
                    element={element}
                    key={path}
                />
            ))}
        </Routes>
    </div>
);

export default AppRouter;