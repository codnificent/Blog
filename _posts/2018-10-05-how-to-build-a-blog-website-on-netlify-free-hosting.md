---
layout: post
title: How to build a blog/website on Netlify + free hosting
date: 2018-10-05T16:20:26.268Z
categories: Web
---
Before we begin, I need to set a goal. The goal here is to make sure that you should be able to create your own site by yourself after or maybe while reading this article. Do you need a blog or a website? A free hosted site where you don't have to be afraid of loosing your contents if anything goes wrong? A site where you can add contents using your mobile device? A site that...? Well let's just get into it.

Alright. I want to tell you a story if you don't mind. Weeks ago, I created a blog. Okay, let me not use the world "created". Weeks ago, I tried to edit a website's theme. I could edit the theme, I could bend the default theme to suit my need. But there was a problem though.

Files are too many, Up to 13 CSS files. And if I needed to edit a CSS property, I had to scan through those files. Nightmare!

That theme gave me a lot of troubles. You know what the worst part was? The website could only contain up to 4 blog posts. 

When I discovered this, I was like.. Okay, now you can shoot me! I Needed a blog and now I've got a website that could only take up to 4 blog posts.

Are you telling me that this wasn't the right time to quit? Well, the end result of everything was that I didn't try to find where the limit for the blog posts was defined. I didn't even try to look at the theme again.

I deleted my repository where the site was stored. I deleted a website with four articles. And... Do you know what I did next? I started all over again. But this time I chose a different site generator.

Should you be wondering the relevance of this story? My plan is to explain that sometimes it is better to build your own theme than trying to configure already built ones.

Don't get me wrong. I'm not saying that you're going to build a theme from scratch. The point is that making the right choice is what determines how fast we can get our blog up and running.

With those being said, let's get into the main thing. In this guide, I'm going to show you how I built my blog with Jekyll static site generator.

Jekyll is a very popular static site generator. There are other static site generators for difference purposes. If you want a detailed list of them and the number of stars they've got on GitHub, check out this [site](https://www.staticgen.com/)

In order to work with jekyll locally, you need to install Ruby, if you're using windows machine.

For Linux users, run this command in the terminal `ruby -v`. This would print out the ruby version.

> Don't think that this is too much of a task to do. Everything is simple here!

#### The steps

* Follow this steps to install ruby on your machine
* Visit [Rubyinstaller for Windows](https://rubyinstaller.org/). Download the installer
* While installing, make sure you have internet access
* When the program runs, you need to install the three packages labelled 1, 2 and 3.
* It's easy! Just press 1 and hit enter to install first package
* Press 2 and hit enter to install the second one ... You get the idea.
* When everything is installed, open another terminal and run, `ruby -v`
* You should also run `gem -v`to make sure that that gem is installed.

You can co-relate gem to npm. A package manager in the ruby world. Visit this [site](https://jekyllrb.com/docs/ruby-101/) for more info.

When you're sure that ruby and gem are installed, you can now run `jekyll new <your site's name>`. This will create a directory in the path you ran the command. 

There's one more thing that you need to install. A bundler. Run this command; `gem install bundler`. When this is done, run this `bundle install` to install the gems(see 'gems' as packages), then `bundle exec jekyll serve` to build your site.

Now you're good to go! Just run `jekyll serve`. And that's it! You should be able to see your site live at localhost:4000. This site uses a theme called minima - a very simple theme. But, if you wish, you can use another theme of your choice. Visit [Jekyll themes](http://jekyllthemes.org/) to choose a theme you like.

![Jekyll Themes](/static/uploads/jekyllthemes.png)

Okay, now is the perfect time to bend your new site to your needs. One thing you need to know at this point is that for you to be able to edit your theme perfectly, you need to bring in the whole files for the theme. 

Run this command `bundle show minima`. The 'minima' is the theme's name, you can put the name of the theme you're using.

Hey! if you're having troubles with any part of the installation processes, the [jekyll docs}(https://jekyllrb.com/docs/) might help.

When you run `bundle show <theme name>`, you will see the directory where the files for your theme are located. Just go in there and grab the files that you need.

Example of these files you might need to put into your working folder are: the `_includes`, `_sass`, `_posts`, `_layouts`.

These files are where you basically need to make all your changes. Don't edit the `_site` folder. That's where your final site get bundled into. You have two configuration files you can edit, the `gemfile`, and the `_config.yml` file.

>Important tip!
Anytime you make a change in the `_config.yml` file, make sure to restart the server with `jekyll serve`.

You got that? Perfect! Simple stuff...

When you're satisfied with the look and feel of your new site, now is the time to host it.
At this time, you will need to add a new folder in your site. There's a perfect article to show you how to do this. [Here!](https://www.netlifycms.org/docs/add-to-your-site/)

These new folder is for the hosting service and the CMS - Netlify CMS.

Before you could integrate your site with Netlify, your site need to be hosted on a git platform. GitHub is a perfect choice.


The final result of all these processes is that you've got yourself a nice blog. Share contents as much as you like. 

That's it guys! Thanks for your time and congratulations for making it this far.
If you get stuck at any point, I might help. Just drop the problem in the comment bellow. 
Enjoy!

Read about [Asynchronous request in javascript](https://mordernweb.com/javascript/2018/10/03/asynchronous-requests-in-javascript.html)

