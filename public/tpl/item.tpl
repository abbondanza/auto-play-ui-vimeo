<script type="text/template" id="item-tpl">
    <img src="<%= model.thumbnail_small %>" />
    <h1>
      <%= model.title %>
    </h1>
    <span class="user-name">
      from <%= model.user_name %>
    </span>
    <span class="date-added">
      Added <%= model.dateAdded %>
    </dspan>
    <div class="info">
      <% if (model.stats_number_of_plays) { %> <span class="views"> Views <%= model.stats_number_of_plays %> </span> <% } %>
    </div>
</script>