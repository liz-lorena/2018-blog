---
layout: post
title: How to Connect a Custom Domain to your Site for Free
date: 2018-07-31
categories: [websites]
comments: true
tags: [blog, branding, business, domain, github pages, it solutions, namecheap, portfolio, subdomain, tumblr, tutorial, website creation, x10hosting]
excerpt: "Making sure your network of online profiles and sites are named consistently is important for your brand, especially if you are a professional. The process of connecting a custom domain or subdomain to your blog or website may seem challenging for a beginner, but thankfully it's easier than you may think. The most complicated aspect of it is that the way you do it varies depending on your host and domain name registrar (DNR). I only have experience working with Namecheap, so for this post I will be explaining how to connect domains and subdomains from this DNR to my favorite free hosting providers Tumblr, Github Pages, and x10Hosting.com."
img: tyler-nix-590905-unsplash2.jpg
---

<!--
<iframe class="video" src="https://www.youtube.com/embed/qAHwwrGE4sA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

<p><first-letter>M</first-letter>aking sure your network of online profiles and sites are named consistently is important for your brand, especially if you are a professional. The process of connecting a custom domain or subdomain to your blog or website may seem challenging for a beginner, but thankfully it's easier than you may think. The most complicated aspect of it is that the way you do it varies depending on your host and domain name registrar (DNR). I only have experience working with <a href="http://namecheap.com" target="_blank">Namecheap</a>, so for this post I will be explaining how to connect domains and subdomains from this DNR to my favorite free hosting providers <a href="https://tumblr.com" target="_blank">Tumblr</a>, <a href="http://pages.github.com" target="_blank">Github Pages</a>, and <a href="http://x10hosting.com">x10Hosting.com</a>.</p>

<h3>What is a DNR?</h3>

<p>For those who don’t know, domain name registrars are sites where you can purchase and manage domain names and make use of additional features such as subdomain creation, URL redirection, and email forwarding. The registrar I use is Namecheap.com because as its name implies, the domains on there are very cheap when compared to competitors and honestly a much better alternative to a “free domain” with a paid hosting plan (although I’ll leave that explanation for another post).</p>

<h2>The Process</h2>

<p>After purchasing a domain, go to your Namecheap dashboard and click on “Domain List” on the left sidebar. Click on “Manage” next to your domain name and go to “Advanced DNS”. Under “Host Records” you can add new records in order to connect your domains or subdomains to your free sites. When connecting domains to sites, there's two records that are used: A records and CNAME records. A records point to nameservers, and CNAME records point to the original domain. Remember that it may take <strong>30 minutes to 24 hours</strong> for records to take effect. Clearing your browser's cache may help speed up the process. Also, Namecheap logs you out after a few minutes of inactivity for your protection, so don't be alarmed if your changes don't save - just refresh the page and log in again.</p>

<h3>For Tumblr</h3>

<img src="{{ site.url }}/img/TumblrDomainSection.png" alt="" class="img-fluid"/>

<p class="caption">Where you type your domain in your Tumblr blog settings</p>

<p>To navigate to where you'll add your domain, go to the little person icon in the top right of your page and click "Edit Appearance" under the Tumblr to which you want to attach your domain. Then click the little pencil icon next to your "Tumblr URL" to edit your domain. Click the little slide button next to "Use a custom domain". You'll want to type it in immediately, but <em>not so fast.</em></p>

<img src="{{ site.url }}/img/TumblrDomainError.png" alt="" class="img-fluid"/>

<p class="caption">Error message for custom domain</p>

<img src="{{ site.url }}/img/TumblrDomainError2.png" alt="" class="img-fluid"/>

<p class="caption">Error message for custom subdomain</p>

<p>Click "Test Domain" and you'll see there's some work to do. To use your domain, go back to Namecheap and add two records. You'll want these two records to look like this:</p>

<img src="{{ site.url }}/img/TumblrDomainNamecheap.png" alt="" class="img-fluid"/>

<p>To use a subdomain, simply change the value of the Host in the CNAME record from www to your desired subdomain. If you want, you can even delete the A record, and it should still work. Now you can attach this domain to any of your Tumblr blogs!</p>

<img src="{{ site.url }}/img/TumblrGoodDomain.png" alt="" class="img-fluid"/>

<p class="caption">Success.</p>

<h3>Github Pages</h3>

<p>First create a new repository by clicking on the plus button to the left of your profile picture in the top right corner of the page. Click "New repository", name it, type a description for it if you want, and make sure to fill the checkbox to create a README.md file. Next, click the Settings tab of your newly made repo, scroll down to "Github Pages", and set the Source to "master branch". Save it, and Github Pages will now be enabled for your repository. Then you can upload your index.html and other files. You can nab a one-time Github.io subdomain for free if you name your repo "<em>username</em>.github.io".</p>

