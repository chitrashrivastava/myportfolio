import { Link } from 'react-router-dom'
const Projects=()=>{
    return(
        <>
        
      <section className="experience" id="projects">

<h1 className="heading"> <span>  Projects </span></h1>

<div className="box-container">
<div className="box">
    <div className="content exp-tra">
      <span>2024</span>
      <h3>Internshala Backend API</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/internshala-backend-main'>GitHub Repository</Link>
        {/* <Link to='https://www.linkedin.com/in/chitra-shrivastava-60878327a/'>See Video</Link> */}

      </p>
    </div>
  </div>

  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>Animated car template</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/final3--fortuner-'> GitHub Repository</Link>
        {/* <Link to='https://github.com/chitrashrivastava/react-first-site'></Link> */}

      </p>
    </div>
  </div>

  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>MakeUp Eccommerce Site</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/MAKEUP'>GitHub Repository</Link>
        <Link to='https://glamaura.vercel.app'>Link </Link>
      </p>
    </div>

    

  </div>
  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>Student management backend site</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/school'>GitHub Repository</Link>

      </p>
    </div>

  </div>

  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>Frontend Projects</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/interior-design'>GitHub Repository</Link>
      </p>
    </div>

  </div>

  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>Ecommerce site</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/ecommmers-site'>GitHub Repository</Link>
        {/* <Link to=''>GitHub Repository</Link> */}

      </p>
    </div>

  </div>
  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>React hotel Website</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/react-hotel'>GitHub Repository</Link>

      </p>
    </div>

  </div>
  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>Restaurent Website</h3>
      <p>
        <Link to='https://github.com/chitrashrivastava/Restau'>GitHub Repository</Link>

      </p>
    </div>

  </div>

</div>

</section>
        </>
    )
}
export default Projects