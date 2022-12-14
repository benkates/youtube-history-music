import { Box, Container } from "@mui/material";
import useWindowSize from "./utils/useWindowSize";
import ChannelCard from "./utils/ChannelCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

//DONE: scroll

function YouTubeChannelGrid() {
  // get window size as reactive var
  const windowSize = useWindowSize();
  let slidesNum;
  //declare number of cols based on windowSize
  if (windowSize.width < 760) {
    slidesNum = 1;
  } else if (windowSize.width >= 760 && windowSize.width < 1200) {
    slidesNum = 2;
  } else if (windowSize.width >= 1200) {
    slidesNum = 3;
  } else {
    slidesNum = 3;
  }

  // init pagination style for swipe
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`;
    },
  };

  //declare ref for transition
  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Box sx={{ mb: 5 }} position="relative">
        {/* declare swiper */}
        <Swiper
          effect={"coverflow"} //add 3d effect
          navigation={true} //add bottom nav
          centeredSlides={true} //center slides
          loop={true} //infinite loop
          modules={[Navigation, EffectCoverflow, Pagination]} //3d effect and bottom nav
          //swiper styles
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-navigation-size": "24px",
          }}
          coverflowEffect={{
            //coverflow effect props
            depth: 500,
            modifier: 0.75,
            slideShadows: true,
          }}
          slidesPerView={slidesNum} //use reactive var for number of slides in view
          grabCursor={true} //turn cursor into grab icon
          spaceBetween={5} //add spacing
          pagination={pagination} //pagination props
          loopedSlides={10} //needed for loop
        >
          <SwiperSlide>
            <ChannelCard
              name="Vulf"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="548K subscribers"
              url="https://www.youtube.com/@Vulf"
            >
              {`Vulf is a record label started by the funk band Vulfpeck.
              Originally formed in 2011 at University of Michican, the "collective" has produced viral videos with great
              style. Fun fact: in 2014 the band released a completely silent
              album entitled "Sleepify" and encouraged fans to play it on repeat
              when they slept to crowdfund a free tour. Spotify wasn't so happy...`}
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="FACTmagazine"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 5, 2017"
              subheader="327K subscribers"
              url="https://www.youtube.com/@Factmag"
            >
              Fact has been at the forefront of music and culture since its
              launch as a print magazine in 2003 and has developed into a
              digital platform in 2009. Fact???s video output boasts more than 50
              million views and includes its long-running series Against The
              Clock, where a producer or DJ is challenged to create a beat in
              under 10 minutes.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="NPR Music"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: December 26, 2018"
              subheader="7.35M subscribers"
              url="https://www.youtube.com/@nprmusic"
            >
              The NPR Music channel is largely dedicated to the Tiny Desk
              Concerts series. It's a video series of live concerts at the desk
              of All Songs Considered host Bob Boilen in Washington, D.C. The
              first video premiered in 2008 and there are now over 800 with a
              collective 2 billion views.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="Mass Appeal"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 8, 2018"
              subheader="1.01M subscribers"
              url="https://www.youtube.com/@massappeal"
            >
              Mass Appeal is an American media and content company based in New
              York City. The name originates from the Gang Starr song "Mass
              Appeal" from the album "Hard to Earn". Its popular "Rhythm
              Roulette" series has garnered millions of views where producers
              are blindfolded and select three random records to then sample and
              make a beat.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="KEXP"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 27, 2022"
              subheader="2.84M subscribers"
              url="https://www.youtube.com/@kexp"
            >
              KEXP-FM is a non-commercial radio station licensed to Seattle,
              Washington, United States, specializing in alternative and indie
              rock programmed by its DJs for the Seattle metropolitan area. The
              station is owned by the non-profit Friends of KEXP. They
              frequently post in-studio performances online.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="Soulection"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: February 19, 2019"
              subheader="118K subscribers"
              url="https://www.youtube.com/@Soulection"
            >
              Soulection is a Los Angeles-based music collective that serves as
              a platform and community for artists, musicians, and fans from
              across the world. The brand defines itself as uniting a
              "borderless, genre-bending musical movement". Its radio show
              started on KBeach Radio in 2011 and was picked up by Apple Music's
              Beats 1 Radio in 2015.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="Boiler Room"
              chipAvatarColor="black"
              tooltipTitle={null}
              subheader="3.2M subscribers"
              url="https://www.youtube.com/@boilerroom"
            >
              Boiler Room, is an online music broadcasting and promotional
              platform based in London, UK. They commission and stream music
              sessions around the world. Founded in London in 2010, Boiler Room
              has now hosted shows in around 100 cities worldwide. Its music
              programming originally focused on electronic music such as garage,
              house, techno, dub but eventually expanded to include grime, hip
              hop, classical, and jazz.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="Stones Throw"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="504K subscribers"
              url="https://www.youtube.com/@stonesthrow"
            >
              Stones Throw Records is an American independent record label based
              in Los Angeles, California. Under the direction of founder Peanut
              Butter Wolf, Stones Throw has released music ranging from hip hop
              to experimental psychedelic rock. Hip hop legends like J Dilla,
              Madlib, MF Doom, and many more have records on the label.
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="Fkj"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="2.23M subscribers"
              url="https://www.youtube.com/@FKJ"
            >
              {`An accomplished artist of the Parisian electronic scene, FKJ, also
              known as French Kiwi Juice based on wordplay from his French mother and Kiwi father, is one of the flag-bearers of the New
              French House musical genre. A native of Tours (France), but now
              based in Paris, FKJ is a leading multi-instrumentalist in live looping performance.`}
            </ChannelCard>
          </SwiperSlide>
          <SwiperSlide>
            <ChannelCard
              name="COLORS"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 29, 2018"
              subheader="6.47M subscribers"
              url="https://www.youtube.com/@COLORSxSTUDIOS"
            >
              COLORSXSTUDIOS is a music platform showcasing talent from around
              the globe. COLORS focuses on the new artists and original sounds
              from a variety of genres. The unique sets of COLORS shows makes
              each performance stand out.
            </ChannelCard>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
}

export default YouTubeChannelGrid;
