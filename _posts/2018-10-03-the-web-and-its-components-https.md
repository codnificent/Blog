---
layout: post
title: 'The web and its components (HTTPS:)'
date: 2018-10-03T10:44:51.051Z
categories: Web
---
We use the Web almost every day. When we connect to friends on social media, stream
videos on YouTube, search for something on Google, and lots more, all these
media are platforms of the Web. Now we can see the need to understand how the
Web works so we could use it more effectively and/or responsibly - considering cyber security issues.

#### What to expect

* The web and the internet
* How the web works
* HTTPS and website security
* Optimizing the web for better performance
* Conclusion and final thought


#### The Web and the Internet

Some people take the web to mean the same thing as the internet. But they are not the same. The internet has already been in existence before the Web came along. 

The internet can be seen as a means of communication or a links that connect different devices. And the web? Let's take it to be the collection of information warehouses. One of these warehouses could be your computer.

If it's still not so clear, I believe **[Wikipedia](https://en.wikipedia.org/wiki/World_Wide_Web)** nailed it: The World Wide Web, also called the Web, is an information space where documents and other web resources are identified by Uniform Resource Locators, interlinked by hypertext links, and accessible via the Internet.

Alright. Let's move on with the hope that everything is still okay.

#### How the Web Works

Browsers are built to utilize the internet and the web. Though they are not the only tools that use the internet and the web.
Other web-based apps like Twitter, Whatsapp, Facebook also use the internet and the web.

Understanding how the web works is not usually always easy. This is because it requires the basic understanding of some somewhat complicated mechanisms. 

Mechanisms like **[routing](https://guide.meteor.com/routing.html)**, **[client-server connections](https://en.wikipedia.org/wiki/Client–server_model
)**, **[request-response circle (round trip)](https://www.slideshare.net/cczona/full-stack-full-circle-what-the-heck-happens-in-an-http-requestresponse-cycle)**, **[DNS](https://en.wikipedia.org/wiki/Domain_Name_System)**, **[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
)**, **[URL](https://en.wikipedia.org/wiki/URL
)**, **[packets](https://en.wikipedia.org/wiki/Network_packet)**, **[bandwidth](https://www.webopedia.com/TERM/B/bandwidth.html)**, **[TPC](https://en.wikipedia.org/wiki/TPC)**, **[IP](https://en.wikipedia.org/wiki/IP_address)** etc.

All of these? Wow! This is huge. Seriously. But, no need to worry. We don't actually need to go too deep into those - just a basic knowledge.

Writing about all of these mechanisms is a waste of time. It's already been written by someone else.So, I encourage you to go over any of these that you feel is important to you.

Most people don't really care about all these things. Thinking of it clearly, why should they even care? Since there browser is functioning properly and the web-based apps that they use aren't misbehaving, why should they care about knowing how the web works?

Well, If I must say why people should care, I would say because they need the basic knowledge at least in order to protect themselves and the integrity of the web in general.

#### HTTPS and website security

Website security is one of the things we need to consider while building or
acquiring websites or even using websites. But what if the HTTPS encryption that we depend on got
compromised? Whaaat?, Got compro what? Don't mind me. It's a joke. Anyways, let's look at https and what makes it so special.

HTTPS is just a more secure version of HTTP. Oh! Sorry. HTTPS stands for Hypertext Transfer Protocol Secure. 

This extra layer of security means that the browser uses SSL/TLS to protect websites' traffic.

TLS and SSL are slightly different. [TLS (Transport Layer Security) ](https://en.wikipedia.org/wiki/Transport_Layer_Security) uses stronger encryption algorithms than SSL (Secure Sockets Layer).

These encryption algorithms are beyond the scope of this article. Now, let's get to HTTPS and its features.

The more secure channel that HTTPS creates helps to protect streams of data against eavesdroppers, man-in-the-middle or more generically, hackers' attacks.

In order to avoid these attacks, there's a need to consider many things while making use of any site.

>These things that need to be considered include the following:

* The user (which in this case, You) should trust  the implementation of HTTPS with correctly pre-installed certificate authorities. (List of certificate authorities: [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt) , [Digicert](https://en.wikipedia.org/wiki/Digicert), [Comodo](https://en.wikipedia.org/wiki/Comodo_Group), [GoDaddy](https://en.wikipedia.org/wiki/GoDaddy) and [GlobalSign](https://en.wikipedia.org/wiki/GlobalSign)).


* The user trusts the certificate authority to vouch only for legitimate websites. 

* The website provides a valid certificate, which means it was signed by a trusted authority.


* The certificate correctly identifies the website (e.g., when the browser visits "https://example.com", the received certificate is properly for "example.com" and not some other entity).


* The user trusts that the protocol's encryption layer (SSL/TLS) is sufficiently secure against eavesdroppers.

Source: **[Wikipedia](https://en.wikipedia.org/wiki/HTTPS)**

This is just saying that we should be careful my entering our personal information to any website. 

By now, I believe that we should know that any website that does not have the padlock symbol at the top-left corner of URL bar is not a secure website. Just a reminder though.

And again, I'm sure you wouldn't want a situation where your website use experience is compromised because of malware and other internet threats. Always be careful of the information you enter into a website. First, make sure website communication channel is encrypted. Also, be careful of the links you click. >Just a reminder though :)

When it comes to securing our websites, most of what you need you could find them at **[HTTPS](https://en.wikipedia.org/wiki/HTTPS)**



#### Optimizing the web for better performance

This is just a basic development pattern than developers need to apply in order to developer fast websites.

This pattern is all about reducing the round-trip the browser needs to make before it could render page content properly. and, reducing the size of page contents like images, unnecessary libraries, plugins etc.

This is achieved by the use of inline styling and/or scripting where necessary, the use of compression tools like [gulp](https://gulpjs.com/), [grunt](https://gruntjs.com/
) etc. The use of [image sprites](https://www.w3schools.com/css/css_image_sprites.asp) is helpful too.

#### Conclusion and final thought
I know this article is not the coolest one you could find but I believe it gives you heads up on what you need to know before you could properly understand how the web works.

Also the content in this article are kind of scattered. Just bear with me and take the part that interests you.

As always, thanks for reading and be sure to come back next time 😊

If you wish, check out my post on [asynchronous requests in JavaScript](https://mordernweb.com/javascript/2018/10/03/asynchronous-requests-in-javascript.html)
