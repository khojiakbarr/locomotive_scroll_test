import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./locomotive-scroll.css";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.create({
      trigger: ".image-mask",
      scroller: containerRef.current,
      start: "top+=30% 50%",
      end: "bottom-=40% 50%",
      animation: gsap.to(".image-mask", { backgroundSize: "120%" }),
      scrub: 2,
      // markers: true,
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => scroller.update());
      scroller.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="container">
      <div className="hero">
        <div data-scroll data-scroll-speed="3" className="copy">
          <blockquote>
            “It’s one thing to make a <span>picture</span> of what a person
            looks like, it’s another thing to make a <span>portrait</span> of
            who they are.”
            <cite>— Paul Caponigro</cite>
          </blockquote>
        </div>
        <div className="image-wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Fmonochrome-photo-of-woman-3410386.jpg?alt=media&token=112f9717-ef7e-46e1-8952-b3e346f8f008"
            alt=""
          />
        </div>
      </div>

      <div className="section-0" data-scroll data-scroll-speed="2">
        <p
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
        >
          Travelling leaves you speechless
        </p>
        <p data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
          Then it turns you to a storyteller
        </p>
        <cite>— Ibn Battuta</cite>
      </div>

      <div className="section-1">
        <div className="image-mask"></div>
      </div>

      <div className="section-2">
        <div id="pinSection" className="pinned-quote">
          <blockquote
            data-scroll
            data-scroll-sticky
            data-scroll-target="#pinSection"
          >
            “To me, photography is an art of observation. It’s about finding
            something interesting in an ordinary place… I’ve found it has little
            to do with the things you see and everything to do with the way you
            see them.”
            <cite>— Elliott Erwitt</cite>
          </blockquote>
        </div>

        <div className="images-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2F666238d6f903c8899fa76789ed59912d.jpg?alt=media&token=fed407c6-a469-43cd-af23-5d7bb36c0f0e"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Fbca413679414c189fdff16e15edd7726.jpg?alt=media&token=23dfcb96-b5b0-47ac-8105-e2c9a08c437b"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2F24cf1a08cbaabf899d9d9872e20452b6.jpg?alt=media&token=7d44f884-e4dc-4775-b15d-001b9868de38"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2F37ff280cdb9a9ff5a8aebb482a7c1b73.jpg?alt=media&token=611f6188-574c-4456-bdd1-c20b2e024b0a"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2F81c20e1c1c9e380395bff6ff651fc2e7.jpg?alt=media&token=d0fa44b4-b518-4754-ae1d-929a08972c25"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Fb4a0ce2c6d0e9ffd4792561e122bfb1e.jpg?alt=media&token=d32ec2b6-0902-4cb5-ae28-d22c87858407"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Fd137584c758fd75b3191220df2934ce9.jpg?alt=media&token=34fcda56-27ea-43f5-a8c0-256783a053f8"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2Fmonochrome-photo-of-woman-covering-her-eye-2928525.jpg?alt=media&token=34786a3f-935d-4465-9d86-f837967e07cb"
            alt=""
          />
        </div>
      </div>

      <div className="section-3">
        <div className="image-wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/bwimages%2F0984c01ecccd4282d73a74962ea59889.jpg?alt=media&token=4b859d79-7055-4584-9c0a-b44a2cdd4e66"
            alt=""
          />
        </div>
        <div className="copy">
          <blockquote data-scroll-speed="3" data-scroll>
            If a picture is worth a thousand words, words must be priceless
          </blockquote>
        </div>
        <p
          className="copyright"
          data-scroll-position="bottom"
          data-scroll-speed="2"
          data-scroll
        >
          &copy; Layout Explorations, ebinabo, 2020
        </p>
      </div>
    </div>
  );
}

export default App;
