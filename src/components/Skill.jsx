import React from 'react';

const Skill = () => {
  return (
    <article id="skills">
      <div className="col-12 content-col ">
        <div className="content-head">
          <h2>Skills</h2>
          <p>
            {/* テキストイン */}
          </p>
        </div>
          <div className='wrapper'>
            <div className='bar'>
              <div className='bar-info html' data-total='70'>
                HTML
                <span className='percent'>70%</span>
              </div>
            </div>
        
            <div className='bar'>
              <div className='bar-info css' data-total='70'>
                CSS/Bootstrap
                <span className='percent'>70%</span>
              </div>
            </div>
        
            <div className='bar'>
              <div className='bar-info js' data-total='60'>
                JavaScript
                <span className='percent'>60%</span>
              </div>
            </div>

            <div className='bar'>
              <div className='bar-info php' data-total='60'>
                PHP / Laravel
                <span className='percent'>60%</span>
              </div>
            </div>
            
            <div className='bar'>
              <div className='bar-info xd' data-total='90'>
                Adobe XD
                <span className='percent'>90%</span>
              </div>
            </div>
          </div>
        
      </div>
    </article>
  )
}

export default Skill;