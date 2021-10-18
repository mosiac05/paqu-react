import './App.css';
import { useEffect } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { fetchUniversities } from './store/universities';
import { fetchFaculties } from './store/faculties';
import { fetchDepartments } from './store/departments'
import { fetchCourses } from './store/courses';
import { fetchQuestionPapers } from './store/question-papers';
import { useDispatch } from 'react-redux';
import Home from './views/Home';
import UniversitiesList from './views/UniversitiesList';
import Layout from './components/UI/Layout';
import Faculties from './views/Faculties';
import Departments from './views/Departments';
import Courses from './views/Courses';
import QuestionPapers from './views/QuestionPapers';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUniversities())
    dispatch(fetchFaculties())
    dispatch(fetchDepartments())
    dispatch(fetchCourses())
    dispatch(fetchQuestionPapers())
  }, [dispatch])

  function _ScrollToTop(props) {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, [pathname]);
      return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)
  
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/universities" exact>
              <UniversitiesList />
            </Route>
            <Route path="/universities/:universityId/faculties" exact>
              <Faculties />
            </Route>
            <Route path="/universities/:universityId/faculties/:facultyId/departments" exact>
              <Departments />
            </Route>
            <Route path="/universities/:universityId/faculties/:facultyId/departments/:departmentId/courses" exact>
              <Courses />
            </Route>
            <Route path="/universities/:universityId/faculties/:facultyId/departments/:departmentId/courses/:courseId/question-papers" exact>
              <QuestionPapers />
            </Route>
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
