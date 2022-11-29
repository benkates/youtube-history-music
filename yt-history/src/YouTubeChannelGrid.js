import { useRef } from "react";
import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import useIsInViewport from "./utils/useIsInViewPort";
import useWindowSize from "./utils/useWindowSize";
import ChannelCard from "./utils/ChannelCard";

function YouTubeChannelGrid() {
  //get windowSize hook
  const windowSize = useWindowSize();

  //declare number of cols based on windowSize
  let imageListCols;
  if (windowSize.width < 900) {
    imageListCols = 1;
  } else if (windowSize.width >= 900 && windowSize.width < 1200) {
    imageListCols = 2;
  } else if (windowSize.width >= 1200 && windowSize.width < 1536) {
    imageListCols = 3;
  } else {
    imageListCols = 4;
  }

  //declare ref for transition
  const ref = useRef(null);
  //create viewport hook (bool)
  const isInViewport = useIsInViewport(ref);
  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Box sx={{ mb: 5 }}>
        <ImageList variant="masonry" cols={imageListCols} gap={8}>
          <ImageListItem>
            <ChannelCard
              name="Vulf"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="548K subscribers"
            >
              Vulf is a record label originally from the funk band Vulfpeck!
              Originally formed in 2011 at University of Michican's music
              schoolblishes a host of other side projects by band members. The
              band's most recent album, Vulf Vault 006: Here We Go Jack, was
              released in August 2022. royalties from which funded Vulfpeck's
              admission-free tour in 2014. The band releases music independently
              through Vulf Records, which also publishes a host of other side
              projects by band members. The band's most recent album, Vulf Vault
              006: Here We Go Jack, was released in August 2022.
            </ChannelCard>
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="FACTmagazine"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 5, 2017"
              subheader="327K subscribers"
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
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="NPR Music"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: December 26, 2018"
              subheader="7.35M subscribers"
            >
              Tiny Desk Concerts is a video series of live concerts hosted by
              NPR Music at the desk of All Songs Considered host Bob Boilen in
              Washington, D.C.
            </ChannelCard>
          </ImageListItem>

          <ImageListItem>
            <ChannelCard
              name="Mass Appeal"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: July 8, 2018"
              subheader="1.01M subscribers"
            >
              Mass Appeal is an American media and content company based in New
              York City. The name originates from the Gang Starr song "Mass
              Appeal" from the album "Hard to Earn".
            </ChannelCard>
          </ImageListItem>

          <ImageListItem>
            <ChannelCard
              name="KEXP"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 27, 2022"
              subheader="2.84M subscribers"
            >
              KEXP-FM is a non-commercial radio station licensed to Seattle,
              Washington, United States, specializing in alternative and indie
              rock programmed by its disc jockeys for the Seattle metropolitan
              area. The station is owned by the non-profit Friends of KEXP.
            </ChannelCard>
          </ImageListItem>

          <ImageListItem>
            <ChannelCard
              name="Soulection"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: February 19, 2019"
              subheader="118K subscribers"
            >
              Soulection is a Los Angeles-based music collective that serves as
              a platform and community for artists, musicians, and fans from
              across the world. DJ Joe Kay and artists Guillame '96' Bonte and
              Andre Power collaborated to establish the brand in 2011. Radio
              show previously soundcloud then Apple Music in...
            </ChannelCard>
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="Boiler Room"
              chipAvatarColor="black"
              tooltipTitle={null}
              subheader="3.2M subscribers"
            >
              Boiler Room, a division of DICE, is an online music broadcasting
              and promotional platform based in London, UK. They commission and
              stream music sessions around the world. Founded in London in 2010,
              Boiler Room has now hosted shows in around 100 cities worldwide.
            </ChannelCard>
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="Stones Throw"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="504K subscribers"
            >
              Stones Throw Records is an American independent record label based
              in Los Angeles, California. Under the direction of founder Peanut
              Butter Wolf, Stones Throw has released music ranging from hip hop
              to experimental psychedelic rock.
            </ChannelCard>
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="Fkj"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: June 27, 2018"
              subheader="2.23M subscribers"
            >
              An accomplished artist of the Parisian electronic scene, FKJ, also
              known as French Kiwi Juice, is one of the flag bearers of the New
              French House musical genre. A native of Tours (France), but now
              based in Paris, FKJ is a leading talent and one of the most
              emblematic artists of the Roche Musique team that he joined in
              2012. Trained as a sound engineer for the cinema, while at the
              same time being a self-taught musician, his stage reputation has
              soared thanks to the driving rhythms and and dazzling
              improvisation that characterise his Live Sets.
            </ChannelCard>
          </ImageListItem>
          <ImageListItem>
            <ChannelCard
              name="COLORS"
              chipAvatarColor="black"
              tooltipTitle="First Subscribed: November 29, 2018"
              subheader="6.47M subscribers"
            >
              COLORSXSTUDIOS is a unique aesthetic music platform showcasing
              exceptional talent from around the globe. COLORS focuses on the
              most distinctive new artists and original sounds in an
              increasingly fragmented and saturated scene. All COLORS shows seek
              to provide clear, minimalistic stage that shines a spotlight on
              the artists, giving them the opportunity to present their music
              without distraction.
            </ChannelCard>
          </ImageListItem>
        </ImageList>
      </Box>

      <div ref={ref}></div>

      {/* YouTube Channel Grid */}
      {/* <Zoom
        // in={isInViewport}
        in={true}
        style={{ transitionDelay: isInViewport ? "500ms" : "0ms" }}
      > */}
      {/* <Grid
        container
        spacing={2}
        alignContent="center"
        justifyContent="center"
        // alignItems="stretch"
        // flexGrow={1}
      >
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Vulf"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: June 27, 2018"
            subheader="548K subscribers"
          >
            Vulf is a record label originally from the funk band Vulfpeck!
            Originally formed in 2011 at University of Michican's music school,
            the collective of musicians has produced... Vulfpeck is an American
            funk group founded in 2011. The band has released four EPs, six
            albums, several compilations, and a silent album on Spotify titled
            Sleepify, royalties from which funded Vulfpeck's admission-free tour
            in 2014. The band releases music independently through Vulf Records,
            which also publishes a host of other side projects by band members.
            The band's most recent album, Vulf Vault 006: Here We Go Jack, was
            released in August 2022.
          </ChannelCard>
        </Grid>

        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="FACTmagazine"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: July 5, 2017"
            subheader="327K subscribers"
          >
            Fact has been at the forefront of music and culture since its launch
            as a print magazine in 2003. It was developed into a digital
            platform in 2009 and has remained a vital voice in a crowded
            conversation by prioritising unique artists in its original video
            content and visual storytelling. Our venerated Fact mix series has
            highlighted the world’s most vital DJs and producers since 2008.
            Fact’s video output boasts more than 50 million views and includes
            our long-running series Against The Clock, where a producer or DJ is
            challenged to create a beat in under 10 minutes,
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="NPR Music"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: December 26, 2018"
            subheader="7.35M subscribers"
          >
            Tiny Desk Concerts is a video series of live concerts hosted by NPR
            Music at the desk of All Songs Considered host Bob Boilen in
            Washington, D.C.
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Mass Appeal"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: July 8, 2018"
            subheader="1.01M subscribers"
          >
            Mass Appeal is an American media and content company based in New
            York City. The name originates from the Gang Starr song "Mass
            Appeal" from the album "Hard to Earn".
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="KEXP"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: November 27, 2022"
            subheader="2.84M subscribers"
          >
            KEXP-FM is a non-commercial radio station licensed to Seattle,
            Washington, United States, specializing in alternative and indie
            rock programmed by its disc jockeys for the Seattle metropolitan
            area. The station is owned by the non-profit Friends of KEXP.
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Soulection"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: February 19, 2019"
            subheader="118K subscribers"
          >
            Soulection is a Los Angeles-based music collective that serves as a
            platform and community for artists, musicians, and fans from across
            the world. DJ Joe Kay and artists Guillame '96' Bonte and Andre
            Power collaborated to establish the brand in 2011. Radio show
            previously soundcloud then Apple Music in...
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Boiler Room"
            chipAvatarColor="black"
            tooltipTitle={null}
            subheader="3.2M subscribers"
          >
            Boiler Room, a division of DICE, is an online music broadcasting and
            promotional platform based in London, UK. They commission and stream
            music sessions around the world. Founded in London in 2010, Boiler
            Room has now hosted shows in around 100 cities worldwide.
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Stones Throw"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: June 27, 2018"
            subheader="504K subscribers"
          >
            Stones Throw Records is an American independent record label based
            in Los Angeles, California. Under the direction of founder Peanut
            Butter Wolf, Stones Throw has released music ranging from hip hop to
            experimental psychedelic rock.
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="Fkj"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: June 27, 2018"
            subheader="2.23M subscribers"
          >
            An accomplished artist of the Parisian electronic scene, FKJ, also
            known as French Kiwi Juice, is one of the flag bearers of the New
            French House musical genre. A native of Tours (France), but now
            based in Paris, FKJ is a leading talent and one of the most
            emblematic artists of the Roche Musique team that he joined in 2012.
            Trained as a sound engineer for the cinema, while at the same time
            being a self-taught musician, his stage reputation has soared thanks
            to the driving rhythms and and dazzling improvisation that
            characterise his Live Sets.
          </ChannelCard>
        </Grid>
        <Grid item sm={6} md={4} xl={3}>
          <ChannelCard
            name="COLORS"
            chipAvatarColor="black"
            tooltipTitle="First Subscribed: November 29, 2018"
            subheader="6.47M subscribers"
          >
            COLORSXSTUDIOS is a unique aesthetic music platform showcasing
            exceptional talent from around the globe. COLORS focuses on the most
            distinctive new artists and original sounds in an increasingly
            fragmented and saturated scene. All COLORS shows seek to provide
            clear, minimalistic stage that shines a spotlight on the artists,
            giving them the opportunity to present their music without
            distraction.
          </ChannelCard>
        </Grid>
      </Grid> */}
      {/* </Zoom> */}
    </Container>
  );
}

export default YouTubeChannelGrid;
