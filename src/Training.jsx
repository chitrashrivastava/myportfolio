import { Link } from 'react-router-dom'

const Training=()=>{
    return(
        <>
        
      <section className="experience" id="training">

<h1 className="heading"> <span> Training </span> </h1>

<div className="box-container">

  <div className="box">
    <div className="content exp-tra">
      <span>2023</span>
      <h3>DBMS with MySQL</h3>
      <p>
        <a href="DBMS.pdf" target="_blank"> </a>
      </p>
    </div>
  </div>
  

  <div className="box">

    <div className="content exp-tra">
      <span> 2023</span>
      <h3>MERN Stack Development </h3>
      <p>
        <Link to='https://drive.google.com/file/d/1zOkFURBjvSO0Z5lMozD5Dmaj6KYfeicI/view?usp=sharing'>Click here to show</Link>
      </p>
    </div>
  </div>
 

  <div className="box">

    <div className="content exp-tra">
      <span> 2021</span>
      <h3>Web dev completion certificate by Bolt IoT</h3>
      <p>
        <Link to='https://drive.google.com/file/d/1jlq-z0M1uhw-I1wikj_qJFeyXkD2Uk2A/view?usp=sharing'></Link>
      </p>
    </div>
  </div>
  <div className="box">
    <div className="content exp-tra">
      <span>2020</span>
      <h3>
        C programming certificate by cisco</h3>
      <p> <Link to='https://drive.google.com/file/d/1kH5mHfqu2WpKzGGprrRLs4oeKErUMF7n/view?usp=sharing'></Link></p>
    </div>
  </div>
</div>
</section>
        </>
    )
}
export default Training;