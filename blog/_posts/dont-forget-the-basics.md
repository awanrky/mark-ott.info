{{{ "title" : "Don't forget the basics", "tags" : [ "programming", "computers" ], "category" : "computers", "date" : "2011-08-16 22:21:54" }}}

A week or so ago I evaluated a database tool for SQL Server, mainly to see if it could help me solve a problem I was trying to troubleshoot.  The company has tried to contact me a couple of times since, I assume to try locking in a sale.  I thought I'd respond to one of those e-mails tonight, and even though what I started writing wasn't a good response to that e-mail I thought it turned out to be a nice blog post.  So here is some of that response...

First of all, my main role is as an application developer (mostly front end), but I do occasionally take on some database development--sometimes writing stored procedures and views, often troubleshooting, and occasionally (thankfully rarely) providing data for one-time requests from the business.

The problem we had the other day that resulted in me trying out your software happened while our dba was on vacation and I discovered a problem in our development system (while trying to test a change I had just made to a business rule.)  The problem was that I was getting two result sets returned from a call to a stored procedure when I should have been getting only one.

This was obviously a problem that had nothing to do with the change I made, and backing out the change seemed to confirm that.  Since I couldn''t find the problem looking at the rather large stored procedure I wanted to know what else had changed recently.  (For most work I do, I would have just checked our version control logs, but we do not use any version control for the database code--at least, none that I can access.)

Our dba has his own tools (he uses a tool similar to the one I evaluated, but I'm not sure if it is yours or not) and his own way of doing things, so I really had only two methods available to do what I wanted.  The first was to check the file share where he saves backup scripts of anything before he changes them, and I found nothing.  The second method was to save the procedure, once from development and once from production, and do a diff to find the change.  (there was a third, very obvious and very effective method that I did not think of, but we''ll get to that later...)

I could find no change.  So I started doing the same for all functions, triggers, etc., that were called (or caused to be called) from executing this procedure.  I quickly got tired of this, and I had spent far too much time working on this one 5-minute change that had sucked up a couple hours of my time already.

So I did two things.  The first was to enlist help from another developer who spends most of his time working with our databases, and the second was to go to your site and download your tool.  My intention was to see all the differences between development and production, and focus my attention on those changes.

I was able to get up and running with little trouble, and the basic functionality I was looking for was easy to find and use.  However, I was getting far too many false positives--nearly everything was showing up with differences--not to the objects themselves, but to (I can't remember what--comments, times, something...) so I knew I would have to start investigating the product a little further to see how to get exactly what I wanted out of it.

But it was about this time the other developer came over to tell me he had made some progress narrowing it down, and indeed he had.  He had taken the simple but efficient approach of commenting out chunks of the procedure until the problem went away, and before long we knew what update to what table was causing the select--and from there it was easy to find the trigger that had the bug.

He sure made me feel dumb, finding the problem in a fraction of the time that I had already spent on this issue--but he''s a nice, bright young guy who tried to make me feel better by saying that he works in these databases every day.  However, I knew the real reason he did so much better than me was that I''d become spoiled to my IDEs and debuggers and testing frameworks and had forgotten the power of a well placed print statement as a debugging tool.

But don't get me wrong--I wouldn't give up all my newfangled productivity tools without a fight.  They'd have to pry my copy of ReSharper out of my cold, dead hands.  It just takes a slap to the face from time to time to remind me not to forget the basics.

And the real kicker is that all my effort would have still come to naught.  The problem we found was also in production, so the path I had taken was not only longer, but it lead to a dead end.

In my defense, had there been a real VCS I could have used to examine the database code changes it would have taken a couple of minutes, not several hours, to reach that dead end.  Or it might not have been a dead end at all, depending on how long that bug had been around...