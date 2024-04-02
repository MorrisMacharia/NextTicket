import React from "react";
import '../Styles/Products.css'
import Link from "next/link";

const Products = () => {
  return (
    <div className="body1">
      <div className="upComing">
        <div className="events">UpComing Events</div>
        <div className="see">
          <a href="url">See All</a>
        </div>
      </div>
      <div className="row1">
        <Link href="/event">
          <div className="card">
            <div className="choral">
              <img src="/Event1.png" alt="choral" />
            </div>
            <div className="title">Nairobi International Choral Festival</div>
            <div className="day">Sun, Apr 28</div>
            <div className="loc">The Dome, ASK Showground</div>
            <div className="price">From KES 500</div>
          </div>
        </Link>

        <div className="card">
          <div className="choral">
            <img src="/Event2.png" alt="color" />
          </div>
          <div className="title">Nairobi Colour Festival</div>
          <div className="day">Sat, Apr 20</div>
          <div className="loc">Carnivore Grounds</div>
          <div className="price">From KES 800</div>
        </div>

        <div className="card">
          <div className="choral">
            <img src="/Event3.png" alt="raha" />
          </div>
          <div className="title">Raha Fest 2024</div>
          <div className="day">Sat, Mar 30</div>
          <div className="loc">Uhuru Gardens</div>
          <div className="price">From KES 6000</div>
        </div>

        <div className="card">
          <div className="choral">
            <img src="/Event4.png" alt="rx" />
          </div>
          <div className="title">RX-Fest Amapiano Edition</div>
          <div className="day">Sat, Apr 27</div>
          <div className="loc">Kasarani Sports Stadium</div>
          <div className="price">From KES 700</div>
        </div>
      </div>
      <div className="row2">
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
          <div className="title1">
            Passionate Pages Flavoured by Manyatta Cider
          </div>
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
          <div className="title2">
            Kiota School Family Outdoor Movie Matinee
          </div>
          <div className="day">Sun, Apr 28</div>
          <div className="loc">The Dome, ASK Showground</div>
          <div className="price">From KES 500</div>
        </div>
      </div>

      <div className="more">
        <button type="button" className="bttn">
          Show More
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
