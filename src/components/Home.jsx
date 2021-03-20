import React from 'react';
import Profile from '../assets/images/profile.JPG';

const Home = () => {
  return (
    <article id="home">
      <div className="row">
        <div className="col-7">
          <div className="item-left">
            <div className="item-left-head">
              <h1>Kazuya Tomoda</h1>
              <p>Web Developer & Designer</p>
            </div>
            <div className="mt-5">
              <table className="ProductTable">
                <tr>
                  <td className="listbox">From</td>
                  <td>Tokyo</td>
                </tr>
                <tr>
                  <td className="listbox">Hobby</td>
                  <td>Football & Bike</td>
                </tr>
                <tr>
                  <td className="listbox">History</td>
                  <td>Kokushikan University</td>
                </tr>
                <tr>
                  <td className="listbox">Email</td>
                  <td>k-tomoda@star-career.co.jp</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-5 m-0 p-0 img_outer">
          <img className="inner_photo" src={Profile} alt="プロフィール画像" />
        </div>
      </div>
    </article>
  )
}

export default Home;