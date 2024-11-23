import React from 'react'
import'../Styles/Home.css';


const Home = () => {
  return (
    <>

    <div className='home-container'>
    <div className='left-section'>
      <div className='pic-card' style={{width:'50%'}}>
         <img src='/mypic.jpg' alt='my Picture' style={{width:'100%'}}/>
      
       <div className='card-content'>
<h4><b>Name: Debonita Dey</b></h4>
<p>Contact No.: 6306242130</p>
<a href='/Debonita Dey new.pdf'download> 
Download my Resume
</a>
       </div>
       </div>
       </div>
       <div className='right-section'>
       <div className='brief'>
       I would like to express my keen interest in the frontend developer position. I have learned and applied my knowledge of HTML, CSS, Javascript, React, Bootstrap, Redux in various projects.I am currently doing internship as frontend intern in Unified mentorship.I have done a previous internship in Alphawizz Technologies in the same domain where I developed a responsive and fully functional e-commerce website with fetch api and redux. More projects were on login pages, chat interfaces, etc. I am confident that I can quickly adapt to a fast-paced environment and become a valuable asset to your team. I am eager to learn and grow within your organization.
       </div>
       </div>
    </div>
    </>
  )
}

export default Home