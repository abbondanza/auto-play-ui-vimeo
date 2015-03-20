  <script type="text/template" id="content-tpl">
    <article class="content-card">
      <header>
        <h1>
          <%= model.title %>
        </h1>
        <span class="user-name">from <a href="<%= model.user_url %>" target="blank"><%= model.user_name %></a></span>
      </header>
      <div class="video-container">
        <iframe src="//player.vimeo.com/video/<%= model.id %>/?api=1" 
          width="640" 
          height="360"
          frameborder="0" 
          webkitallowfullscreen 
          mozallowfullscreen 
          allowfullscreen>
        </iframe>
      </div>
    </article>
    <article class="content-card stats">
      <div class="third-divider">Plays<span class="number"><%= model.stats_number_of_plays %> </span> </div>
      <div class="third-divider">Likes<span class="number"><%= model.stats_number_of_likes %> </span> </div>
      <div class="third-divider">Comments<span class="number"><%= model.stats_number_of_comments %></span> </div>
    </article>
    <article class="content-card info">
      <h2>Description</h2>
      <p> <%= model.description %> </p>
      <!--<div class="more-info-description"><span>More Info</span></div>-->
    </article>
</script>