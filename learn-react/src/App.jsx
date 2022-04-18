import './App.css';
import './assets/styling/styles.scss'
import PageHeader from './feature/shared/PageHeader';
import PageFooter from './feature/shared/PageFooter';
import PageHome from './feature/components/HomePage';

function App() {
  return (
    <>
      <PageHeader />
      <PageHome />
      <PageFooter />
    </>
  );
}

export default App;
