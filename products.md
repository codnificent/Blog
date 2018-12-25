---
layout: page
title: Products
permalink: /products/
---

<h3>Choose from both physical and digital products</h3>

> **Physical** 

<ul class="post-list">
  {%- for product in site.clothes -%}
  <li class="post-item">
    <img class="post-image" src="{{product.thumbnail }}" alt="{{ product.title }}">
    <h5 class="post-heading">
      <a class="post-link" href="{{ product.link }}">
        {{ product.title | escape }}
      </a>
    </h5>
    <span class="post-meta p-author">{{ product.discount }} discount</span>
    <h3 class="product-price" style="float: right;">{{product.price}}</h3>
    <br>
    <span style="background-color: #f50057; border: 1px solid #f50057; border-radius: 6px;"><a href="{{ product.link }}" style="color: white; padding: 0px 3px;">Shop Now</a></span>
    
  </li>
  {%- endfor -%}
</ul>

> **Digital**

If you wish to read my book about the bad habit between bad habits and self-discipline, go ahead.

Get the free eBook <b>[NOW]({{site.url}}/assets/Bad-Habits-Vs-Self-Discipline.pdf)</b> and start right away!