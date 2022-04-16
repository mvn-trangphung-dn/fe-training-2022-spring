import './App.css';
import './assets/styling/styles.scss'
import PageHeader from './feature/components/PageHeader';
import PageFooter from './feature/components/PageFooter';
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