<p>However, you can attach your own purchased domain or subdomains to any of your repositories, by editing your Namecheap records and then typing in your domain or subdomain in the Custom domain section. Note that, unlike with Tumblr, your site will not have HTTPS if you apply a custom domain.</p>

<img src="{{ site.url }}/img/GithubCustomDomain.png" alt="" class="img-fluid"/>

<p class="caption">The GitHub Pages settings for your repo</p>

<p>To be able to set a custom domain, add these records in Namecheap:</p>

<img src="{{ site.url }}/img/GithubDomainNamecheap.png" alt="" class="img-fluid"/>

<p>For the subdomain, you can do the same as you do for attaching a subdomain on Tumblr. Now, you can attach your domain to any of your repos! </p>

<img src="{{ site.url }}/img/GithubDomainSuccess.png" alt="" class="img-fluid"/>

<p class="caption">Another success!</p>

<p>You should now see a CNAME file in your repo that contains nothing but the domain or subdomain your static site now uses.</p>

<img src="{{ site.url }}/img/githubcname.png" alt="" class="img-fluid"/>

<p class="caption">The new CNAME file</p>

<img src="{{ site.url }}/img/githubcname2.png" alt="" class="img-fluid"/>

<p class="caption">The contents of the CNAME file</p>

<h3>x10Hosting</h3>

<p>Now with x10Hosting.com, connecting a domain is different because the website uses cPanel and requires you to park your domain on their servers. Because of this, they can impose limits on how many domains and subdomains you can use to create websites.</p>

<img src="{{ site.url }}/img/x10hostingdomainpage.png" alt="" class="img-fluid"/>

<p class="caption">You are allowed only 1 parked domain and 2 subdomains.</p>

<p>Once you log in, click the button to open your cPanel. Click on "Domains" and then click on the green button to add a new domain. </p>

<img src="{{ site.url }}/img/x10hostingdomainerror.png" alt="" class="img-fluid"/>

<p class="caption">Error message explaining what to do to park the domain.</p>

<p>To park a domain to use on x10Hosting, you must do as this page tells you. Go back to Namecheap, and this time stay on the Domain tab of your domain and scroll down to the section titled "Nameservers". Set up your nameservers like so:</p>

<img src="{{ site.url }}/img/x10hostingnameservers.png" alt="" class="img-fluid"/>

<p>With that you can go back to x10Hosting and click "Add Domain". Note that the DNS Server may take up to 48 hours to take effect. If you wish to build a website on top of a subdomain instead of a domain, you may now create a subdomain from your own domain back in the Add New Domain page.</p>

<img src="{{ site.url }}/img/x10hostingsubdomainaddition.png" alt="" class="img-fluid"/>

<p class="caption">Creating a subdomain requires having the domain parked.</p>

<p>Now you're able to create a website using your own domain or subdomain!</p>

<img src="{{ site.url }}/img/x10hostingsuccess.png" alt="" class="img-fluid"/>

<p class="caption">Three times the charm.</p>

<h3>Conclusion</h3>

<p>And that's that! Now you know how to connect your domains and subdomains to three different free hosting services (Tumblr, Github Pages, and x10Hosting) in three different ways! If you think what you learned here was useful, I encourage you to go and build that blog or portfolio you always wanted using your original brand name like a true professional.</p>

<h4>Resources</h4>

<p>Articles:</p>

<ul>
	<li><a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9247/2208/how-do-i-use-my-domain-with-my-tumblr-account" target="_blank">"How do I use my domain with my Tumblr account"</a> by Namecheap</li>
	<li><a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages" target="_blank">"How do I link my domain to Github Pages"</a> by Namecheap</li>
	<li><a href="http://x10hosting.com/support/domains/add-domain-name" target="_blank">"Adding your own domain name"</a> by x10Hosting</li>
</ul>

<p>Domain Name Registrar:</p>

<ul>
	<li><a href="https://namecheap.com" target="_blank">Namecheap</a></li>
</ul>

<p>Free Hosts:</p>

<ul>
	<li><a href="https://tumblr.com" target="_blank">Tumblr</a></li>
	<li><a href="https://pages.github.com" target="_blank">Github Pages</a> on <a href="https://github.com" target="_blank">Github</a></li>
	<li><a href="http://x10hosting.com" target="_blank">x10Hosting</a></li>
</ul>

<p>Image credits:</p>

<ul>
	<li>Photo by Tyler Nix on <a href="https://unsplash.com/search/photos/connection?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Unsplash</a></li>
	<li>Screenshots from websites</li>
</ul>
