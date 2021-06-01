---
name: Nexus
image: nexus.png
description: Enhance the social experience of going out to bars and clubs.
webUrl: https://expo.io/@adamjnav/nexus
dead: true
stack:
  front end:
    - expo
    - react native
  back end:
    - firebase
---

Nexus was a mobile app that aimed to create a better social experience when going out to the bars and clubs. It aimed to do so by letting users know what venues their close friends were at via geofencing and allowed them to subscribe to their favorite venues to be alerted of any specials or one-time deals. On the venue owner side, it allowed them to leverage real-time alerts to push out specials or deals with the aim to increase foot traffic. (I do still believe there is value in that functionality if it can be implemented correctly).

### Origin Story

During the period of my life when I was going out to the bars regularly, I became annoyed when I would find out, usually via social media, that someone I would've enjoyed meeting up with had I known they were only a few blocks away at a different venue. These missed opportunities for a better night out were the impetus for building out Nexus.

### The Downfall

I made the mistake of doing all of my testing in the suburban area I lived in where the venues are spaced out my several miles. In this case, the geofencing performed well and the location updates worked as expected. But then I went into downtown Milwaukee. It quickly became apparent that the geofencing would not be accurate enough when venues were in such close proximity and in some cases even shared walls. Without the core social functionality being able to work in any Metropolitan area I came to the decision to give up the journey of building out Nexus.
