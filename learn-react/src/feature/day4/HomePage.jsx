import Count from './Count';

function PageHome() {
  
  return (
    <>
      <h1 className="title">Home Page - Lifecycle</h1>
      <div>
        <div className="wrapper-content">
          <Count className="circle" count={{num: 13, size: 200 }} />
          <Count className="circle" count={{num: 10, size: 200 }} />
          <Count className="circle" count={{num: 3, size: 200 }} />
        </div>
      </div>
    </>
  )
}

export default PageHome;
