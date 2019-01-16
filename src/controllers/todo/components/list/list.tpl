<ul class="tasks">
  <% for(var i = 0, len = locals.length; i < len; i += 1) { %>
    <% if (locals[i].checked) { %>
      <li class="isChecked" data-id="<%- locals[i].id %>">
        <span><%- locals[i].name %></span>
        <button>remove</button>
      </li>
    <% } else { %>
      <li data-id="<%- locals[i].id %>">
        <span><%- locals[i].name %></span>
        <button>remove</button>
      </li>
    <% } %>
  <% } %>
</ul>