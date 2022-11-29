import { Box, Container } from "@mui/material";
import useWindowSize from "./utils/useWindowSize";
import ChannelCard from "./utils/ChannelCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

//DONE: scroll

function YouTubeChannelGrid() {
  const windowSize = useWindowSize();

  //declare number of cols based on windowSize
  let slidesNum;
  if (windowSize.width < 760) {
    slidesNum = 1;
  } else if (windowSize.width >= 760 && windowSize.width < 1200) {
    slidesNum = 2;
  } else if (windowSize.width >= 1200) {
    slidesNum = 3;
  } else {
    slidesNum = 3;
  }

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
        <Swiper
          effect={"coverflow"}
          navigation={true}
          centeredSlides={true}
          modules={[EffectCoverflow, Pagination]}
          coverflowEffect={{
            depth: 500,
            modifier: 0.75,
            slideShadows: true,
          }}
          slidesPerView={slidesNum}
          grabCursor={true}
          spaceBetween={20}
          pagination={pagination}
          className="mySwiper"
        >
          <SwiperSlide>
            <ChannelCard
              name="Vulf"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="548K subscribers"
              url="https://www.youtube.com/@Vulf"
            >
              {`Vulf is a record label started by the funk band Vulfpeck!
              Originally formed in 2011 at University of Michican's music
              school, the "collective" has produced viral videos with great
              style. Fun fact: in 2014 the band put out a completely silent
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
              launch as a print magazine in 2003. It was developed into a
              digital platform in 2009 and has remained a vital voice in a
              crowded conversation by prioritising unique artists in its
              original video content and visual storytelling. Our venerated Fact
              mix series has highlighted the world’s most vital DJs and
              producers since 2008. Fact’s video output boasts more than 50
              million views and includes our long-running series Against The
              Clock, where a producer or DJ is challenged to create a beat in
              under 10 minutes,
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
              The NPR Music channel is largely dedictated to the Tiny Desk
              Concerts series. It's a video series of live concerts at the desk
              of All Songs Considered host Bob Boilen in Washington, D.C. The
              first video priemered in 2008 and there are now over 800 with a
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
              started on KBeach Radio in 2011 and was piocked up by Apple
              Music's Beats 1 Radio in 2015.
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
              known as French Kiwi Juice, is one of the flag bearers of the New
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
              COLORSXSTUDIOS is a unique aesthetic music platform showcasing
              exceptional talent from around the globe. COLORS focuses on the
              most distinctive new artists and original sounds in an
              increasingly fragmented and saturated scene. All COLORS shows seek
              to provide clear, minimalistic stage that shines a spotlight on
              the artists, giving them the opportunity to present their music
              without distraction.
            </ChannelCard>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
}

export default YouTubeChannelGrid;
