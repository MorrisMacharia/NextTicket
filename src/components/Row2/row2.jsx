import React from 'react'
import '../../components/Styles/Row2.css'

const Row2 = () => {
  return (
    <div><div className="row2">
    <div className="card">
      <div className="choral">
        <img src="/Event5.svg" alt="soul" />
      </div>
      <div className="title">Solid Soul</div>
      <div className="day">Fri, Apr 26</div>
      <div className="loc">Carnivore Restuarant - Simba Saloon</div>
      <div className="price">From KES 1,500</div>
    </div>
    <div className="card">
      <div className="choral">
        <img src="/Event6.svg" alt="cider" />
      </div>
      <div className="title1">Passionate Pages Flavoured by Manyatta Cider</div>
      <div className="day">Sat, Mar 23</div>
      <div className="loc">New Muthaiga Mall, Thigiri Ridge</div>
      <div className="price">From KES 1000</div>
    </div>
    <div className="card">
      <div className="choral">
        <img src="/Event7.svg" alt="beats" />
      </div>
      <div className="title">Sunday Beats</div>
      <div className="day">Every Sun, Feb 25 to May 26</div>
      <div className="loc">Nairobi Street Kitchen</div>
      <div className="price">Free</div>
    </div>
  
    <div className="card">
      <div className="choral">
        <img src="/Event8.svg" alt="kiota" />
      </div>
      <div className="title2">Kiota School Family Outdoor Movie Matinee</div>
      <div className="day">Sun, Apr 28</div>
      <div className="loc">The Dome, ASK Showground</div>
      <div className="price">From KES 500</div>
    </div>
  </div>;
  </div>
  )
}

export default Row2;

