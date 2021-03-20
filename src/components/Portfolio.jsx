import React from 'react';

import Traffic from '../assets/images/交通費精算アプリ.svg';
import Linkpost from '../assets/images/LinkPost.svg';

const Portfolio = () => {
  return (
    <article id="portfolio" >
      <div class="col-12 content-col">
        <div class="content-head">
          <h2>Portforio</h2>
          <p>
            {/* テキストイン */}
          </p>
        </div>
      
        <section>
          <div class="row content-head">
            
            <div class="col-4">
              <div class="slide-in">
                <img src={ Traffic } alt="交通費申請アプリのUI画面" />
                <div class="mask">
                  <div class="caption">交通費精算アプリ</div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="slide-in">
                <img src={ Linkpost } alt="LinkPost画面UI" />
                <div class="mask">
                  <div class="caption">LinkPost</div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="slide-in">
                <img src={ Traffic } alt="交通費申請アプリのUI画面" />
                <div class="mask">
                  <div class="caption">交通費精算アプリ</div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </article>
  )
}

export default Portfolio;