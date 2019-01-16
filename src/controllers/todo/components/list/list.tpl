<ul class="tasks">
  <% for(var i = 0, len = locals.length; i < len; i += 1) { %>
    <% if (locals[i].checked) { %>
      <li class="isChecked" data-id="<%- locals[i].id %>">
        <%- locals[i].name %>
      </li>
    <% } else { %>
      <li data-id="<%- locals[i].id %>">
        <%- locals[i].name %>
      </li>
    <% } %>
  <% } %>
</ul>