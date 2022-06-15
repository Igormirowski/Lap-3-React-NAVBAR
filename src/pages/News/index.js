import React, { useState, useEffect } from 'react';
import { Greeting, ReaderCount, Headlines, FeaturedArticle, Jokes, FaveButton } from '../../components';

const News = () => {
  const [ featuredId, setFeaturedId ] = useState();
  const [ showJokes, setShowJokes ] = useState(false);

  const toggleJokes = () => setShowJokes(prevState => !prevState)

  return(
    <div className="news-reader">
      <h1>A Real State of Events</h1>

      <aside>
        <Greeting />

        <ReaderCount />

        <article aria-label='jokes' id="fun" style={{border: "1px dashed grey", margin: "10px"}}>
          { showJokes ? <Jokes close={toggleJokes} /> : <button onClick={toggleJokes}>Tell me some Jokes!</button>}
        </article>
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>

      </aside>

      <section>
        <Headlines handleSelect={setFeaturedId}/>

        { featuredId && <FeaturedArticle storyId={featuredId} /> }
      </section>

    </div>
  );

};

export default News;