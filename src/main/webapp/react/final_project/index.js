import OwnerList from "./owners/owner-list";
import OwnerEditorForm from "./owners/owner-editor";
import LotList from "./lots/lot-list";
import LotEditorForm from "./lots/lot-editor";
import CarList from "./cars/car-list";
import CarEditorForm from "./cars/car-editor";

const {HashRouter, Route, Link} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/owners", "/"]} exact={true}>
                    <OwnerList/>
                </Route>
                <Route path={["/owners/:ownerId", '/owners/create']} exact={true}>
                    <OwnerEditorForm/>
                </Route>

                <Route path={["/owners/:ownerId/lots", '/lots']} exact={true}>
                    <LotList/>
                </Route>
                <Route path={["/owners/:ownerId/lots/:lotId", '/lots/create', '/owners/:ownerId/lots/create']} exact={true}>
                    <LotEditorForm/>
                </Route>

                <Route path="/lots/:lotId/cars" exact={true}>
                    <CarList/>
                </Route>
                <Route path={["/lots/:lotId/cars/:carId", 'cars/create', 'lots/:lotId/cars/create']} exact={true}>
                    <CarEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
