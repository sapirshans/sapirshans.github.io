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
            within Spotify, I decided to focus on <em>music discovery</em>.
            Spotify's discover section, although improving, is weak. It works,
            but it could be a lot better. The whole point of the discover
            section is to make it <em>easier</em> for the user to rummage
            through the almost infinite number of existing songs there are in
            the world so they could find the songs that they will like. There
            are still many overwhelming things on the discover section, and in
            addition many playlists have either repetitive artists or songs.
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
            To look into this problem, I both conducted user research in person
            and online through a survey and an interview, as well as market
            research.
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
            In order to come up with many diverse ideas, I brainstormed with two
            friends. They both have very different tastes in music and both use
            Spotify to listen to music. After the HMW (How May We)’s some of the
            restrictions in choosing Opportunity Areas were lack of visual
            problems and more algorithm based problems (specifically in the
            recommendations section). At the end of the brainstorming session,
            we chose these 3 solution spaces because we either thought they were
            very promising or interesting spaces. We thought the description and
            identifying what you like about a song spaces would be good to
            choose since we are dealing with a search problem. The social aspect
            was to potentially mimic how people ‘discover’ songs out in the real
            world.
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
            especially since the Spotify playlists are repetitive. It's better
            than some of the other features we came up with because it
            introduces a search-mechanism to Spotify that is{" "}
            <em>content-based</em> rather than title-based.
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
            iterations with respect to user flow and visual design. Especially
            in regards to the tag page and the content requirements I came up
            with. Finally, I didn't explore the artist-side user experience with
            tags, or the question of <em>who tags items</em>. The next steps
            would be to really delve deep into each content requirement and
            analyze them individually. Finally, due to time-constraints I also
            put together a quick prototype, but I would have added more examples
            and animations to it to make it more seemless.
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
          <p>
            And my first reaction to that was <br />
            <br />
            <i>THAT’S A GREAT IDEA! I SHOULD START DOING THAT TOO!</i> <br />
            <br />
            But I'm a designer-- <br />
            So my head took me in a different direction...
          </p>
          <p>
            <i>
              PROBLEM: When I have multiple pictures from an event or an
              experience, I want to group them together in order to either
              remember them better or make them more easier to share (whether to
              only share with certain people, or to not overwhelm my feed with
              posts), but I can’t do that well because there is no feature that
              groups my posts.
            </i>
          </p>
          <h2>Brainstorming Solutions</h2>
          <p>
            As I tried coming up with a number of different unique solutions
            that solved the problem, I decided that the best one was similar to
            the current existing solution: Insta-Albums. It would provide people
            a way to share numerous photos, however it would offer them their
            own space-- something that a post or story cannot do.
          </p>
          <h3>Insta-Albums-- What Exactly Are They?</h3>
          <p>Now to flesh out the basic idea.</p>
          <p>
            <em>Basic Idea: </em>
            Some sort of collections-like feature where the user can upload
            images just like regular Instagram posts.
            <br />
            Now for some important questions to flesh out this concept:
            <ul>
              <li>What features should these albums include?</li>
              <li>
                How will the user access these Insta-albums? Where should they
                fall in the current information hierarchy?
              </li>
              <li>How should the page or section look like?</li>
            </ul>
          </p>
          <h3>What features should these albums include?</h3>
          <p>
            With the problem I identified in mind (people want to post multiple
            photos of one event grouped together), I listed all potential
            features weighed how much they made sense and crossed off the ones
            that did not fit. I ended up with these:
            <ul>
              <li>Title</li>
              <li>Description</li>
              <li>Collaborators (and managing them)</li>
              <li>
                Posts: posts that are shared in your feed, and posts that aren’t
              </li>
              <li>Adding posts after the fact / Removing posts</li>
              <li>Adding multiple pictures as different posts</li>
              <li>Followers</li>
              <li>Managing who can see your album</li>
              <li>Album feed</li>
            </ul>
            Some ideas that I ended up cutting were having a forced
            chronological order, which I originally thought was a good idea, but
            then realized that if someone is potentially compiling pictures
            after a period of time, they would want to be able to order them
            accordingly. Another one was to have the collaborators and users who
            can see the album one and the same, which I thought wouldn’t make
            sense for cases of people sharing an experience with people who
            weren’t there (like a vlog or something).
          </p>
          <h3>
            How will the user access these Insta-albums? Where should they fall
            in the current information hierarchy?
          </h3>
          <p>
            I drew out the information hierarchy, and given the features I just
            laid out, and the functionality of an album, I weighed the pros and
            cons of putting it in different positions.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/instagram-info-hierarchy.jpeg"
            }
            alt="mypic"
          />
          <p>
            There are two current post types on Instagram — the o.g. regular
            posts and stories, which can both be accessed from the main page.
            Post types can be accessed in two ways — viewing/editing and adding.
            What I’m proposing is essentially a new post type, similar to what
            regular posts are, but not quite. This is why all the nodes that
            connected to stories were out of the question, because they’d give
            the wrong idea of what the functionality of the new post would be.
            Stories are more of a live update, while albums are more of a
            compilation device.
          </p>
          <p>
            <em>Viewing</em>
          </p>
          <p>
            It would make sense that, like the other post types, albums were
            given a spot on the profile page. Similarly, they should also be
            given a platform on the main page. In the case of the accounts page,
            there are multiple locations it can be within it — underneath or
            over where the stories are, on the bar with the account pictures, or
            in the hamburger nav bar in the top right corner. This is how each
            of those would look like, roughly (new feature is shown in red):
          </p>
          <div class="flex-row">
            <img
              src={
                process.env.PUBLIC_URL +
                "post-content/instagram-profile-pos-1.png"
              }
              alt="mypic"
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "post-content/instagram-profile-pos-2.png"
              }
              alt="mypic"
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "post-content/instagram-profile-pos-3.png"
              }
              alt="mypic"
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "post-content/instagram-profile-pos-4.png"
              }
              alt="mypic"
            />
          </div>
          <p>
            After reviewing these wireframes, I’ve decided to go with the first
            one — to place the new feature in the bar with account pictures.
            Next to the stories it looks too cluttered and feels like it should
            open up a pop-up, similar to the stories. In the hamburger nav, it
            feels more like a personal setting, which would make it unfit to
            potentially share, but on the bar, it feels like it should be part
            of the sharing experience of Instagram as well as an element of the
            account, as are the rest of the buttons in that bar.
          </p>
          <p>
            In the case of the main page, there are also multiple options for
            location — it can be on the top bar, over or under the stories bar,
            or integrated with the main feed. It wouldn’t make sense for it to
            be on the top bar since none of the top bar buttons (add to story,
            tv, and DMs) have anything to do with this new feature. I sketched
            out wireframes for the latter two and listed what each would imply.
          </p>
          <img
            src={process.env.PUBLIC_URL + "post-content/instagram-main-pos.png"}
            alt="mypic"
          />
          <p>
            I ended up deciding on the second wireframe where in place of the
            profile name would be the album name, since it makes albums similar
            to posts as well as makes the album the focus. But that still leaves
            the questions of where the add feature would be.
          </p>
          <p>
            <em>Adding</em>
          </p>
          <p>
            As I discussed earlier, since stories were out of the question, the
            only nodes left were either conjoined with posts or their own
            separate thing. A potential problem with the first option was that
            it could potentially take away from the regular posts feature, as
            each time you’d make a post, you would have to choose if it was
            either a post or an album, however, the problem with the latter
            option was finding a place to put it that is not too confusing. I
            looked to Facebook albums for advice. Facebook albums have two
            methods of adding an album, through posts (on the main page) and
            through the albums page. Inspired by this I thought that when
            creating a post, you should have the option to add it to an album,
            existing or non-existing and when you open the albums page, you
            should have the option to create an album. So in a sense, it should
            both be joined to adding a post, but also be its own thing. I
            sketched some wireframes of this as well to decide where in the flow
            of creating a regular post it should go, but because I haven’t
            designed the albums page yet, I tabled the second add feature for
            later.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/instagram-album-creation.jpeg"
            }
            alt="mypic"
          />
          <p>
            I decided upon the third section of wireframes where the user can
            select the album where he or she would select the location, and, in
            addition, the user would be able to convert a multiple photos post
            to individual album posts.
          </p>
          <p>
            <em>How should the section and pages look like?</em>
          </p>
          <p>
            For the section section (no pun intended), I decided to draw
            inspiration from the existing feed, collection, and Facebook Albums.
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/instagram-section-inspo.png"
            }
            alt="mypic"
          />
          <p>
            They are all similar in the sense that they use a grid format,
            although both collections and Facebook albums use 2 columns instead
            of the 3 column format that the feed uses. Additionally, both the
            Facebook albums and collections have titles on their display page —
            so it would make sense that they use 2 columns instead of 3 so that
            the title texts don’t have to be so small. The differences between
            the two are that the Facebook albums include the number of posts,
            while collections omits them, the add buttons are in different
            places, and collections has all posts, while Facebook albums don’t.
            The solution that would make the most sense is having the
            collections and Facebook albums grid in the layout of a user profile
            like so:
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/instagram-section-wireframe.png"
            }
            alt="mypic"
          />
          <p>
            I considered replacing the post add button with the create an album
            button, but I thought the replacement would be too unclear and
            confusing for users.
          </p>
          <p>
            Now that we have the section laid out— what will the Insta-album
            page itself look like? <br />
          </p>
          <p>
            In order to answer this question, I first analyzed what content the
            page will hold.
            <ul>
              <li>
                The page holds the album, so the initial page must contain a
                presentation of the album. That is the main content. (This part
                is taken care of)
              </li>
              <li>
                The albums hold the posts, so there must be some way to get to
                them.
              </li>
              <li>
                And the posts should function just as any other Instagram post.
              </li>
            </ul>
            Kind of like babushka dolls:
          </p>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/instagram-babushkas.png"
            }
            alt="mypic"
          />
          <p>
            Taking all things into consideration I started brainstorming and
            creating sketches of what potential Insta-album pages could look
            like. I decided upon this configuration:
          </p>
          <img
            src={
              process.env.PUBLIC_URL + "post-content/instagram-album-page.png"
            }
            alt="mypic"
          />
          <p>
            Similar to a user profile, I figured it should be a header with a
            grid too. In addition, I thought it would be a good idea to let the
            user be able to add a little description of the album if they wanted
            to, similar to a profile bio. There shouldn’t be a profile picture,
            because the album itself is filled with pictures. So really there
            should only be a description at the top. I kept the bar with
            different ways to display the posts — grid view, feed view, but
            tagged wouldn’t be needed since it is an album and not a person. I
            also kept the bottom bar since both saved and the profile had it.
          </p>
          <h2>Final Feature</h2>
          <p>
            Although the Album page itself changed a little bit from its
            wireframe iteration, after realizing that it would fit better if it
            looked more like something that already existed within Instagram,
            this was the final product:
          </p>
          <img
            src={
              process.env.PUBLIC_URL +
              "post-content/instagram-albums-final.jpeg"
            }
            alt="mypic"
          />
          <h2>Reflection</h2>
          <p>
            One thing I could have done to improve the solution was to conduct
            user testing, something that I neglected due to time constraints and
            wanting to practice iterations and wireframing. I'm overall really
            happy with the end high-fidelity mockups. I put a lot of work into
            them and felt that I really improved my ability to work within an
            existing branding scheme.
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
