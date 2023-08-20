---
layout: post
title: How to Get Free SSL (HTTPS) with Github Pages
date: 2018-12-27
categories:
  - websites
comments: true
tags:
  - blog
  - branding
  - business
  - domain
  - entrepreneur
  - portfolio
  - professional
  - resources
  - tips
  - web design
  - website creation
  - ssl
  - security
  - https
  - namecheap
  - github pages
excerpt: >-
  I have really been feeling the urge to write for the past month while I have
  been working full time rebuilding my website from scratch to host on Github
  Pages for free. Once I attached my custom domain  to this new site, I
  worried about not being able to take advantage now of the free SSL I got on
  Namecheap.com from my purchase of one year of hosting on their servers. Lo and
  behold, I didn't need to worry because it turns out I can get free SSL on top
  of my free hosting with Github Pages, and in this blog post I will show you
  how to do it.
img: freessl.png
---

<p><first-letter>I</first-letter> have really been feeling the urge to write for the past month while I have been working full time rebuilding my website from scratch to host on Github Pages for free. Once I attached my custom domain  to this new site, I worried about not being able to take advantage now of the free SSL I got on Namecheap.com from my purchase of one year of hosting on their servers. Lo and behold, I didn't need to worry because it turns out I can get free SSL on top of my free hosting with Github Pages, and in this blog post I will show you how to do it.</p>

<h2>Step 1: Change your A Records or Add New Ones</h2>

I covered in my other tutorial about <a href="{{ site.url }}/2018-blog/posts/how-to-connect-a-custom-domain-to-your-site-for-free">how to add custom domains to Github Pages</a> how easy the process really is. In order to get SSL to work on your website, all you have to do is add or change some IP addresses in your Github Pages A records. On Namecheap, go to your dashboard and click on the button that says "Manage" next to your domain name you want to use for your Github Pages site. In the "Domain" tab of this page, make sure that the Nameservers  are set to Namecheap BasicDNS in order to point the apex domain or www. domain to your Github Pages site from Namecheap. Next, in the "Advanced DNS" tab of this page, add a new A record or change an old A record that has any of the following four IP addresses. You can use any or all of these IP addresses for your A records:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Make sure your CNAME record has a host of "www" and a value of "_yourusername_.github.io." with _yourusername_ being your Github username. To use a custom subdomain, use whatever word you want to use for your subdomain as a host instead of "www".

<img src="{{ site.url }}/img/sslnamecheapconfiguration.png" class="img-fluid">

<p class="caption">My own Namecheap configuration</p>

<h2>Step 2: Enforce HTTPS in Your Github Pages Site Settings</h2>

Next, go to your repo Settings and scross down to the section labeled "Github Pages". After you save your custom domain, you should be able to click on the checkbox that says "Enforce HTTPS" if you set up your CNAME and A record(s) successfully. Note that your site may have issues unless you make sure to add "www." in front of your custom domain. This was what I had to do.

<img src="{{ site.url }}/img/sslsuccess.png" class="img-fluid">

<p class="caption">This is what you should see after a few minutes if it was a success.</p>

<h2>Step 3: Clean Up Your Mixed Content</h2>

One issue I encountered was that for a few hours the connection to my site was marked as "insecure" by my browser. Knowing that this warning is often thrown if my site has mixed content (sources from an unsecure HTTP url such as images) I went ahead and made sure the images on my site were all from HTTPS. Note that it takes a few hours for the connection to become secured.

<img src="{{ site.url }}/img/httpssuccess2.png" class="img-fluid">

<p class="caption">The final result, verified by <em>Let's Encrypt</em>.</p>

Your new SSL is thanks to <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a>, a "free, automated, and open Certificate Authority" as a _Linux Foundation Collaborative Project_. Neat stuff.

<h3> References</h3>
- <a href="https://help.github.com/articles/setting-up-an-apex-domain/" target="_blank">"Setting up an apex domain" on Github Help</a>
- <a href="https://lizlorena.com/2018-blog/posts/how-to-connect-a-custom-domain-to-your-site-for-free">"How to Connect a Custom Domain or Subdomain to your Site For Free Using Namecheap"</a>
- <a href="https://letsencrypt.org/" target="_blank">Let'sEncrypt.org</a>, providers of the free SSL
- <a href="https://pages.github.com" target="_blank">Github Pages</a>
- <a href="https://namecheap.com" target="_blank">Namecheap.com</a>



