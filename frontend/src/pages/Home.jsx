import { Link } from "react-router-dom";
import "../PHome.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaLocationDot
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="nav">

        <div className="nav-left">

          <div className="logo">

            <img
              src="/logo.jpeg"
              alt="Weight Loss Factory"
              className="logo-img"
            />

            <div className="logo-text">
              <h2>Weight Loss Factory</h2>
              <p>One Stop Solution For Your Health</p>
            </div>

          </div>

        </div>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#gallery">Gallery</a>

          <a href="/career">
            Career & Franchise
          </a>

          <Link to="/referral">
            Refer & Earn
          </Link>

          <a href="#contact">
            Contact Us
          </a>

        </div>

      </nav>

      {/* ================= HERO ================= */}
<section className="hero">

 

    <div className="hero-left">

      <h1>
        Transform <br />
        Your Life, <br />
        <span>Naturally.</span>
      </h1>

      <h3>Personalized Nutrition & Wellness Programs</h3>

      <p>
        You're in the right place. This is where your transformation
        begins. We help you lose weight, gain confidence and build a
        healthier lifestyle with expert nutrition guidance, regular
        follow-ups and continuous motivation.
      </p>

        <div className="hero-buttons">

           

            <a
              href="https://canva.link/z02syh3fs3o2y8v"
              className="secondary-btn"
            >
              Watch Success Stories →
            </a>

          </div>

   </div>

    <div className="brand-figure">
  <img
    src="/logo.jpeg"
    alt="Weight Loss Factory"
    className="hero-logo"
  />
</div>

 

</section>
     
      {/* ================= GALLERY ================= */}

<section className="gallery-section" id="gallery">

<h2 className="section-title">
Gallery
</h2>

<p className="section-subtitle">
Real Transformations • Nutrition Club • Healthy Lifestyle
</p>
<div className="gallery-slider">
 
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={1}
  spaceBetween={0}
  loop={true}
  speed={1500}          // Transition duration (1 second)
  autoplay={{
    delay: 3500,        // Stay on each slide for 3.5 seconds
    disableOnInteraction: false,
  }}
  navigation
  pagination={{ clickable: true }}
>
  <SwiperSlide>
    <img src="/i1.jpeg" alt="" />
  </SwiperSlide>

  <SwiperSlide>
    <img src="/i2.jpeg" alt="" />
  </SwiperSlide>

  <SwiperSlide>
    <img src="/i3.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i4.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i5.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i6.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i7.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i8.jpeg" alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/i9.jpeg" alt="" />
  </SwiperSlide>
</Swiper>
</div>




{/* <img src="/i1.jpeg" alt="" />
</div>

<div className="gallery-card">
<img src="/i2.jpeg" alt="" />
</div>

<div className="gallery-card">
<img src="/i3.jpeg" alt="" />
</div>

<div className="gallery-card">
<img src="/i4.jpeg" alt="" />
</div>

<div className="gallery-card">
<img src="/i5.jpeg" alt="" />
</div>
<div className="gallery-card">
<img src="/i6.jpeg" alt="" />
</div>
<div className="gallery-card">
<img src="/i7.jpeg" alt="" />
</div>
<div className="gallery-card">
<img src="/i8.jpeg" alt="" />
</div>
<div className="gallery-card">
<img src="/i9.jpeg" alt="" />
</div>
</div> */}


</section>


{/* ================= CONTACT ================= */}

<section className="contact-section" id="contact">

<h2 className="section-title">
Contact Us
</h2>

<div className="contact-container">

<div className="contact-card">

<h3>Virtual Consultation</h3>

<p>
Monday - Saturday
</p>

<p>
7:30 AM - 8:30 AM
</p>

</div>

<div className="contact-card">

<h3>Information Session</h3>

<p>
6:00 PM - 6:30 PM
</p>

<p>
Special Appointments Available
</p>

</div>

<div className="contact-card">

<h3>Nutrition Club</h3>

<p>
Physical:Kathriguppe,Bangalore
Virtual:Zoom
</p>

</div>

<div className="contact-card">

<h3>Contact</h3>

<p>
Prasanna Acharya
</p>

<p>
📞 +91 7892545499
</p>

<p>
✉️ weightlossnutritioncentre@gmail.com
</p>

</div>

</div>

</section>
<footer className="footer">

  <div className="footer-left">

    <h2>Weight Loss Factory</h2>

    <p>
      One Stop Solution For Your Health & Fitness
    </p>

    <p>
      © 2026 Weight Loss Factory
    </p>

  </div>

  <div className="footer-social">

    <a
      href="https://www.facebook.com/prasannac.acharya/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF size={36}  />
    </a>

    <a
      href="https://www.instagram.com/health_fit_weight_loss_coach/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={36}  />
    </a>

    <a
      href="https://x.com/fitness4ucoach"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter size={36}  />
    </a>

    <a
      href="https://api.whatsapp.com/send/?phone=917892545499&text=Hi&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={36} />
    </a>

    <a
      href="https://www.google.com/maps/place/Weight+Loss+Nutrition+Centre(Virtual+Now)/@12.9417797,77.5588086,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3f4ba6425bab:0x66234fa2f48cecff!8m2!3d12.9417797!4d77.5588086!16s%2Fg%2F11fct212h8?coh=164777&entry=tt&shorturl=1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLocationDot size={36} />
    </a>

  </div>

</footer>
    </div>
  );
}


export default Home;