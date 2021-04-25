import OwnerList from "./owners/owner-list";
import OwnerEditorForm from "./owners/owner-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/owners", "/"]} exact={true}>
                    <OwnerList/>
                </Route>
                <Route path={["/owners/:ownerId", 'owners/create']} exact={true}>
                    <OwnerEditorForm/>
                </Route>
                {/*<Route path="/courses/:courseId/sections" exact={true}>*/}
                {/*    <SectionList/>*/}
                {/*</Route>*/}
                {/*<Route path="/sections/:sectionId" exact={true}>*/}
                {/*    <SectionEditorForm/>*/}
                {/*</Route>*/}
            </HashRouter>
        </div>
    );
}

export default App;
