import React, { Component } from "react";
import ReactPlayer from "react-player";
import ComingSoon from "./comingsoon";

export default class Work extends Component {
  projects = [
    {
      title: "Daily UI",
      description:
        "Check out my other UI designs from the daily UI challenge on Dribble",
      date: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "User Experience Design",
    },
    {
      title: "Spotify Tags",
      description:
        "As part of my Digital Product Design course, I explored ways to improve Spotify and came up with a tagging scheme.",
      date: "August 2019 - December 2019",
      rendering: (
        <div class="post-wrapper">
          <h2>Defining the Problem Space</h2>
          <p>
            After brainstorming many different potential problems I could tackle
            within Spotify, I decided to settle on their{" "}
            <em>music discovery</em>. Spotify's discover section, although
            improving, is weak. It works, but it could be a lot better. The
            whole point of the discover section is to make it <em>easier</em>{" "}
            for the user to rummage through the almost infinite number of
            existing songs there are in the world for the songs that they will
            like. There are still many overwhelming things on the discover
            section, and in addition many playlists have either repetitive
            artists or songs.
          </p>
          <h3>The People Problem</h3>
          <p>
            {" "}
            After doing the five whys exercise, I came up with my initial people
            problem.
            <br />
            <br />
            <i>
              When I look for new music, I want to be able to search for the
              type of song I want to find, so I can save time looking.
            </i>
            <br />
            <br /> But I can't do that well because:
            <ul>
              <li>There is a lot of music out there</li>
              <li>
                The current ways to search for music aren’t specific enough for
                my needs
              </li>
            </ul>
          </p>
          <h2>Research</h2>
          <p>
            To look into this problem, I both conducted in user research in
            person and online through a survey and an interview, as well as
            market research.
          </p>
          <h3>Results</h3>
          <p>
            What I found in my research was that people had{" "}
            <em>mixed feelings</em> about discovering new music, but slightly
            more people tied <em>negative words</em> to it than positive ones.
            Additionally, the way people most often find music is a natural one
            with less effort rather than a search-heavy one (possibly due to the
            search-heavy one being very time consuming as they described prior).
            Most people discover new music through the people around them
            (including friends) or through things they do in their daily life
            like listening to the radio while driving, or going to a party or
            event, or going to a store and listening to the background music.
            Another thing that stood out in my interviews was that people either
            looked for new music from artists they already like or looked for
            new songs that fit the playlist <em>mood</em> or <em>a rhythm</em>{" "}
            that they like. The last thing that I wanted to point out that I did
            not show above was that a big point of frustration for people was
            not finding exactly what they liked. A lot of times people would say
            recommendations from Spotify were{" "}
            <em>close but not close enough</em> to what they wanted, or that
            they already knew about it, or that they didn’t trust them.
          </p>
          <h3>Market Research</h3>
          <p>
            Some current apps that address the issue of discovering new music
            are Pandora, Shazam, and SoundCloud. <br />
            Pandora, similar to Spotify, recommends music to users based off of
            an algorithm that learns based off of likes and dislikes of a song
            to recommend new ones. Different to Spotify, users get
            recommendations only while listening to a radio. This takes away the
            burden of looking for music off the user, but Spotify does that too
            with their algorithm as well. <br />
            Shazam allows people to find the song they are listening to
            currently. Similar to Spotify, it also allows people to search for
            top charts and new songs, however those features are widely less
            known and used. It enhances how people find music naturally in the
            world, by enabling them to keep track of songs that they like.{" "}
            <br />
            SoundCloud allows people to search for music through playlists,
            similar to Spotify. Its more catered towards creators and people who
            are looking for smaller artists, since they have the appeal of
            anyone being able to post a song.
          </p>
          <h3>Redefining the People Problem</h3>
          <p>
            <i>
              People want to find new music, but they have a hard time looking
              for new songs or artists through the immense amount of existing
              music.
            </i>
          </p>
          <h2>Ideating</h2>
          <p>
            Now that I had all this information, it was time to get creative and
            problem solve!
          </p>
          <h3>Trends</h3>
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-trends.png"}
            alt="trends"
          />
          <h3>Journey Map</h3>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-journey-map.png"
            }
            alt="journey map"
          />
          <h3>Brainstorming</h3>
          <p>
            In order to come up with many diverse ideas, I brainstormed with my
            friends Rebecca, a third year nutrition major, and Ariel, a second
            year student undecided. They both have very different tastes in
            music and both use Spotify to listen to music. After the HMW (How
            May We)’s some of the restrictions in choosing Opportunity Areas
            were lack of visual problems and more algorithm based problems
            (specifically in the recommendations section). At the end of the
            brainstorming session, we chose these 3 solution spaces because we
            either thought they were very promising or interesting spaces. We
            thought the description and identifying what you like about a song
            spaces would be good to choose since we are dealing with a search
            problem. The social aspect was to potentially mimic how people
            ‘discover’ songs out in the real world.
          </p>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-brainstorming.jpeg"
            }
            alt="brainstorming"
          />
          <h3>Evaluation</h3>
          <p>
            To evaluate all our ideas, I conducted a SWOT analysis as well as
            weighed their feasibility vs. impact.
          </p>
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-swot.png"}
            alt="SWOT analysis"
          />
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-feasibility.png"
            }
            alt="feasibility vs. impact"
          />
          <p>
            Finally, I decided that <em>song tags</em> would be the best way to
            go. It’s a great answer to the people problem because it finally
            allows users to search for songs NOT based on the artist or song
            name, but
            <em>based on content</em>. It allows users to be more specific in
            what they want by searching multiple tags at a time, as well as let
            people look for songs that might not necessarily be in a playlist,
            especially since the Spotify playlists are repetitive. It’s better
            than some of the other features because at least for the features we
            came up with that aided people with what to search, it would not
            restrict their search to Spotify, since Spotify doesn’t really have
            a search mechanism at the moment that is content-based, as opposed
            to title based.
          </p>
          <h2>Designing: Building the Feature</h2>
          <p>
            I chose the feature, but now I need to flesh it out and think of
            what it will need and how it can be integrated into Spotify.
          </p>
          <h3>(Possible) Content Requirements: </h3>
          <ul>
            <li>
              Following a Tag: People might want song updates of a specific type
              of song
            </li>
            <li>
              Using multiple tags: This would enable users to find something
              really specific
            </li>
            <li>
              Everything should be able to be tagged — whether that be song,
              artist, or playlist — because right now users can only search from
              the name of the content.
            </li>
            <li>
              Tag recommendations: Users might not know what tags to look up
            </li>
            <li>
              Tags should be clickable, if you click on a tag you are lead to
              the ‘tag’ page
            </li>
            <li>Tag page</li>
            <li>
              Being able to play songs of a certain tag from your liked music
              (or playlists?)
            </li>
          </ul>
          <h3>Information Hierarchy</h3>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-info-hierarchy.png"
            }
            alt="information hierarchy"
          />
          <h3>Necessary Interactions</h3>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-interactions.png"
            }
            alt="interactions"
          />
          <h3>Medium Fidelity</h3>
          <p>
            I explored a couple options for where the tags would go and how a
            user can get to them.
          </p>
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-medfid1.png"}
            alt="mypic"
          />
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-medfid2.png"}
            alt="mypic"
          />
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-medfid3.png"}
            alt="mypic"
          />
          <h2>Testing and Refining</h2>
          <p>
            The flows I chose to prototype were the listening entry point, as
            well as the placeholder text underneath the search bar in the middle
            search mechanism point. I wanted to test out a few key things: if
            the user would be able to understand that the tags in the listening
            page are links, how clear it was that there would be tags on that
            page, and which placeholder text and description was better at
            telling the user that they can search for multiple tags as well as
            searching for songs and artists. So I came up with the following two
            tasks for my tested users to do:
            <ol>
              <li>I want to look for electronic traditional music in Arabic</li>
              <li>
                I want to find songs similar to the one I am currently listening
                to
              </li>
            </ol>
            In all three of my tests, none of the users searched for multiple
            tags — one searched for one or the other, and the other two searched
            for the query in one tag linking the words together. I found that
            the placeholder text helped people understand that tags required a
            hashtag symbol in front of the search query, but did not help them
            realize that they could search for multiple tags. It was not clear
            that there would be tags on the listening page before seeing it, but
            after seeing it, all of the users I tested figured out that you
            could click on the tags (probably because you could click on the
            artist already).
          </p>
          <h3>Iterations</h3>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-iterations1.png"
            }
            alt="mypic"
          />
          <img
            src={
              process.env.PUBLIC_URL + "post-content/spotify-iterations2.png"
            }
            alt="mypic"
          />
          <p>
            The entry points remained the same because they felt natural to the
            users, however I added a description for what the user could search
            for to make the search mechanism more clear. To additionally make it
            clear that the user could search for more than one tag, in the
            listening entry point, I added the option to search for all of the
            tags relevant to the song.
          </p>
          <p>
            I also added tag adding to the end points to make it easier for the
            user to add tags to their search and refine what they are looking
            for. In the case of a search from the listening entry, it would be
            other tags relevant to the song, but from the search bar it could
            potentially be machine learning based on either what other users who
            searched for this tag searched with it, or what tags the user tends
            to listen to.
          </p>
          <img
            src={process.env.PUBLIC_URL + "post-content/spotify-finalflow.png"}
            alt="mypic"
          />
          <p>
            The listening entry point was clear enough from the studies I
            conducted, so I didn’t feel the need to change it. In addition, I
            thought it was consistent with the current Spotify flow. The search
            entry point, I added a description because that was unclear from the
            research I conducted. In addition, to the last page I added a refine
            your search section to make it easier for users to refine and get to
            what they are searching for. I got rid of the two-page sorting, this
            way the user gets to the results they want faster and in addition,
            it is more natural to have the type selection on the top rather than
            on the bottom.
          </p>
          <h3>More Iterations</h3>
          <p>
            Some problems that my current flow has are that it is not clear tags
            can be pressed, and additionally, someone pointed out I should play
            around with the search results because they don’t need to
            necessarily be in list view. So I continued with explorations
            specifically tackling these two problems.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/spotify-moreiterations1.png"
            }
            alt="mypic"
          />
          <p>
            This exploration improves the song discovery experience, testing out
            if there are any methods better than list view.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/spotify-moreiterations2.png"
            }
            alt="mypic"
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/spotify-moreiterations3.png"
            }
            alt="mypic"
          />
          <p>
            This exploration tries to tackle the problem of multiple tags and
            enabling the user to refine their search. Some were by emphasizing
            that the tags are links, but the others are selectable (kind of like
            refining a shopping search).
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/spotify-moreiterations4.png"
            }
            alt="mypic"
          />
          <p>
            This was the most important exploration I did, where I tried to come
            up with ways to show that tags are clickable and interactive.
          </p>

          <h2>Visual Design</h2>
          <h3>Setting Goals</h3>
          <p>
            The only thing that may be better solved by visual design is showing
            that tags are clickable or links, however I think since Spotify
            tends to use minimal colors (white, black, and green) using a new
            color wouldn’t be fit, and Spotify green for symbols usually means
            it’s toggle-able, and these are links. The links (album names and
            artists) are currently not a different color.
          </p>
          <h3>Simplifying Elements</h3>
          <p>
            The added elements were the underlined texts for tags, which are
            needed because tags need to be differentiated from other elements in
            the sense that they are clickable and interactive. Another is the
            sorting tab with songs, artists, playlists, and albums as that’s how
            the new search structure will sort search queries so there needed to
            have a way to show what tab the user is on (how it looks like active
            vs inactive).
          </p>
          <h2>Putting it All Together</h2>
          <ReactPlayer url="https://www.youtube.com/watch?v=wAdp4pb8lgY" />
          <h2>Room for Improvement</h2>
          <p>
            The goal of this project was to experience the entire design process
            from start to finish. If I had more time on my hands, I would have
            conducted <em>more user testing</em> in order to really get more
            accurate results with regards to how to improve the user flow and
            the visual design. I would have also <em>explored</em> more
            iterations with respect to user flow and visual design, especially
            when it comes to the tag page and the content requirements I came up
            with. Finally, I didn't explore the artist-side user experience with
            tags, which answers the question of who tags content. The next steps
            would be to really delve deep into each content requirement and
            analyze them individually.
          </p>
        </div>
      ),
      category: "User Experience Design",
    },
    {
      title: "Instagram Albums",
      description:
        "What at first was an exploration to cater to the travel niche on Instagram turned out to be a new feature idea centered around events.",
      date: "August 2019 - September 2019",
      rendering: (
        <div class="post-wrapper">
          <p>
            One of the biggest things social media does right is enabling people
            to share and remember life experiences and events, especially with
            people who are far away. This is all too familiar to me, as the
            majority of my communication with my family abroad is through social
            media. Today, people take hundreds of pictures from a specific
            event, and there’s no way to share them all (or most of them)
            without either overwhelming your feed or having to access them one
            by one by posting multiple pictures in one post.
          </p>
          <h2>Searching for Problems</h2>
          <p>
            I originally wanted to explore the travel niche on Instagram, but
            after conducting some interviews with my friends and family,
            although I didn’t get much information about the travel niche, I got
            some information about personal Instagrams.
            <ol>
              <li>
                <i>
                  When I experience an event, I want to share my experiences, so
                  I post on Instagram.
                </i>
              </li>
              <li>
                <i>
                  When I experience an event, I want to remember my experiences,
                  so I post on Instagram.
                </i>
              </li>
            </ol>
            So the two main reasons for people who use Instagram for personal
            reasons is to <em>share</em> and to <em>remember</em>.
            <br />
            Instagram is a social media platform, and as such it enables us to
            share things that are going on in our lives. It specifically does it
            through images, allowing us to share snapshots of events happening
            in our lives.
            <br />
            It’s true that remembering is really not the point of Instagram, but
            it brings up an interesting point — what if I want only want certain
            people to remember certain things? Meaning, I want to share my
            travels with my mom who follows me (hi mom!), but not my drunken
            college parties (sorry mom…). And this is why Instagram introduced
            the close friends feature for stories, but could something similar
            be done to feeds? Additionally, often people post a few highlights
            of trips or events on their feeds (many times wanting not to
            overwhelm their followers with posts), but what do I do if I want to
            remember it all? Not just the highlights. What do I do if:
            <br />
            <i>
              I don’t just want to remember one picture (one event or moment)
              from every couple of days, rather I want to remember all of the
              amazing 10 or 20 or even more pictures (or events or moments) I
              have from that day?
            </i>
            <br />
            And honestly, the same goes with sharing. What if you want to share
            your whole memory with people who are interested? Or if you want to
            categorize your posts, grouping together your posts from each year
            of college?
            <br />
            To my surprise, I ran into a couple of people telling me that they
            make private accounts and don’t let anyone follow them, just for
            that reason! To put all their pictures in them from a certain event,
            kind of like modern-day albums, so that they can go back and look at
            them. So in addition to their main account, they would have
            additional ones that are called something like: yaelsgraduation15,
            meandbaeinrome18, and so on and so forth.
            <br />
          </p>
        </div>
      ),
      category: "User Experience Design",
    },
    {
      title: "LingUp",
      description: "How do we get more people to learn a new language?",
      date: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "User Experience Design",
    },
    {
      title: "HopIt",
      description: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "Visual Design",
    },
    {
      title: "Artist&Title",
      description: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "Visual Design",
    },
    {
      title: "Addictiveness Project",
      description: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "User Experience Design",
    },
    {
      title: "Office Hours App",
      description: "",
      rendering: <ComingSoon></ComingSoon>,
      category: "User Experience Design",
    },
    {
      title: "Play Among the Michelin Stars",
      description:
        "Data visualization exploring Michelin star restaurants across the globe.",
      rendering: <ComingSoon></ComingSoon>,
      category: "Data Visualization",
    },
  ];

  constructor(props) {
    super(props);
  }

  handleClick(proj) {
    this.props.clickHandler(proj);
  }

  render() {
    const project_titles_render = [];
    const project_categories_render = [];

    for (let proj of this.projects) {
      var class_name =
        "project-title " + "title-" + proj.category.split(" ").join("");
      project_titles_render.push(
        <a
          className={class_name}
          onClick={() => this.handleClick(proj)}
          project={proj}
          comingSoonHandler={this.props.comingSoonHandler}
        >
          {proj.title}
        </a>
      );
      var class_name = "project-category " + proj.category.split(" ").join("");
      project_categories_render.push(
        <a className={class_name}>{proj.category}</a>
      );
    }

    return (
      <div id="projects-container">
        <div className="projects-titles">{project_titles_render}</div>
        <div className="projects-categories">{project_categories_render}</div>
      </div>
    );
  }
}
